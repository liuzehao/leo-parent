<%--
  Created by IntelliJ IDEA.
  User: Shy
  Date: 2015/8/10
  Time: 9:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
  <title>${User.username}&nbsp;的密码管理</title>
  <%@include file="../includes/style.jsp"%>
</head>
<body>
<%@include file="../includes/header.jsp"%>
<div class="main">
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="javascript:;" onclick="toHome()">首页</a></li>
      <li><a href="javascript:;">用户中心</a></li>
      <li class="active">修改密码</li>
    </ul>
    <!-- BEGIN SIDEBAR & CONTENT -->
    <div class="row margin-bottom-40">
      <!-- BEGIN SIDEBAR -->
      <%@include file="../includes/user-menu.jsp"%>
      <!-- END SIDEBAR -->
      <!-- BEGIN CONTENT -->
      <div class="col-md-9 col-sm-9">
        <h1>修改密码</h1>
        <div class="content-form-page">
          <div class="row">
            <div class="col-md-7 col-sm-7">
              <form class="form-horizontal form-without-legend" role="form" action="#" id="passwordForm">
                <input type="hidden" id="userId" value="${User.userId}">
                <div class="form-group">
                  <label for="password" class="col-lg-4 control-label">新密码 <span class="require">*</span></label>
                  <div class="col-lg-8">
                    <input type="password" class="form-control" id="password" name="password">
                  </div>
                </div>
                <div class="form-group">
                  <label for="repassword" class="col-lg-4 control-label">确认密码<span class="require">*</span></label>
                  <div class="col-lg-8">
                    <input type="password" class="form-control" id="repassword" name="repassword">
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 col-md-offset-4 padding-left-0 padding-top-20">
                    <button type="submit" class="btn btn-primary">完成修改</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-4 col-sm-4 pull-right">
              <div class="form-info">
                <h2><em>提示</em></h2>
                <p>修改密码后需要重新登陆</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END CONTENT -->
    </div>
    <!-- END SIDEBAR & CONTENT -->
  </div>
</div>
<%@include file="../includes/script.jsp"%>
<script src="<c:url value="/js/user/ChangePasswordPage.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/jquery-validation/js/jquery.validate.min.js"/>"
        type="text/javascript"></script>
<script type="text/javascript">
  $(document).ready(function (){
    ChangePasswordPage.init();
  })
</script>
</body>
</html>
