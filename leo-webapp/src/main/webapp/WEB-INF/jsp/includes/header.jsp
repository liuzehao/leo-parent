<%--
  Created by IntelliJ IDEA.
  User: gao2
  Date: 15-4-5
  Time: 上午10:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
<style>
    #login-btn{
        border-radius: 100px !important;
        position: relative;
        top: 25px;
        margin-left: 30px;
    }
    #user-center{
        border-radius: 100px !important;
        position: relative;
        top: 25px;
        margin-left: 30px;
    }
    #logout{
        border-radius: 100px !important;
        position: relative;
        top: 25px;
        margin-left: 5px;
    }
</style>
<script>
    function logout() {
        location.href = basePath + "logout";
    }

    function toHome() {
        location.href = basePath;
    }
    function selfCenter(){
        location.href = basePath + "userCenter/handleUserInfo";
    }
    function toLogin(){
        location.href = basePath + "login";
    }
    function toRegistration(){
        location.href = basePath + "registration";
    }
    function toBack(){
        window.history.back();
    }
    function toLiterature(){
        location.href = basePath + "literature/getLiteratureList";
    }
    function toPatent(){
        location.href = basePath + "patent/getPatentList";
    }
    function toExpert(){
        location.href = basePath + "expert/getExpertList";
    }
    function toTheme(){
        location.href = basePath + "theme/getThemeList";
    }
    function toLiteratureDetail(id){
        location.href = basePath + "literature/getLiteratureDetail?id=" + id;
    }
    function toPatentDetail(id){
        location.href = basePath + "patent/getPatentDetail?id=" + id;
    }
    function toExpertDetail(id){
        location.href = basePath + "expert/getExpertDetail?id=" + id;
    }
    function toThemeExperts(themeId){
        window.location.href = basePath + "expert/getThemeExperts?themeId=" + themeId;
    }
    function toAnswer(){
        location.href = basePath + "autoAnswer/getPage";
    }
    function toNetwork(){
        location.href = basePath + "expertWeb/getExpertWeb";
    }
    function toRecommend(){
        location.href = basePath + "expertRecommend/getExpertRecommend";
    }
</script>
</head>
<body>
<div class="header">
    <div class="container">
        <a class="site-logo" href="#"><img src="<c:url value="/image/img/logo/logo(160x34).png"/>"
                                           alt="BIT.ROBORT"></a>
        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>
        <!-- BEGIN NAVIGATION -->
        <div class="header-navigation pull-right font-transform-inherit">
            <ul>
                <li>
                    <a href="#" onclick="toTheme()">主题</a>
                </li>
                <li>
                    <a href="#" onclick="toLiterature()">
                        文献
                        <i class="fa fa-angle-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="toPatent()">
                        专利
                        <i class="fa fa-angle-down"></i>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="toExpert()">
                        学者
                        <i class="fa fa-angle-down"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                        功能
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="javascript:;" onclick="toNetwork()">领域专家网络</a></li>
                        <li><a href="javascript:;" onclick="toRecommend()">专家推荐</a></li>
                        <li><a href="javascript:;" onclick="toAnswer()">自动问答</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" onclick="toHome()">
                        首页
                        <i class="fa fa-angle-down"></i>
                    </a>
                </li>
                <li class="menu-search">
                    <span class="sep"></span>
                    <i class="fa fa-search search-btn"></i>

                    <div class="search-box">
                        <form action="search">
                            <div class="input-group">
                                <input type="text" name="key" class="form-control" placeholder="全局检索">
                                <input type="hidden" value="global" name="direction"/>
                                <span class="input-group-btn">
                                  <button class="btn btn-primary" type="submit">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </li>
                <li>
                    <c:if test="${User.username == null}">
                        <button class="btn green pull-right" id="login-btn" onclick="toLogin()">
                            登陆
                        </button>
                    </c:if>
                    <c:if test="${User.username != null}">
                        <button class="btn red pull-right" onclick="logout()" id="logout">注销</button>
                        <button class="btn yellow pull-right" id="user-center" onclick="selfCenter('${User.userId}')">${User.username}</button>
                    </c:if>
                </li>
            </ul>
        </div>
        <!-- END NAVIGATION -->
    </div>
</div>
</body>
</html>
