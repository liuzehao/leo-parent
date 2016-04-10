/**
 * Created by panzhuowen on 2014/10/19.
 */
var permissionListTable = function () {
    var reloadTable = function (pageFlag) {
        $("#datatable_ajax").DataTable().draw(pageFlag)
    };
    var onSortColumn = function (sortColumn, sortDirection) {
        switch (sortColumn) {
            case "permToken":
                sortColumn = "perm_token";
                break;
            case "description":
                sortColumn = "description";
                break;
        }
        return onSortColumnDefault(sortColumn, sortDirection);
    };
    var rulePermission = {
        objInfo: {
            permToken: {
                checkEmpty: ["permToken", "权限字符串"],
                max: ["permToken", 30, "权限字符串"]
            },
            description: {
                checkEmpty: ["description", "权限描述"],
                max: ["description", 30, "权限描述"]
            }
        }
    };
    /**
     * dataTable事件初始化方法
     */
    var handleRecords = function () {
        var grid = new DataTable();
        var $table = $("#datatable_ajax");
        grid.init({
            src: $table,
            url: basePath + "admin/permission/findAllPermission",
            onSortColumn: onSortColumn,
            onQuery: function (data) {
                data.permToken = $("#permToken").val();
                data.description = $("#description").val();
            },
            dataTable: {
                "columns": [
                    {data: 'permToken', orderable: true},
                    {data: 'description', orderable: true},
                    {data: 'operate', orderable: false,
                        render: function (data, type, full) {
                            var returnValue = '<a class="edit btn default btn-xs purple" onclick="permissionListTable.editPermissionInfo(\'' + full.id + '\')" id="edit' + full.id + '"><i class="fa fa-edit faa-shake animated-hover"></i>编辑</a>&nbsp;'
                            returnValue += '<a class="delete btn default btn-xs black faa-flash animated-hover " data-target="#deleteRowConfirm" data-toggle="modal"><i class="fa fa-trash-o"></i>删除</a>'
                            return returnValue
                        }
                    }
                ]
            }
        });

        //重新载入按钮事件
        $("#reloadTable").click(function () {
            reloadTable(false);
        });

        //显示列选择按钮事件
        $('#datatable_ajax_column_toggler').find('input[type="checkbox"]').change(function () {
            var iCol = parseInt($(this).attr("data-column"));
            $table.DataTable().column(iCol).visible(!$table.DataTable().column(iCol).visible());
        });
        //行删除按钮事件
        $table.find('a.delete').live('click', function () {
            var $this = $(this);
            //confirm中确认按钮事件，此处需要unbind，否则点击取消时下次再点击删除按钮会重复绑定click。
            $("#deleteRow").unbind("click.deleteRow").bind("click.deleteRow", function () {
                var $row = $table.DataTable().row($this.parents('tr')[0]);
                $.ajax({
                    url: basePath + "admin/permission/delPermission?id=" + $row.data().id,
                    dataType: "json",
                    type: "DELETE",
                    success: function () {
                        $table.DataTable().draw();
                        $('#deleteRowConfirm').modal('hide');
                        toast.success();
                    },
                    error: doError
                })
            })
        });

    };

    return {
        init: function () {
            handleRecords();
        },
        addPermissionInfo: function () {
            $("#dialogTitle").text("权限添加")
            $("#userEditIframe").attr("src", basePath + "admin/permission/addPermissionDo");
            $("#modalDialog").modal("show");
        },
        editPermissionInfo: function (id) {
            $("#dialogTitle").text("权限编辑")
            $("#userEditIframe").attr("src", basePath + "admin/permission/editPermissionDo?id=" + id);
            $("#modalDialog").modal("show");
        },
        quit: function () {
            location.href = "about:blank";
            parent.parent.$("#modalDialog").modal("hide");
        },
        editSave: function () {
            var ruleEditPermission = $.extend(true, {}, rulePermission, {
                objInfo: {
                    permToken: {
                        ajax: [basePath + "admin/permission/validatePermission", {}, {permToken: "$('#permToken').val().trim()",id:"id:$('#checkId').val()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleEditPermission)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/permission/editPermission",
                data: {
                    id:$("#checkId").val(),
                    permToken: $("#permToken").val(),
                    description: $("#description").val()
                },
                dataType: "json",
                type: "POST",
                success: function () {
                    location.href = "about:blank";
                    parent.parent.$("#modalDialog").modal("hide");
                    var $table = parent.$("#datatable_ajax");
                    $table.DataTable().draw();
                    parent.toast.success();
                },
                error: doError
            })
        },
        addSave: function () {
            var ruleAddPermission = $.extend(true, {}, rulePermission, {
                objInfo: {
                    permToken: {
                        ajax: [basePath + "admin/permission/validatePermission", {}, {permToken: "$('#permToken').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleAddPermission)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/permission/addPermission",
                data: {
                    permToken: $("#permToken").val(),
                    description: $("#description").val()
                },
                dataType: "json",
                type: "POST",
                success: function () {
                    location.href = "about:blank";
                    parent.parent.$("#modalDialog").modal("hide");
                    var $table = parent.$("#datatable_ajax");
                    $table.DataTable().draw();
                    parent.toast.success();
                },
                error: doError
            })
        },
        reloadTable: reloadTable
    };


    function backFunc(data, returnObj) {
        returnObj.obj = $('#permToken')
        returnObj.errMsg = "此权限已存在！"

        if (data == "true") {
            returnObj.bool = true;
        }
        if (data == "false") {
            returnObj.bool = false;
        }

        return returnObj;
    }

}();