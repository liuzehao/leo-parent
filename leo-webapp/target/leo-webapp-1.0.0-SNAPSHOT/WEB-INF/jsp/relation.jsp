<%--
  Created by IntelliJ IDEA.
  User: hao pc
  Date: 2016/4/3
  Time: 14:56
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
  <title>333</title>
</head>
<body>

<br>
<h style="color:#F00">被关联文件号：10000</h>
<br>


  <input   id="relationinput"/>

  <a id="relation" class="btn btn-default">关联</a>

</body>
<script>
  $("#relation").click(function(){

    $.ajax({

      type:'get',
      url:'http://localhost:8080/addrelation?number1=99555'+'&number2=1000'
    });
  });

</script>
</html>
