<%--
  Created by IntelliJ IDEA.
  User: panzhuowen
  Date: 2014/10/20
  Time: 23:17
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
    <title>角色新增</title>
    <%@include file="../../includes/common.jsp" %>
    <script src="<c:url value="/js/admin/systemRole.js"/>" type="text/javascript"></script>
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
                                                <label class="control-label col-sm-3">角色名称
                                                    <span class="required" aria-required="true">* </span>
                                                </label>

                                                <div class="col-sm-6">
                                                    <input id="checkId" name="checkId" type="hidden"
                                                           value=""/>
                                                    <input type="text" class="form-control input-medium" id="roleName"
                                                           name="roleName"
                                                           value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">角色描述
                                                </label>

                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control input-medium"
                                                           id="description"
                                                           name="description"
                                                           value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label class="control-label col-sm-3">权限
                                                </label>

                                                <div class="col-sm-7">
                                                    <input id="permToken" class="form-control " type="text" readonly
                                                           value="" onclick="showMenuPerm();"/>
                                                </div>
                                                <div class="col-sm-2">
                                                    <a id="menuBtn" href="#" onclick="showMenuPerm(); return false;">选择</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-actions right">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="col-md-offset-3 col-md-9">
                                                <input type="button" class="btn default green" value="保存"
                                                       id="saves" onclick=" roleListTable.addSave()"/>
                                                &nbsp
                                                <input type="button" class="btn default" value="关闭"
                                                       onclick="roleListTable.quit()"/>
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
<div id="menuContent" class="divauto" style=" display:none; position: absolute;">
    <ul id="treeDemo" class="ztree"></ul>
</div>
</body>
</html>
<script type="text/javascript">
    var zNodesMenu;
    var zTree;
    var settingMenu = {
        view: {
            expandSpeed: "fast"
        },
        check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: { "Y": "ps", "N": "ps" }
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId"
            },
//            key: {
//                name: "name"
//            },
            keep: {
                parent: true
            }
        },
        callback: {
            beforeClick: beforeClick,
            onCheck: onCheckMenu
        }
    };

    var zNodes = [
        <c:forEach var="MenuPerm" items="${menuPermList}">
        {id: "${MenuPerm.id}", pId: "${MenuPerm.parentId}", name: "${MenuPerm.menuName}", permToken: "${MenuPerm.permToken}",checked :"${MenuPerm.checked}"},
        </c:forEach>
    ];

    function beforeClick(treeNode) {
        var zTreeRole = $.fn.zTree.getZTreeObj("treeDemo");
        zTreeRole.checkNode(treeNode, !treeNode.checked, null, true);
        return false;
    }

    function onCheckMenu() {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                nodes = zTree.getCheckedNodes(true),
                menuNames = "", ids = "";
        for (var i = 0, l = nodes.length; i < l; i++) {
            menuNames += nodes[i].name + ",";
        }
        for (i = 0, l = nodes.length; i < l; i++) {
            ids += nodes[i].permToken + ",";
        }
        if (menuNames.length > 0) menuNames = menuNames.substring(0, menuNames.length - 1);
        var userObj = $("#permToken");
        userObj.attr("value", menuNames);
        if (ids.length > 0) ids = ids.substring(0, ids.length - 1);
        var userIdsObj = $("#menuBtn");
        userIdsObj.attr("value", ids);
    }

    function showMenuPerm() {
        var obj = $("#permToken");
        var objOffset = obj.offset();
        var width = obj.width() + 10;
        $("#menuContent").css({width: width + 'px', height: 300 + 'px', left: objOffset.left + "px", top: objOffset.top + obj.outerHeight() + "px"}).slideDown("fast");
        $("body").unbind("mousedown").bind("mousedown", onBodyDown);
    }

    function onBodyDown(event) {
        if (!(event.target.id == "menuBtn" || event.target.id == "permToken" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length > 0)) {
            hideMenu();
        }
    }

    function hideMenu() {
        $("#menuContent").fadeOut("fast");
        $("body").unbind("mousedown", onBodyDown);
    }

    $(document).ready(function () {
        for (var i = 0; i < zNodes.length; i++) {
            if (zNodes[i].id == "1") {
                zNodes[i].nocheck = true;
            }
        }
        $.fn.zTree.init($("#treeDemo"), settingMenu, zNodes);
        var treeObj = $.fn.zTree.getZTreeObj("menuTree");
        treeObj.expandAll(true);
    });
</script>