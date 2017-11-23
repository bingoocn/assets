//人员信息填报表格数据
/* var InitiateEditableDataTable = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable').dataTable({
                "data": [{
					"year": "2015",
					"group": "北化集团",
					"company": "255厂",
					"equiment_class": "2000000  通用设备",
					"equiment_code": "0123-11111165",
					"equiment_name": "柴油内燃机",
					"model_special": "XM206",
					"power_capacity": "1000W",
					"equiment_status": "在用",
					"consumption_style": "成品油",
					"report_status": "已上报",
					"dense": "秘密",
					"discription": "",
				} {
					"name": "白天",
					"company": "兵科院",
					"post": "",
					"division": "成本核算",
					"phone": "0123-11111165",
					"telephone": "23786834001",
					"email": "zyxwv1@sss.com",
					"renew": "2016-01-01",
					"option": function() {
						return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
							'&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
					}
				}],
				pageLength: 50,
                dom : "<'row'<'col-sm-6'f><'col-sm-6'l>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
				buttons: [
					{
						text: '导出Excel',
						extend : 'excelHtml5'
					}
				],
				lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
                columns: [
                    {title:"姓名",data:"name",class:"center"},
                    {"sTitle":"单位名称","data":"company","sClass":"center"},
                    {"sTitle":"职务","data":"post","bSortable": false,"sClass":"center"},
                    {"sTitle":"业务分工","data":"division","bSortable": false,"sClass":"center"},
                    {"sTitle":"办公电话","data":"phone","bSortable": false,"sClass":"center"},
                    {"sTitle":"手机","data":"telephone","bSortable": false,"sClass":"center"},
                    {"sTitle":"邮箱","data":"email","bSortable": false,"sClass":"center"},
                    {"sTitle":"更新时间","data":"renew","sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}(); */
var InitiateEditableDataTable = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable').dataTable({
                "data":[
                    {"name":"吕一","company":"兵科院","post":"处长","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"吕二","company":"兵科院","post":"副处长","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"吕三","company":"兵科院","post":"科长","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"武一","company":"兵科院","post":"副科长","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"武二","company":"兵科院","post":"总会计师","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"武三","company":"兵科院","post":"副总会计师","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"张三","company":"兵科院","post":"副总经理","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"张思","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"张武","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"李斯","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"李木子","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"李白","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"王源","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"王涛","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"王鹏","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"陆逊","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"卢湾","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"陈旭","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"陈楠","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"陈晨","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"陈静","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"刘冬","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"刘峰","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"刘婷","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"白丽","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"白居易","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"白白","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"name":"白天","company":"兵科院","post":"","division":"成本核算","phone":"0123-11111165","telephone":"23786834001","email":"zyxwv1@sss.com","renew":"2016-01-01","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-lg-header"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }}
                ],
                pageLength: 50,
                dom : "<'row'<'col-sm-6'f><'col-sm-6'l>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
				buttons: [
					{
						text: '导出Excel',
						extend : 'excelHtml5'
					}
				],
				lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
                "aoColumns": [
                    {"sTitle":"姓名","data":"name","sClass":"center"},
                    {"sTitle":"单位名称","data":"company","sClass":"center"},
                    {"sTitle":"职务","data":"post","bSortable": false,"sClass":"center"},
                    {"sTitle":"业务分工","data":"division","bSortable": false,"sClass":"center"},
                    {"sTitle":"办公电话","data":"phone","bSortable": false,"sClass":"center"},
                    {"sTitle":"手机","data":"telephone","bSortable": false,"sClass":"center"},
                    {"sTitle":"邮箱","data":"email","bSortable": false,"sClass":"center"},
                    {"sTitle":"更新时间","data":"renew","sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}();
//职务管理表格数据
var InitiateEditableDataTable01 = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable01').dataTable({
                "data":[
                    {"order":"1","code":"0123451","name":"总会计师","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"2","code":"0123452","name":"副总会计师","option":function() {
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"3","code":"0123453","name":"处长","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"4","code":"0123454","name":"副处长","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"5","code":"0123455","name":"总经理（主持财务）","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"6","code":"0123456","name":"副总经理（主持财务）","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"7","code":"0123457","name":"副处长（主持工作）","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"8","code":"0123458","name":"科长","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"9","code":"0123459","name":"副科长","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }}
                ],
                "aLengthMenu": [
                     [10, 50, 100, -1],
                    [10, 50, 100, "All"]
                ],
                "iDisplayLength": 50,
                "sPaginationType": "bootstrap",
                "sDom": "Tflt<'row DTTTFooter'<'col-sm-6'i><'col-sm-6'p>>",
                "oTableTools": {
                    "aButtons": [
                        /*"copy",
                        "print",
                        {
                            "sExtends": "collection",
                            "sButtonText": "Save <i class=\"fa fa-angle-down\"></i>",
                            "aButtons": ["csv", "xls", "pdf"]
                        }*/
                        ],
                    "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf"
                },
                "language": {
                    "search": "",
                    "sLengthMenu": "记录数/页：",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumns": [
                    {"sTitle":"序号","data":"order","sClass":"center"},
                    {"sTitle":"编码","data":"code","bSortable": false,"sClass":"center"},
                    {"sTitle":"名称","data":"name","bSortable": false,"sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable01').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable01').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable01').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}();
//职称管理表格数据
var InitiateEditableDataTable02 = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable02').dataTable({
                "data":[
                    {"order":"1","code":"1123451","name":"高级会计师","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"2","code":"1123452","name":"中级会计师","option":function() {
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"3","code":"1123453","name":"初级会计师","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }}
                ],
                "aLengthMenu": [
                    [10, 50, 100, -1],
                    [10, 50, 100, "All"]
                ],
                "iDisplayLength": 50,
                "sPaginationType": "bootstrap",
                "sDom": "Tflt<'row DTTTFooter'<'col-sm-6'i><'col-sm-6'p>>",
                "oTableTools": {
                    "aButtons": [
                        /*"copy",
                         "print",
                         {
                         "sExtends": "collection",
                         "sButtonText": "Save <i class=\"fa fa-angle-down\"></i>",
                         "aButtons": ["csv", "xls", "pdf"]
                         }*/
                    ],
                    "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf"
                },
                "language": {
                    "search": "",
                    "sLengthMenu": "记录数/页：",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumns": [
                    {"sTitle":"序号","data":"order","sClass":"center"},
                    {"sTitle":"编码","data":"code","bSortable": false,"sClass":"center"},
                    {"sTitle":"名称","data":"name","bSortable": false,"sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable02').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable02').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable02').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}();
//业务分工管理表格数据
var InitiateEditableDataTable03 = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable03').dataTable({
                "data":[
                    {"order":"1","code":"2123451","name":"全面预算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"2","code":"2123452","name":"成本核算","option":function() {
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"3","code":"2123453","name":"固定资产投资决算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"4","code":"2123454","name":"资产负债核算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"5","code":"2123455","name":"往来核算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }}
                ],
                "aLengthMenu": [
                    [10, 50, 100, -1],
                    [10, 50, 100, "All"]
                ],
                "iDisplayLength": 50,
                "sPaginationType": "bootstrap",
                "sDom": "Tflt<'row DTTTFooter'<'col-sm-6'i><'col-sm-6'p>>",
                "oTableTools": {
                    "aButtons": [
                        /*"copy",
                         "print",
                         {
                         "sExtends": "collection",
                         "sButtonText": "Save <i class=\"fa fa-angle-down\"></i>",
                         "aButtons": ["csv", "xls", "pdf"]
                         }*/
                    ],
                    "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf"
                },
                "language": {
                    "search": "",
                    "sLengthMenu": "记录数/页：",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumns": [
                    {"sTitle":"序号","data":"order","sClass":"center"},
                    {"sTitle":"编码","data":"code","bSortable": false,"sClass":"center"},
                    {"sTitle":"名称","data":"name","bSortable": false,"sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable03').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable03').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable03').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}();
//职业资格管理表格数据
var InitiateEditableDataTable04 = function () {
    return {
        init: function () {
            //Datatable Initiating
            var oTable = $('#editabledatatable04').dataTable({
                "data":[
                    {"order":"1","code":"3123451","name":"全面预算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"2","code":"3123452","name":"成本核算","option":function() {
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"3","code":"3123453","name":"固定资产投资决算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"4","code":"3123454","name":"资产负债核算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }},
                    {"order":"5","code":"3123455","name":"往来核算","option":function(){
                        return '<a href="#" class="btn btn-info btn-xs edit" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="fa fa-edit"></i> 编辑</a>' +
                            '&nbsp;<a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>'
                    }}
                ],
                "aLengthMenu": [
                    [10, 50, 100, -1],
                    [10, 50, 100, "All"]
                ],
                "iDisplayLength": 50,
                "sPaginationType": "bootstrap",
                "sDom": "Tflt<'row DTTTFooter'<'col-sm-6'i><'col-sm-6'p>>",
                "oTableTools": {
                    "aButtons": [
                        /*"copy",
                         "print",
                         {
                         "sExtends": "collection",
                         "sButtonText": "Save <i class=\"fa fa-angle-down\"></i>",
                         "aButtons": ["csv", "xls", "pdf"]
                         }*/
                    ],
                    "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf"
                },
                "language": {
                    "search": "",
                    "sLengthMenu": "记录数/页：",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumns": [
                    {"sTitle":"序号","data":"order","sClass":"center"},
                    {"sTitle":"编码","data":"code","bSortable": false,"sClass":"center"},
                    {"sTitle":"名称","data":"name","bSortable": false,"sClass":"center"},
                    {"sTitle":"操作","data":"option","bSortable": false,"sClass":"center"}
                ]
            });

            var isEditing = null;

            //Delete an Existing Row
            $('#editabledatatable04').on("click", 'a.delete', function (e) {
                e.preventDefault();

                if (confirm("确定要删除这条数据吗？") == false) {
                    return;
                }

                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                alert("这条数据已经被删除！");
            });

            //Cancel Editing or Adding a Row
            $('#editabledatatable04').on("click", 'a.cancel', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, isEditing);
                    isEditing = null;
                }
            });

            ////Edit A Row
            //$('#editabledatatable01').on("click", 'a.edit', function (e) {
            //    e.preventDefault();
            //
            //    var nRow = $(this).parents('tr')[0];
            //
            //    if (isEditing !== null && isEditing != nRow) {
            //        restoreRow(oTable, isEditing);
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    } else {
            //        editRow(oTable, nRow);
            //        isEditing = nRow;
            //    }
            //});

            //Save an Editing Row
            $('#editabledatatable04').on("click", 'a.save', function (e) {
                e.preventDefault();
                if (this.innerHTML.indexOf("保存") >= 0) {
                    saveRow(oTable, isEditing);
                    isEditing = null;
                    //Some Code to Highlight Updated Row
                }
            });


            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                oTable.fnDraw();
            }

            function editRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<a href="#" class="btn btn-success btn-xs save"><i class="fa fa-save"></i> 保存</a> <a href="#" class="btn btn-warning btn-xs cancel"><i class="fa fa-times"></i> 取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('input', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate('<a href="#" class="btn btn-info btn-xs edit"><i class="fa fa-edit"></i> 编辑</a> <a href="#" class="btn btn-danger btn-xs delete"><i class="fa fa-trash-o"></i> 删除</a>', nRow, 2, false);
                oTable.fnDraw();
            }
        }

    };
}();

//人员查询
var InitiateSearchableDataTable01 = function () {
    return {
        init: function () {
            var oTable = $('#searchable01').dataTable({
                "data":[
                    {
					"year": "2015",
					"group": "北化集团",
					"company": "255厂",
					"equiment_class": "2000000  通用设备",
					"equiment_code": "0123-11111165",
					"equiment_name": "柴油内燃机",
					"model_special": "XM206",
					"power_capacity": "1000W",
					"equiment_status": "在用",
					"consumption_style": "成品油",
					"report_status": "已上报",
					"dense": "秘密",
					"discription": "",
				}],
                searching: false,
				dom : "<'row'<'col-sm-6'B><'col-sm-6'l>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
				buttons: [
					{
						text: '导出Excel',
						extend : 'excelHtml5'
					}
				],
				lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],                "aoColumns": [
                    {"sTitle":"年度","data":"year","bSortable": false,"sClass":"center"},
                    {"sTitle":"子集团/直管单位名称","data":"group","bSortable": false,"sClass":"center"},
                    {"sTitle":"单位名称","data":"company","bSortable": false,"sClass":"center"},
                    {"sTitle":"设备分类名称","data":"equiment_class","bSortable": false,"sClass":"center"},
                    {"sTitle":"设备编码","data":"equiment_code","bSortable": false,"sClass":"center"},
                    {"sTitle":"设备名称","data":"equiment_name","bSortable": false,"sClass":"center"},
                    {"sTitle":"型号规格","data":"model_special","bSortable": false,"sClass":"center"},
                    {"sTitle":"功率容量","data":"power_capacity","sClass":"center"},
                    {"sTitle":"设备状况","data":"equiment_status","bSortable": false,"sClass":"center"},
                    {"sTitle":"主要能源消费种类","data":"consumption_style","bSortable": false,"sClass":"center"},
                    {"sTitle":"上报情况","data":"report_status","bSortable": false,"sClass":"center"},
                    {"sTitle":"密级","data":"dense","bSortable": false,"sClass":"center"},
                    {"sTitle":"备注","data":"discription","bSortable": false,"sClass":"center"}
                ]
            });

            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                oTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        }
    }
}();

//驻京办查询
var InitiateSearchableDataTable02 = function () {
    return {
        init: function () {
            var oTable = $('#searchable02').dataTable({
                data:[
                    {"company":"兵科院","address":"北京市朝阳区小关西里4号楼2501室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"北化集团","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"北方公司","address":"北京市朝阳区小关西里4号楼2501室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"物资集团","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"财务公司","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"201所","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"202所","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"203所","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"204所","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"动力集团","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"},
                    {"company":"兵科院","address":"北京市海淀区三义庙19号楼1512室","zipcode":"100000","fax":"0123-11111165","director":"蔡一二","phone":"010-23234545","telephone":"12345678901"}
                ],
				searching: false,
				dom : "<'row'<'col-sm-6'B><'col-sm-6'l>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
				buttons: [
					{
						text: '导出Excel',
						extend : 'excelHtml5'
					}
				],
				lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
                "aoColumns": [
                    {"sTitle":"单位名称","data":"company","sClass":"center"},
                    {"sTitle":"驻京办地址","data":"address","sClass":"center"},
                    {"sTitle":"邮编","data":"zipcode","bSortable": false,"sClass":"center"},
                    {"sTitle":"传真","data":"fax","bSortable": false,"sClass":"center"},
                    {"sTitle":"负责人","data":"director","bSortable": false,"sClass":"center"},
                    {"sTitle":"办公电话","data":"phone","bSortable": false,"sClass":"center"},
                    {"sTitle":"手机","data":"telephone","bSortable": false,"sClass":"center"}
                ]
            });

            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                oTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        }
    }
}();