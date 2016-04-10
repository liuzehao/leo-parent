<%--
  Created by IntelliJ IDEA.
  User: panzhuowen
  Date: 2014/10/20
  Time: 10:13
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
    <title>权限编辑</title>
    <%@include file="../../includes/common.jsp" %>
    <script src="<c:url value="/js/admin/systemPermission.js"/>" type="text/javascript"></script>
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
                                                <label class="control-label col-sm-4">权限字符串
                                                    <span class="required" aria-required="true">* </span>
                                                </label>


                                                <div class="col-sm-6">
                                                    <input id="checkId" name="checkId" type="hidden"
                                                           value="${permission.id}"/>
                                                    <input type="text" class="form-control input-medium" id="permToken"
                                                           name="permToken"
                                                           value="${permission.permToken}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">权限描述
                                                    <span class="required" aria-required="true">* </span>
                                                </label>

                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control input-medium"
                                                           id="description"
                                                           name="description"
                                                           value="${permission.description}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="form-actions right">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="col-md-offset-3 col-md-9">
                                                <button type="button" class="btn default green"
                                                        id="saves" onclick=" permissionListTable.editSave()">保存
                                                </button>
                                                &nbsp
                                                <button type="button" class="btn default"
                                                        onclick="permissionListTable.quit()">关闭
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
