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
			"select" : {
				"rows": {
					"_": "选择了%d行",
					"0": "",
					"1": "选择了1行"
				}
			},
			"sProcessing":   "处理中...",
			"sLengthMenu":   "显示 _MENU_ 项结果",
			"sZeroRecords":  "没有匹配结果",
			"sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix":  "",
			"sSearch":       "搜索:",
			"sUrl":          "",
			"sEmptyTable":     "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands":  ",",
			"oPaginate": {
				"sFirst":    "首页",
				"sPrevious": "上页",
				"sNext":     "下页",
				"sLast":     "末页"
			},
			"oAria": {
				"sSortAscending":  ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
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
})
)