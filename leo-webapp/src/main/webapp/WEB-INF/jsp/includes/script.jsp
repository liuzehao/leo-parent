<%--
    Created by longshihui on 2015/2/8.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!--[if lt IE 9]>
<script src="../../../assets/global/plugins/respond.min.js"></script>
<![endif]-->
<script src="<c:url value="/assets/global/plugins/jquery-1.11.0.min.js"/> " type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/jquery-migrate-1.2.1.min.js"/> " type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/bootstrap/js/bootstrap.min.js"/> " type="text/javascript"></script>
<!-- END CORE PLUGINS -->

<!-- BEGIN PAGE LEVEL JAVASCRIPTS (REQUIRED ONLY FOR CURRENT PAGE) -->
<script src="<c:url value="/assets/global/plugins/fancybox/source/jquery.fancybox.pack.js"/> " type="text/javascript"></script><!-- pop up -->
<script src="<c:url value="/assets/global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.min.js"/> " type="text/javascript"></script><!-- slider for products -->

<!-- BEGIN RevolutionSlider -->
<script src="<c:url value="/assets/global/plugins/slider-revolution-slider/rs-plugin/js/jquery.themepunch.plugins.min.js"/> " type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/slider-revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min.js"/> " type="text/javascript"></script>
<script src="<c:url value="/assets/frontend/pages/scripts/revo-slider-init.js"/> " type="text/javascript"></script>
<!-- END RevolutionSlider -->
<script src="<c:url value="/js/common/common.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/frontend/layout/scripts/layout.js"/> " type="text/javascript"></script>
<!--new script-->
<script src="<c:url value="/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/jquery.blockui.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/jquery.cokie.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/uniform/jquery.uniform.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/scripts/metronic.js"/>" type="text/javascript"></script>

<script src="<c:url value="/assets/global/plugins/bootbox/bootbox.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/assets/global/plugins/bootstrap-toastr/toastr.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/global/toast.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/global/back-to-top.js"/> " type="text/javascript"></script>
<script type="text/javascript" src="<c:url value="/assets/global/plugins/select2/select2.min.js"/>"></script>
<script src="<c:url value="/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/js/plugins/autoComplete/autoComplete.min.js"/>" type="text/javascript"></script>
<!--end new script-->
<script type="text/javascript">
    jQuery(document).ready(function() {
        Layout.init();
        Layout.initOWL();
        $('.make-switch').bootstrapSwitch();
        window.User = {
            userId:"${User.userId}",
            userName:"${User.username}",
            loginName:"${User.loginName}"
        }
        window.isLogin = function (){
            return $.isNumeric(User.userId);
        }
    });
</script>
<!-- END PAGE LEVEL JAVASCRIPTS -->