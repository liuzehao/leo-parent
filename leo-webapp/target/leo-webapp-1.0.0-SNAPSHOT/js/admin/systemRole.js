/**
 * Created by panzhuowen on 2014/10/18.
 */
var roleListTable = function () {
    var reloadTable = function (pageFlag) {
        $("#datatable_ajax").DataTable().draw(pageFlag)
    };
    var onSortColumn = function (sortColumn, sortDirection) {
        switch (sortColumn) {
            case "roleName":
                sortColumn = "role_name";
                break;
            case "roleDescription":
                sortColumn = "role_description";
                break;
        }
        return onSortColumnDefault(sortColumn, sortDirection);
    };
    var ruleRole = {
        objInfo: {
            roleName: {
                checkEmpty: ["roleName", "角色名称"],
                max: ["roleName", 20, "角色名称"]
            },
            permToken:{
                checkEmpty: ["permToken","权限字符串"]
            }
        }
    }
    /**
     * dataTable事件初始化方法
     */
    var handleRecords = function () {
        var grid = new DataTable();
        var $table = $("#datatable_ajax");
        grid.init({
            src: $table,
            url: basePath + "admin/role/findAllRole",
            onSortColumn: onSortColumn,
            onQuery: function (data) {
                data.roleName = $("#roleName").val();
                data.roleDescription = $("#roleDescription").val();
            },
            dataTable: {
                "columns": [
                    {data: 'roleName', orderable: true},
                    {data: 'roleDescription', orderable: true},
                    {data: 'operate', orderable: false,
                        render: function (data, type, full) {
                            var returnValue = '<a class="edit btn default btn-xs purple" onclick="roleListTable.editRoleInfo(\'' + full.id + '\')" id="edit' + full.id + '"><i class="fa fa-edit faa-shake animated-hover"></i>编辑</a>&nbsp;'
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
                    url: basePath + "admin/role/delRoleDo?id=" + $row.data().id,
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
        addRoleInfo: function () {
            $("#dialogTitle").text("角色添加")
            $("#userEditIframe").attr("src", basePath + "admin/role/addRoleDo");
            $("#modalDialog").modal("show");
        },
        editRoleInfo: function (id) {
            $("#dialogTitle").text("角色编辑")
            $("#userEditIframe").attr("src", basePath + "admin/role/editRoleDo?id=" + id);
            $("#modalDialog").modal("show");
        },
        quit: function () {
            location.href = "about:blank";
            parent.parent.$("#modalDialog").modal("hide");
        },
        editSave: function () {
            var ruleEditRole = $.extend(true, {}, ruleRole, {
            objInfo: {
                roleName: {
                    ajax: [basePath + "admin/role/validateRoleName", {}, {roleName: "$('#roleName').val().trim()",id:"$('#checkId').val().trim()"},
                        backFunc, "text", "POST"]
                }
            }
        });
        if (!JC.validate(ruleEditRole)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/role/editRole",
                data: {
                    id:$("#checkId").val(),
                    roleName: $("#roleName").val(),
                    roleDescription: $("#description").val(),
                    permToken: $("#permTokens").val() == ""?$("#oldPermTokens").val() : $("#permTokens").val()
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
            var ruleAddRole = $.extend(true, {}, ruleRole, {
                objInfo: {
                    roleName: {
                        ajax: [basePath + "admin/role/validateRoleName", {}, {roleName: "$('#roleName').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleAddRole)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/role/addRole",
                data: {
                    roleName: $("#roleName").val(),
                    roleDescription: $("#description").val(),
                    permToken: $("#menuBtn").val()
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
        returnObj.obj = $('#roleName')
        returnObj.errMsg = "此角色名称已存在！"

        if (data == "true") {
            returnObj.bool = true;
        }
        if (data == "false") {
            returnObj.bool = false;
        }

        return returnObj;
    }

}();