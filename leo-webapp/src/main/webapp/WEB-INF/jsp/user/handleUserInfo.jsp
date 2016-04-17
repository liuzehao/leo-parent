<%--
  Created by IntelliJ IDEA.
  User: Shy
  Date: 2015/8/10
  Time: 9:23
  To change this template use File | Settings | File Templates.
--%>
<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
  <title>${User.username}&nbsp;的个人信息</title>
  <%@include file="../includes/style.jsp"%>
  <style>
    .color1{
      background-color: rgb(242,229,186);
    }
    .color2{
      background-color: rgb(245,222,196);
    }
    .color3{
      background-color: rgb(235,227,225);
    }
    .color4{
      background-color: rgb(222,235,225);
    }
    .color5{
      background-color: rgb(203,214,205);
    }
    .color6{
      background-color: rgb(226,211,182);
    }
    .color7{
      background-color: rgb(247,196,182);
    }
    .color8{
      background-color: rgb(203,214,205);
    }
    .color9{
      background-color: rgb(157,185,206);
    }
    .color10{
      background-color: rgb(210,173,181);
    }
    table a{
      text-decoration: none !important;
      padding: 3px 3px;
      cursor: pointer;
    }
  </style>
</head>
<body>
<%@include file="../includes/header.jsp"%>
<input hidden="hidden" type="text" value="${user.userId}" id="userId"/>
<div class="main">
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="javascript:;" onclick="toHome()">首页</a></li>
      <li><a href="javascript:;">用户中心</a></li>
      <li class="active">个人资料</li>
    </ul>
    <!-- BEGIN SIDEBAR & CONTENT -->
    <div class="row margin-bottom-40">
      <!-- BEGIN SIDEBAR -->
      <%@include file="../includes/user-menu.jsp"%>
      <!-- END SIDEBAR -->
      <!-- BEGIN CONTENT -->
      <div class="col-md-9 col-sm-9">
        <h1>个人资料</h1>
        <div class="content-form-page">
          <div class="row">
            <table class="table table-bordered">
              <tbody>
              <tr>
                <td align="center" width="15%">登陆账号</td>
                <td align="center"><input type="text" class="form-control input-medium" id="loginName" style="border:none;"
                                          value="${user.loginName}"></td>
              </tr>
              <tr>
                <td align="center" width="15%">昵称</td>
                <td align="center"><input type="text" class="form-control input-medium" id="username" style="border:none;"
                                          value="${user.username}"></td>
              </tr>
             <tr>
                <td align="center" width="15%">邮箱</td>
                <td align="center"><input type="text" class="form-control input-medium" id="email" style="border:none;"
                                          value="${user.email}"></td>
              </tr>
              <tr>
                <td align="center" width="15%">手机</td>
                <td align="center"><input type="text" class="form-control input-medium" id="telephone" style="border:none;"
                                          value="${user.userTelephone}"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- END CONTENT -->
    </div>
    <!-- END SIDEBAR & CONTENT -->
    <div class="form-actions fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-offset-7 col-md-5">
            <button class="btn btn-primary btn-lg" role="button" id="save"><i class="fa fa-edit"></i>
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<%@include file="../includes/script.jsp"%>
<script>
  $("#save").click(function(){
    alert("ddd");
    $.ajax({
      url: basePath + "editUser",
      data: {
        userId: $("#userId").val(),
        loginName: $("#loginName").val(),
        username: $("#username").val(),
        email: $("#email").val(),
        userTelephone: $("#telephone").val(),
      },
      dataType: "json",
      type: "POST",
      success: function () {
      },
      error:function () {
      },
    })
  });
</script>
</body>
</html>
