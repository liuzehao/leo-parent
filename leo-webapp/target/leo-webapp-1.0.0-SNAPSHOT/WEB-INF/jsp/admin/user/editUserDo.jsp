<%--
  Created by IntelliJ IDEA.
  User: panzhuowen
  Date: 2014/10/18
  Time: 14:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <title>用户新增页</title>
    <%@include file="../../includes/common.jsp" %>
    <script src="<c:url value="/js/admin/systemUser.js"/>" type="text/javascript"></script>
</head>
<body style="background: #ffffff">
<div class="page-container">
    <div class="page-content-wrapper">
        <div class="page-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="portlet box">
                        <div class="portlet-body form">
                            <!-- BEGIN FORM-->
                            <form action="#" class="form-horizontal">
                                <div class="form-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">账号
                                                    <span class="required" aria-required="true">* </span>
                                                </label>


                                                <div class="col-sm-6">
                                                    <input id="checkId" name="checkId" type="hidden"
                                                           value="${user.userId}"/>
                                                    <input type="text" class="form-control input-medium" id="loginname"
                                                           name="name"
                                                           value="${user.loginName}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">用户名
                                                    <span class="required" aria-required="true">* </span>
                                                </label>

                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control input-medium" id="username"
                                                           name="username"
                                                           value="${user.username}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">密码
                                                    <span class="required" aria-required="true">* </span>
                                                </label>

                                                <div class="col-sm-6">
                                                    <input type="password" class="form-control input-medium"
                                                           id="password" name="password"
                                                           maxlength="16" placeholder="请输入6-16位密码"
                                                           value="${user.password}"/>
                                                    <input id="oldPassword" name="oldPassword" type="hidden"
                                                           value="${user.password}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">选择角色
                                                    <span class="required" aria-required="true">* </span>
                                                </label>

                                                <div class="col-sm-7">
                                                    <input type="text" class="form-control input-medium" flag="roleAutoCompleteList"
                                                           name="roleName" id="roleName"autocomplete="off" value="${user.roleName}">
                                                    <input id="roleId" name="roleId" type="hidden"
                                                           value="${user.roleId}"/>
                                                    <%--<input id="roleName" type="text" readonly value=""--%>
                                                    <%--class="form-control" onclick="showRoleMenu();"/>--%>
                                                    <%--<input id="roleId" name="roleId" type="hidden" value=""/>--%>
                                                </div>
                                                <%--<div class="col-sm-2">--%>
                                                <%--<a id="chooseUserRole" href="#"--%>
                                                <%--onclick="showRoleMenu(); return false;">选择</a>--%>
                                                <%--</div>--%>
                                            </div>
                                        </div>
                                        <%--<div class="col-sm-6">--%>
                                            <%--<div class="form-group">--%>
                                                <%--<label class="control-label col-sm-3">确认密码--%>
                                                    <%--<span class="required" aria-required="true">* </span>--%>
                                                <%--</label>--%>

                                                <%--<div class="col-sm-6">--%>
                                                    <%--<input type="password" class="form-control input-medium"--%>
                                                           <%--id="repassword" name="repassword"--%>
                                                           <%--maxlength="16" placeholder="请输入6-16位密码"--%>
                                                           <%--value=""/>--%>
                                                <%--</div>--%>
                                            <%--</div>--%>
                                        <%--</div>--%>
                                    </div>

                                </div>
                                <div class="form-actions right">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="col-md-offset-3 col-md-9">
                                                <button type="button" class="btn default green"
                                                        id="saves" onclick=" userListTable.editSave()">保存
                                                </button>
                                                &nbsp
                                                <button type="button" class="btn default"
                                                        onclick="userListTable.quit()">关闭
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <!-- END FORM-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
