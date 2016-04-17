<%--
  Created by IntelliJ IDEA.
  User: Shy
  Date: 2015/8/10
  Time: 10:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>${User.username}&nbsp;的检索历史</title>
    <%@include file="../includes/style.jsp" %>
</head>
<body>
<%@include file="../includes/header.jsp" %>
<input type="hidden" value="${User.userId}" id="userId">
<div class="main">
    <div class="container">
        <ul class="breadcrumb">
            <li><a href="javascript:;" onclick="toHome()">首页</a></li>
            <li><a href="javascript:;">用户中心</a></li>
            <li class="active">检索历史</li>
        </ul>
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
            <!-- BEGIN SIDEBAR -->
            <%@include file="../includes/user-menu.jsp" %>
            <!-- END SIDEBAR -->
            <!-- BEGIN CONTENT -->
            <div class="col-md-9 col-sm-9">
                <h1>检索历史</h1>
                <div class="content-form-page">
                    <div class="row">
                        <div class="portlet">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-picture"></i>
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                    <a href="javascript:;" class="reload" id="#reloadTable">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-bordered" id="historyInfo">
                                        <col width="20%">
                                        <col width="60%">
                                        <col width="20%">
                                        <thead>
                                        <tr>
                                            <th class="text-center">
                                                检索过的专家
                                            </th>
                                            <th class="text-center">
                                                专家领域
                                            </th>
                                            <th class="text-center">
                                                操作
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="text-center">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="deleteRowConfirm" tabindex="-1" role="basic" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title">确认</h4>
            </div>
            <div class="modal-body">确认删除当前历史记录？</div>
            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消</button>
                <button type="button" class="btn blue" id="deleteRow">删除</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<%@include file="../includes/script.jsp"%>
<script src="<c:url value="/js/plugins/data-tables/jquery.dataTables.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/plugins/data-tables/DT_bootstrap.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/global/datatable.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/user/HistoryPage.js"/>" type="text/javascript"></script>
<script>
    $(document).ready(function (){
        HistoryPage.init();
    })
</script>
</body>
</html>
