<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="page-header navbar navbar-fixed-top">
    <!-- BEGIN TOP NAVIGATION BAR -->
    <div class="page-header-inner">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
            <a>
                <%--<img src="<c:url value='/img/logo/logo4.png'/>"--%>
                     <%--style="width:100px;height:30px;margin-left:5px;margin-top:5px;" alt="logo" class="logo-default"/>--%>
            </a>
        </div>
        <!-- END LOGO -->
        <div class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
        </div>
        <!-- BEGIN TOP NAVIGATION MENU -->
        <div class="top-menu">
            <ul class="nav navbar-nav pull-right">
                <li class="dropdown dropdown-extended dropdown-notification" id="header_home_bar">
                    <a href="#" title="首页" onclick="toHome()" class="dropdown-toggle" data-toggle="dropdown"
                       data-hover="dropdown"
                       data-close-others="true">
                        <i class="fa fa-home"></i>
                    </a>
                    <ul></ul>
                </li>

                <!-- BEGIN USER LOGIN DROPDOWN -->
                <li class="dropdown dropdown-user">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                       data-close-others="true">
                        <span id="userNameTop" class="username"> </span>
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#" onclick="logout()">
                                <i class="fa fa-key"></i> 退 出
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- END USER LOGIN DROPDOWN -->

            </ul>
            <!-- END TOP NAVIGATION MENU -->
        </div>
    </div>
    <!-- END TOP NAVIGATION BAR -->
</div>
<div class="modal fade" id="modalDialogTop" tabindex="-1" role="basic" aria-hidden="true" data-keyboard="false"
     data-backdrop="static">
    <div class="modal-dialog" style="width: 900px;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="dialogTitleTop">信息查看</h4>
            </div>
            <div class="modal-body">
                <div class="portlet-body">
                    <iframe id="displayMessageIframeTop" style="border: none;width:858px;height:400px;"
                            frameBorder="0"></iframe>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<script>
    function logout() {
        location.href = basePath + "logout";
    }

    function toHome() {
        location.href = basePath;
    }

</script>
