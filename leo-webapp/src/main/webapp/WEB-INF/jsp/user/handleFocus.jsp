<%@ page import="java.util.Map" %>
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
    <title>${User.username}&nbsp;的关注</title>
    <%@include file="../includes/style.jsp" %>
    <style>
        .color1 {
            background-color: rgb(242, 229, 186);
        }

        .color2 {
            background-color: rgb(245, 222, 196);
        }

        .color3 {
            background-color: rgb(235, 227, 225);
        }

        .color4 {
            background-color: rgb(222, 235, 225);
        }

        .color5 {
            background-color: rgb(203, 214, 205);
        }

        .color6 {
            background-color: rgb(226, 211, 182);
        }

        .color7 {
            background-color: rgb(247, 196, 182);
        }

        .color8 {
            background-color: rgb(203, 214, 205);
        }

        .color9 {
            background-color: rgb(157, 185, 206);
        }

        .color10 {
            background-color: rgb(210, 173, 181);
        }

        #focusList .themes a {
            text-decoration: none !important;
            padding: 3px 3px;
            cursor: pointer;
        }

        button.cancelFocus {
            position: absolute;
            right: 0;
            top: 0;
            margin-right: 0px !important;
        }
    </style>
</head>
<body>
<%@include file="../includes/header.jsp" %>
<div class="main">
    <div class="container">
        <ul class="breadcrumb">
            <li><a href="javascript:;" onclick="toHome()">首页</a></li>
            <li><a href="javascript:;">用户中心</a></li>
            <li class="active">你的关注</li>
        </ul>
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">
            <!-- BEGIN SIDEBAR -->
            <%@include file="../includes/user-menu.jsp" %>
            <!-- END SIDEBAR -->
            <!-- BEGIN CONTENT -->
            <div class="col-md-9 col-sm-9">
                <h1>关注内容</h1>

                <div class="content-form-page">
                    <div class="row">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion"
                                           href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            关注管理
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                     aria-labelledby="headingOne">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="col-md-12 margin-bottom-10">
                                                    <div class="col-md-4" style="margin-left: 0px">
                                                        <h4>你关注的主题</h4>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <button class="btn green pull-right" id="saveChange">保存更改
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 margin-bottom-20">
                                                    <select class="form-control select2" id="focusThemeManager"
                                                            multiple="multiple">
                                                        <option></option>
                                                        <c:forEach items="${cacheThemes}" var="theme">
                                                            <option value="${theme.id}">${theme.themeName}</option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                                <div class="col-md-12 margin-bottom-10">
                                                    <div class="col-md-4" style="margin-left: 0px">
                                                        <h4>你关注的专家</h4>
                                                    </div>
                                                </div>
                                                <div class="col-md-12" id="focusList">
                                                    <c:forEach items="${focusExpert}" var="rExpert">
                                                        <div class="row">
                                                            <div class="note col-md-12"
                                                                 style="padding-left: 0px;padding-right: 0px; position: relative">
                                                                <input type="hidden" name="focusExpertId"
                                                                       value="${rExpert.id}">
                                                                <button class="btn red cancelFocus">取消关注</button>
                                                                <div class="col-md-1">
                                                                    <img src="<c:url value="${rExpert.img}"/>"
                                                                         alt="" style="width: 60px;height: 60px;">
                                                                </div>
                                                                <div class="col-md-11">
                                                                    <h4 class="media-heading"><a
                                                                            href="javascript:void(0)"
                                                                            onclick="toExpertDetail('${rExpert.id}')">${rExpert.expertName}</a>
                                                                    </h4>

                                                                    <p class="themes">
                                                                        <c:forEach items="${rExpert.themeList}"
                                                                                   var="theme">
                                                                            <a href="javascript:;" class=""
                                                                               onclick="toThemeExperts('${theme.id}')">${theme.themeName}</a>
                                                                        </c:forEach>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </c:forEach>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                           aria-controls="collapseTwo">
                                            猜你喜欢
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                     aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12 margin-bottom-20">
                                                <div class="col-md-4">
                                                    <h5 style="font-size: 1.5em">你可能感兴趣的主题</h5>
                                                </div>
                                                <div class="col-md-12">
                                                    <c:choose>
                                                        <c:when test="${recommendInfo.isEmpty()}">
                                                            <c:out value="你还没浏览或关注过任何主题或专家"></c:out>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <c:forEach items="${recommendInfo.get('recommendTheme')}"
                                                                       var="theme">
                                                                <button class="btn default"
                                                                        onclick="toThemeExperts('${theme.id}')">${theme.themeName}</button>
                                                            </c:forEach>
                                                        </c:otherwise>
                                                    </c:choose>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="col-md-4">
                                                    <h5 style="font-size: 1.5em">你可能关注的专家</h5>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="row front-team">
                                                        <c:choose>
                                                            <c:when test="${recommendInfo.isEmpty()}">
                                                                <div class="col-md-12"><c:out
                                                                        value="你还没浏览或关注过任何主题或专家"></c:out></div>
                                                            </c:when>
                                                            <c:otherwise>
                                                                <ul class="list-unstyled">
                                                                    <c:forEach
                                                                            items="${recommendInfo.get('recommendExpert')}"
                                                                            var="expert">
                                                                        <li class="col-md-3">
                                                                            <div class="thumbnail">
                                                                                <img alt=""
                                                                                     src="<c:url value="${expert.img}"/>">

                                                                                <h3>
                                                                                    <strong style="cursor: pointer"
                                                                                            onclick="toExpertDetail('${expert.id}')">${expert.expertName}</strong>
                                                                                    <small>${expert.expertOrg}</small>
                                                                                </h3>
                                                                            </div>
                                                                        </li>
                                                                    </c:forEach>
                                                                </ul>
                                                            </c:otherwise>
                                                        </c:choose>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<%@include file="../includes/script.jsp" %>
<script src="<c:url value="/js/plugins/pagination.js"/>" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function () {
        var noteColorArr = [
            "note-success",
            "note-warning",
            "note-info",
            "note-danger"
        ];
        $(".note").each(function (index, obj) {
            $(this).addClass(noteColorArr[index % noteColorArr.length]);
        });
        var color = [
            "color1",
            "color2",
            "color3",
            "color4",
            "color5",
            "color6",
            "color7",
            "color8",
            "color9",
            "color10"
        ];
        $("a", "#focusList .themes").each(function (i) {
            $(this).addClass(color[i % color.length])
        });

        var selectVal = [];
        var expertIds = [];
        (function () {
            $.ajax({
                url: basePath + "userCenter/getUserFocusThemes",
                dataType: "json",
                type: "post",
                success: function (data) {
                    $.each(data.focusThemes, function (i, el) {
                        selectVal.push(el.id);
                    });
                    for(var i = 0; i < selectVal.length; i++){
                        $("#focusThemeManager option").each(function (){
                            if($(this).val() == selectVal[i])
                            $(this).prop("selected",true);
                        })
                    }
                    $("#focusThemeManager").select2({
                        placeholder: "选择一个或多个主题关注"
                    });
                }
            });
        })();
        function saveFocus() {
            expertIds = [];
            selectVal = [];
            var val = ""+ $("#focusThemeManager").val();
            selectVal = val.split(",");
            $(".note", "#focusList").each(function () {
                $(this).find("input[name='focusExpertId']").each(function () {
                    expertIds.push($(this).val())
                })
            });
            if(selectVal == null || selectVal[0] == "null"){
                selectVal = [];
            }
            $.ajax({
                url: basePath + "userCenter/updateUserFocus",
                dataType: "json",
                type: "post",
                data: {
                    themeIds: selectVal,
                    expertIds: expertIds
                },
                success: function () {
                    toast.success("修改保存成功!");
                },
                error: function () {
                    toast.error("请检查网络连接!");
                }
            })
        }

        $("#saveChange").click(function () {
            saveFocus();
        });
        $("#focusList").paging({
            itemSelector: "div.note"
        });
        $(".cancelFocus").click(function () {
            $(this).closest(".note").remove();
        })
    })
</script>
</body>
</html>
