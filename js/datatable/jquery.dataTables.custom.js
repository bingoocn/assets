(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";
	$.extend(true,$.fn.dataTable.defaults,{
		oLanguage : {
			sUrl: context.path + '/assets/js/datatable/dataTables.i18n.zh-CN.json'
		}
	})
	$.extend(true,$.fn.dataTable.models.oColumn,{
		combineAdjacentSame:false
	})
	$.fn.dataTable.models.oSettings.aoDrawCallback.push({
		sName : "combineCell",
		fn : function(setting){
			var api = this.api();
			var rows = api.rows( {page:'current'} ).nodes();
			function combineCell(index){
				var last={};
				api.column(index, {page:'current'} ).data().each( function ( item, i ) {
					if ( last.content !== item ) {
						var groupHead = $(rows).eq(i).find("td").eq(index);
						groupHead.show().attr("rowspan",1);
						last.content = item;
						last.index = i;
					} else{
						$(rows).eq(i).find("td").eq(index).hide();
						var groupHead = $(rows).eq(last.index).find("td").eq(index);
						groupHead.attr("rowspan",parseInt(groupHead.attr("rowspan"))+1);
					}
				});
			}
			$.each(setting.aoColumns,function(i,item){
				if(item.combineAdjacentSame){
					combineCell(i);
				}
			})
		}
	})
	//
	// Pipelining function for DataTables. To be used to the `ajax` option of DataTables
	//
	$.fn.dataTable.pipeline = function ( opts ) {
		// Configuration options
		var conf = $.extend( {
			pages: 5,     // number of pages to cache
			url: '',      // script url
			data: null,   // function or object with parameters to send to the server
						  // matching how `ajax.data` works in DataTables
			method: 'GET' // Ajax HTTP method
		}, opts );
	 
		// Private variables for storing the cache
		var cacheLower = -1;
		var cacheUpper = null;
		var cacheLastRequest = null;
		var cacheLastJson = null;
	 
		return function ( request, drawCallback, settings ) {
			var ajax          = false;
			var requestStart  = request.start;
			var drawStart     = request.start;
			var requestLength = request.length;
			var requestEnd    = requestStart + requestLength;
			 
			if ( settings.clearCache ) {
				// API requested that the cache be cleared
				ajax = true;
				settings.clearCache = false;
			}
			else if ( cacheLower < 0 || requestStart < cacheLower || requestEnd > cacheUpper ) {
				// outside cached data - need to make a request
				ajax = true;
			}
			else if ( JSON.stringify( request.order )   !== JSON.stringify( cacheLastRequest.order ) ||
					  JSON.stringify( request.columns ) !== JSON.stringify( cacheLastRequest.columns ) ||
					  JSON.stringify( request.search )  !== JSON.stringify( cacheLastRequest.search )
			) {
				// properties changed (ordering, columns, searching)
				ajax = true;
			}
			 
			// Store the request for checking next time around
			cacheLastRequest = $.extend( true, {}, request );
	 
			if ( ajax ) {
				// Need data from the server
				if ( requestStart < cacheLower ) {
					requestStart = requestStart - (requestLength*(conf.pages-1));
	 
					if ( requestStart < 0 ) {
						requestStart = 0;
					}
				}
				 
				cacheLower = requestStart;
				cacheUpper = requestStart + (requestLength * conf.pages);
	 
				request.start = requestStart;
				request.length = requestLength*conf.pages;
	 
				// Provide the same `data` options as DataTables.
				if ( $.isFunction ( conf.data ) ) {
					// As a function it is executed with the data object as an arg
					// for manipulation. If an object is returned, it is used as the
					// data object to submit
					var d = conf.data( request );
					if ( d ) {
						$.extend( request, d );
					}
				}
				else if ( $.isPlainObject( conf.data ) ) {
					// As an object, the data given extends the default
					$.extend( request, conf.data );
				}
				settings.jqXHR = $.ajax( {
					"type":     conf.method,
					"url":      conf.url,
					"data":     request,
					"dataType": "json",
					"cache":    false,
					beforeSend : function(){
						if(settings.oInit.dataScrt){
							var _setting = $.extend(true,{},settings,{ajax:conf});
							_scrtByServerSide(_setting);
						}
					},
					"success":  function ( json ) {
						cacheLastJson = $.extend(true, {}, json);
	 
						if ( cacheLower != drawStart ) {
							json.data.splice( 0, drawStart-cacheLower );
						}
						if ( requestLength >= -1 ) {
							json.data.splice( requestLength, json.data.length );
						}
						 
						drawCallback( json );
					}
				} );
			}
			else {
				var json = $.extend( true, {}, cacheLastJson );
				json.draw = request.draw; // Update the echo for each response
				json.data.splice( 0, requestStart-cacheLower );
				json.data.splice( requestLength, json.data.length );
	 
				drawCallback(json);
			}
		}
	};
	 
	// Register an API method that will empty the pipelined data, forcing an Ajax
	// fetch on the next draw (i.e. `table.clearPipeline().draw()`)
	$.fn.dataTable.Api.register( 'clearPipeline()', function () {
		return this.iterator( 'table', function ( settings ) {
			settings.clearCache = true;
		} );
	} );
	
	var defaultScrtCode = "01";//默认显示密级登记
	var defaultScrtContainer = "#scrtText";
	var defaultScrtColName = "secretLevel";
	//服务端分页查询，最高密级获取
	function _scrtByServerSide(setting) {
		//远程数据分页查询，找出请求url
		var url;
		if(typeof setting.ajax === 'string'){
			url = setting.ajax;
		}else if($.isPlainObject(setting.ajax)){
			url = setting.ajax.url;
		}
		//判断url是否设置，对于ajax属性为function的情况，需要在function定义中自行完成
		if(url != null){
			var dataScrtColName = setting.oInit.dataScrtColName||defaultScrtColName;
			var ajaxData = {
					columns : [{
						data:dataScrtColName
						}],
					order : [{column:0,dir:"desc"}],
					draw : 1,
					length : 1,
					start : 0
			};
			$.ajax({
				type : "post",
				url : url,
				data : ajaxData,
				dataType : "json",
				cache : false,
				success : function(json){
					var scrtCode = defaultScrtCode;
					var dataKey = setting.ajax.dataSrc;
					var data = (dataKey == ""?json:json[dataKey||"data"]);
					if(data.length == 1){
						scrtCode = data[0][dataScrtColName];
					}
					$(setting.oInit.dataScrtContainer||defaultScrtContainer).text($.transSrct(scrtCode));
				}
			})
		}
	}
	function _scrtByData(setting,data){
		var dataScrtColName = setting.oInit.dataScrtColName||defaultScrtColName;
		var datasize = data.length;
		var scrtCode = defaultScrtCode;
		//支持按照已经转码的密级字段进行最高密级的查找
		var transToCode = true;
		if(datasize>0){
			var sortIndexs = [];
			transToCode = !(/^\d{2}$/.test(data[0][dataScrtColName]));
			for(var i = 0;i<datasize;i++){
				sortIndexs.push(i);
			}
			sortIndexs.sort(function(a,b){
				var codeA = transToCode?$.transSrct(data[a][dataScrtColName]):data[a][dataScrtColName];
				var codeB = transToCode?$.transSrct(data[b][dataScrtColName]):data[b][dataScrtColName];
				return (codeA<codeB?1:(codeA>codeB?-1:0));
			});
			scrtCode = transToCode?$.transSrct(data[sortIndexs[0]][dataScrtColName]):data[sortIndexs[0]][dataScrtColName];;
		}
		$(setting.oInit.dataScrtContainer||defaultScrtContainer).text($.transSrct(scrtCode));
	}

	//代理构造函数，为密级功能扩展参数
	var _oldConstructor = $.fn.dataTable;
	var _newConstructor = function(options){
		if(options&&options.dataScrt){
			if(options.serverSide){
				this.on('preXhr.dt', function ( e, settings, data ){
					_scrtByServerSide(settings);
				});
			}else if(options.data){
				this.on( 'preInit.dt', function (e, settings){
					_scrtByData(settings,options.data);
				});
			}else if(options.ajax){
				this.on('xhr.dt',function( e, settings, json, xhr ){
					_scrtByData(settings,json);
				});
			}
		}
		return _oldConstructor.call(this,options);
	};
	$.fn.dataTable =  $.extend(true,_newConstructor,_oldConstructor);
	
})
)