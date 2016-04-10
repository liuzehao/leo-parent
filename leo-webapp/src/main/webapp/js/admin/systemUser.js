var userListTable = function () {
    var reloadTable = function (pageFlag) {
        $("#datatable_ajax").DataTable().draw(pageFlag)
    };
    var onSortColumn = function (sortColumn, sortDirection) {
        switch (sortColumn) {
            case "loginName":
                sortColumn = "login_name";
                break;
            case "username":
                sortColumn = "user_name";
                break;
            case "roleName":
                sortColumn = "role_name";
                break;
        }
        return onSortColumnDefault(sortColumn, sortDirection);
    };
    var ruleUser = {
        objInfo: {
            loginname: {
                checkEmpty: ["loginname", "账号"],
                max: ["loginname", 10, "账号"]
            },
            username: {
                checkEmpty: ["username", "用户名"],
                max: ["username", 10, "用户名"]
            },
            password: {
                checkEmpty: ["password", "密码"],
                checkRegExp: ["password", "", JCRegExp.letterNum]
            },
            roleName : {
                checkEmpty:["roleName","角色"]
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
            url: basePath + "admin/user/findAllUser",
            onSortColumn: onSortColumn,
            onQuery: function (data) {
                data.loginName = $("#logName").val();
                data.username = $("#userName").val();
                data.roleName = $("#roleName").val();
            },
            dataTable: {
                "columns": [
                    {data: 'loginName', orderable: true},
                    {data: 'username', orderable: true},
                    {data: 'roleName', orderable: true},
                    {data: 'operate', orderable: false,
                        render: function (data, type, full) {
                            var returnValue = '<a class="edit btn default btn-xs purple" onclick="userListTable.editUserInfo(\'' + full.userId + '\')" id="edit' + full.userId + '"><i class="fa fa-edit faa-shake animated-hover"></i>编辑</a>&nbsp;'
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
                    url: basePath + "admin/user/delUserDo?id=" + $row.data().userId,
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
        addUserInfo: function () {
            $("#dialogTitle").text("用户添加")
            $("#userEditIframe").attr("src", basePath + "admin/user/addUserDo");
            $("#modalDialog").modal("show");
        },
        editUserInfo: function (id) {
            $("#dialogTitle").text("用户编辑")
            $("#userEditIframe").attr("src", basePath + "admin/user/editUserDo?id=" + id);
            $("#modalDialog").modal("show");
        },
        quit: function () {
            location.href = "about:blank";
            parent.parent.$("#modalDialog").modal("hide");
        },
        editSave: function () {
            var ruleEditUser = $.extend(true, {}, ruleUser, {
                objInfo: {
                    loginName: {
                        ajax: [basePath + "admin/user/validateUserName", {}, {userId: "$('#checkId').val().trim()", loginName: "$('#loginname').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleEditUser)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/user/editUser",
                data: {
                    userId: $("#checkId").val(),
                    loginName: $("#loginname").val(),
                    username: $("#username").val(),
                    password: $("#password").val() == $("#oldPassword").val() ? $("#oldPassword").val() : $("#password").val().md5(),
                    roleId: $("#roleName").getJcAutoCompleteHiddenValue() == undefined ? $("#roleId").val() : $("#roleName").getJcAutoCompleteHiddenValue()
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
            var ruleAddUser = $.extend(true, {}, ruleUser, {
                objInfo: {
                    loginName: {
                        ajax: [basePath + "admin/user/validateUserName", {}, {loginName: "$('#loginname').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleAddUser)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/user/addUser",
                data: {
                    loginName: $("#loginname").val(),
                    username: $("#username").val(),
                    password: $("#password").val().md5(),
                    roleId: $("#roleName").getJcAutoCompleteHiddenValue()
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
        returnObj.obj = $('#loginname')
        returnObj.errMsg = "此账号已存在！"

        if (data == "true") {
            returnObj.bool = true;
        }
        if (data == "false") {
            returnObj.bool = false;
        }

        return returnObj;
    }

}();