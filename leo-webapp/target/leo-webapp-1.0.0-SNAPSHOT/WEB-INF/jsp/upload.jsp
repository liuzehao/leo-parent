<%--
  Created by IntelliJ IDEA.
  User: hao pc
  Date: 2016/3/23
  Time: 15:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="" name="description"/>
<meta content="" name="author"/>
<html>
<head>
  <script src="<c:url value="/assets/global/plugins/jquery-1.11.0.min.js"/>" type="text/javascript"></script>
  <link href="<c:url value="/assets/global/plugins/bootstrap/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css"/>
  <link href="<c:url value="/assets/global/plugins/bootstrap-fileinput-master/css/fileinput.css"/>" rel="stylesheet" type="text/css"/>
  <script src="<c:url value="/assets/global/plugins/bootstrap-fileinput-master/js/fileinput.js"/>" type="text/javascript"></script>
  <script src="<c:url value="/assets/global/plugins/bootstrap-fileinput-master/js/plugins/canvas-to-blob.js"/>" type="text/javascript"></script>
  <script src="<c:url value="/assets/global/plugins/bootstrap-fileinput-master/js/fileinput_locale_zh.js"/>" type="text/javascript"></script>
    <title>333</title>
</head>
<style>
.oo{ border:1px solid #F00; width:600px; height:600px}
</style>
<body>
<div class="oo">
  <input id="input-705" name="input[]" type="file" multiple class="file-loading">
</div>
</div>
</body>
<script>
  var $input = $("#input-705");
  $input.fileinput({
    uploadUrl: "http://localhost:8080/uploadFile", // server upload action
    language : 'zh',
    uploadAsync: false,
    showUpload: false, // hide upload button
    showRemove: false, // hide remove button
    minFileCount: 1,
    maxFileCount: 5
  }).on("filebatchselected", function(event, files) {
    // trigger upload method immediately after files are selected
    $input.fileinput("upload");
  });

</script>
</html>
