var userHomework = function(){

    var reloadTable = function(pageFlag){
        $("#datatable_ajax").DataTable().draw(pageFlag)
    };

    //注意名称需要与数据库和entity的一一对应
    var onSortColumn = function(sortColumn, sortDirection){
        switch(sortColumn){
            case "loginName":
                sortColumn = "login_name";
                break;
            case "userName":
                sortColumn = "user_name";
                break;
        }
        return onSortColumnDefault(sortColumn, sortDirection);
    };

    var ruleUser = {
        objInfo:{
            loginname:{
                checkEmpty:["loginname", "账号"],
                max:["loginname", 10, "账号"]
            },
            username:{
                checkEmpty:["username", "用户名"],
                max:["username", 10, "用户名"]
            },
            password:{
                checkEmpty:["password", "密码"],
                max:["password", "", JCRegExp.letterNum]
            }
        }
    };

    /**
     * 初始化表
     * 注意变量名与entity中的变量名需要一一对应
     * */
    var handleRecords = function(){
        var grid = new DataTable();
        var $table = $("#datatable_ajax");
        grid.init({
            src: $table,
            url: basePath + "admin/userHomework/findAllUserHomework",
            onSortColumn: onSortColumn,
            onQuery: function(data){
                data.loginName = $("#logName").val();
                data.username = $("#userName").val();
            },
            dataTable:{
                "columns": [
                    {data: 'loginName', orderable: true},
                    {data: 'userName', orderable: true},
                    {data: 'operate', orderable: false,
                        render: function(data, type, full){
                            var returnValue = '<a class="edit btn default btn-xs purple" onclick="userHomework.editUserHomeworkInfo(\'' + full.userId + '\')" id="edit' + full.userId + '"><i class="fa fa-edit faa-shake animated-hover"></i>编辑</a>&nbsp;'
                            returnValue += '<a class="delete btn default btn-xs black faa-flash animated-hover " data-target="#deleteRowConfirm" data-toggle="modal"><i class="fa fa-trash-o"></i>删除</a>'
                            return returnValue
                        }
                    }
                ]
            }
        });

        $("#reloadTable").click(function(){
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
                    url: basePath + "admin/userHomework/delUserHomeworkDo?id=" + $row.data().userId,
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
        init: function(){
            alert("");
            handleRecords();
        } ,

        addUserHomeworkInfo: function () {
            $("#dialogTitle").text("用户添加")
            $("#userEditIframe").attr("src", basePath + "admin/userHomework/addUserHomework");
            $("#modalDialog").modal("show");
        },

        editUserHomeworkInfo: function (id) {
            $("#dialogTitle").text("用户编辑")
            $("#userEditIframe").attr("src", basePath + "admin/userHomework/editUserHomeworkDo?id=" + id);
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
                        ajax: [basePath + "admin/userHomework/validateUserName", {}, {userId: "$('#checkId').val().trim()", loginName: "$('#loginname').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleEditUser)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/userHomework/editUserHomework",
                data: {
                    userId: $("#checkId").val(),
                    loginName: $("#loginname").val(),
                    userName: $("#username").val(),
                    password: $("#password").val() == $("#oldPassword").val() ? $("#oldPassword").val() : $("#password").val().md5()
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
                        ajax: [basePath + "admin/userHomework/validateUserName", {}, {loginName: "$('#loginname').val().trim()"},
                            backFunc, "text", "POST"]
                    }
                }
            });
            if (!JC.validate(ruleAddUser)) return;
            $("#saves").button('loading');
            $.ajax({
                url: basePath + "admin/userHomework/addUserHomework",
                data: {
                    loginName: $("#loginname").val(),
                    userName: $("#username").val(),
                    password: $("#password").val().md5()
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
