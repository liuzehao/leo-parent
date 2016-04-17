<%--
  Created by IntelliJ IDEA.
  User: panzhuowen
  Date: 2014/10/18
  Time: 15:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <title>角色列表</title>
    <%@include file="../../includes/common.jsp" %>

</head>
<body class="page-header-fixed">
<%@include file="../../includes/top.jsp" %>
<%@include file="../../includes/top.jsp" %>
<div class="page-container" data-options="tools:'#tab-tools'">
    <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
            <jsp:include page="../../includes/menu.jsp">
                <jsp:param name="permissionNum" value="1"/>
                <jsp:param name="permissionLeafNum" value="4"/>
            </jsp:include>
        </div>
    </div>
    <div class="page-content-wrapper">
        <div class="page-content" style="min-height:1033px !important">
            <!-- BEGIN PAGE HEADER-->
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN PAGE TITLE & BREADCRUMB-->
                    <h3 class="page-title"></h3>
                    <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <i class="fa fa-home"></i>
                            <span>主页</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span>角色管理</span>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <span></span>
                        </li>
                    </ul>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>

            aaaaaa
            <iframe id="video" src="<c:url value="/video/C/1.swf"/>" style="width:100%; height:500px;border:0" allowfullscreen>

            </iframe>

            <video src="video/C/1.swf"controls="controls" width="270"height="150" id="video1">

            </video>
            <!-- END PAGE HEADER-->
            <!-- BEGIN PAGE CONTENT-->
            <div class="row">
                <div class="col-md-12">
                    <!-- Begin: life time stats -->
                    <div class="portlet box grey-cascade">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="tools">
                                <a href="javascript:;" class="collapse"></a>
                            </div>
                            <div class="actions">
                                <a href="#" onclick="roleListTable.addRoleInfo()" class="btn btn-default"
                                   id="datatable_ajax_new"><i class="fa fa-plus faa-shake animated-hover"></i>上传视频</a>
                                <a href="#" class="btn btn-default" id="reloadTable"><i
                                        class="fa fa-refresh faa-spin animated-hover"></i>重新载入</a>

                                <div class="btn-group">
                                    <a class="btn btn-default" href="#" data-toggle="dropdown">
                                        <i class="fa fa-columns faa-shake animated-hover "></i>
                                        选择列 <i class="fa fa-angle-down"></i>
                                    </a>

                                    <div id="datatable_ajax_column_toggler"
                                         class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">
                                        <label><input type="checkbox" checked data-column="0">视频名称</label>
                                        <label><input type="checkbox" checked data-column="1">角色描述</label>
                                        <label><input type="checkbox" checked data-column="2">操作</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- End: life time stats -->
                </div>
            </div>
            <!-- END PAGE CONTENT-->
        </div>
    </div>
</div>
<!-- BEGIN FOOTER -->
<%@include file="../../includes/footer.jsp" %>
<div class="modal fade" id="modalDialog" tabindex="-1" role="basic" aria-hidden="true" data-keyboard="false"
     data-backdrop="static">
    <div class="modal-dialog" style="width: 900px;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="dialogTitle"></h4>
            </div>
            <div class="modal-body">
                <div class="portlet-body">
                    <iframe id="userEditIframe" style="border: none;width:858px;height:350px;" frameBorder="0"></iframe>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- END FOOTER -->
<div class="modal fade" id="deleteRowConfirm" tabindex="-1" role="basic" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title">确认</h4>
            </div>
            <div class="modal-body">确认删除当前行？</div>
            <div class="modal-footer">
                <button type="button" class="btn default" data-dismiss="modal">取消</button>
                <button type="button" class="btn blue" id="deleteRow">删除</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
</body>
</html>
<script type="text/javascript">
    $(function() {
        roleListTable.init();
    })
</script>