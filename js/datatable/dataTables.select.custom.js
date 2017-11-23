(function(){
	var DataTable = $.fn.dataTable;
	
	$(document).on( 'preInit.dt.dtSelect.custom', function (e, ctx) {
		var dt = new DataTable.Api(ctx);
		disableMouseSelection(dt);
		if(ctx._select.style !== 'api'){
			enableMouseSelection(dt);
		}
	});
	function getHeaderRow(table){
		var defaultHeaderRow = $(table.header()).find("tr:first");
		var headerRow = $(table.node()).closest("div.dataTables_wrapper").find("div.DTFC_LeftHeadWrapper>table:first tr:first");
		headerRow = (headerRow.length == 0?defaultHeaderRow:headerRow);
		return headerRow;
	}
	function enableMouseSelection(dt){
		var table = dt.table();
		var selector = "table thead "+dt.settings()[0]._select.selector.replace(/\btd\b/g,'th');
		var groupSelector = "table tbody tr.group "+dt.settings()[0]._select.selector+".select-checkbox";
		var sltClass = dt.context[0]._select.className;
		
		$(table.container())
		.on('click.dtSelectAll', selector, function(e) {
			var headerRow = getHeaderRow(table);
			headerRow.toggleClass(sltClass);
			if(headerRow.hasClass(sltClass)){
				table.rows({page:'current'}).select();
				$(table.body()).find('tr.group').addClass(sltClass);
			}else {
				table.rows({page:'current'}).deselect();
				$(table.body()).find('tr.group').removeClass(sltClass);
			}
		} )
		.on('click.dtSelectGroup',groupSelector,function(e){
			var groupTr = $(e.target).parent();
			groupTr.toggleClass('selected');
			var groupChildTr = groupTr.next();
			while(!groupChildTr.hasClass('group') && groupChildTr.length > 0){
				if(groupTr.hasClass('selected')){
					table.rows(groupChildTr).select();
				}else{
					table.rows(groupChildTr).deselect();
				}
				groupChildTr = groupChildTr.next();
			}
		});
		$(table.node())
		.on('deselect.dt.groupcheckbox',function(e){
			var headerRow = getHeaderRow(table);
			headerRow.removeClass('selected');
		});
		$(table.node())
		.on('select.dt.groupcheckbox',function(e){
			console.log(table.rows({selected:false,page:'current'})[0].length)
			if(table.rows({selected:false,page:'current'})[0].length == 0){
				var headerRow = getHeaderRow(table);
				headerRow.addClass('selected');
			}
		});
	}
	function disableMouseSelection(dt){
		var selector = "table thead "+dt.settings()[0]._select.selector.replace(/\btd\b/g,'th');
		var groupSelector = "table tbody tr.group "+dt.settings()[0]._select.selector;
		$(dt.table().container())
		.off( 'click.dtSelectAll', selector)
		.off('click.dtSelectGroup',groupSelector);
		$(dt.table().node())
		.off('deselect.dt.groupcheckbox')
		.off('select.dt.groupcheckbox');
	}
	
}())