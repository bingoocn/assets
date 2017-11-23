(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// if AMD loader is available, register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// OR use browser globals if AMD is not present
		factory(jQuery);
	}
}(function ($) {
	var treePrototype = $.fn.tree.Constructor.prototype;
	var old_sltItem = treePrototype.selectItem;
	var old_sltFolder = treePrototype.selectFolder;
	$.extend(true,treePrototype,{
		selectItem : function(){
			if($(arguments[0]).hasClass('tree-selected') && !this.options.disSelectAbility){
				return;
			}
			old_sltItem.apply(this,arguments);
		},
		selectFolder : function(){
			if($(arguments[0].closest('.tree-branch')).hasClass('tree-selected') && !this.options.disSelectAbility){
				return;
			}
			old_sltFolder.apply(this,arguments);
		}
	});
	$.extend(true,$.fn.tree.defaults,{
		disSelectAbility : true,
		staticData : {}
	})
	var _tree = $.fn.tree;
	var _newTree = function(){
		var arg = $.extend(true,{},$.fn.tree.defaults,arguments[0]);
		var data;
		if((data = arg.staticData.data) != null){
			var pidSearchObj = {};//用于判断节点是否有子节点
			var idSearchObj = {};//用于判断某id是否是节点id
			var rootNodes=[];
			var newData = [];
			$(data).each(function(i,item){
				idSearchObj[item.attr.id] = 1;
				pidSearchObj[item.attr.pId] = 1;
			});
			$(data).each(function(i,item){
				if(idSearchObj[item.attr.pId] == null){
					rootNodes.push(item);
					if(pidSearchObj[item.attr.id] == null){
						item.type = "item";
					}else{
						item.type = "folder";
					}
				}else{
					newData.push(item);
				}
			});
			data = newData;
			arguments[0].dataSource = function(parentData, callback){
				if($.isEmptyObject(parentData)){
					callback({data:rootNodes});
				}else{
					var sltNode = [];
					newData = [];
					$(data).each(function(i,item){
						if(parentData.attr.id == item.attr.pId){
							if(pidSearchObj[item.attr.id] != null){
								item.type = "folder";
							}else{
								item.type = "item";
							}
							sltNode.push(item);
						}else{
							newData.push(item);
						}
					});
					data = newData;
					callback({data:sltNode});
				}
			}
		}
		var treeObj = _tree.apply(this,arguments);
		var _folderSelect = arguments[0].folderSelect == null?$.fn.tree.defaults.folderSelect:arguments[0].folderSelect;
		try{
			if(!_folderSelect && (Object.prototype.toString.call(arguments[0]).slice(8, -1) != "String")){
				treeObj.each(function (){
					var $this = $(this);
					var data = $this.data('fu.tree');
					data.$element.on('click.fu.tree','.icon-caret',$.proxy(function (ev) {
						this.toggleFolder($(ev.currentTarget).parent());
					}, data));
				});
			}
		}catch(e){}
		return treeObj;
	};
	$.extend(true,_newTree,$.fn.tree);
	$.fn.tree = _newTree;
}));
