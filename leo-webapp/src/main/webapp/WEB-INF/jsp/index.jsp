<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->
<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>主页</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <%@ include file="includes/common.jsp" %>
</head>
<body class="page-header-fixed">
<%@include file="includes/top.jsp" %>
<div class="page-container" data-options="tools:'#tab-tools'">
    <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
            <%@include file="includes/menu.jsp" %>

        </div>
    </div>
    <div class="page-content-wrapper" data-options="tools:'#tab-tools'">
        <div class="page-content" style="min-height:1033px !important">
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN PAGE TITLE & BREADCRUMB-->
                    <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <i class="fa fa-home"></i>
                            <a href="#">首页</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li class="pull-right">
                            <span id="nowTime"></span>
                        </li>

                    </ul>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
        </div>
    </div>
</div>



<a href="upload">上传</a><br>
<a href="relation">关联</a>
<!-- BEGIN FOOTER -->
<%@include file="includes/footer.jsp" %>
<!-- END FOOTER -->
</body>
</html>

<script>

    $(function () {
        window.setInterval(setNowTime, 1000);
    });
    function setNowTime() {
        var nowDate = format(new Date(), "yyyy-MM-dd hh:mm:ss");
        $("#nowTime").html(nowDate)
    }

    function format(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds()                 //秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }



   jQuery.extend({

       createUploadIframe: function(id, uri)
       {
           //create frame
           var frameId = 'jUploadFrame' + id;

           if(window.ActiveXObject) {
               var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
               if(typeof uri== 'boolean'){
                   io.src = 'javascript:false';
               }
               else if(typeof uri== 'string'){
                   io.src = uri;
               }
           }
           else {
               var io = document.createElement('iframe');
               io.id = frameId;
               io.name = frameId;
           }
           io.style.position = 'absolute';
           io.style.top = '-1000px';
           io.style.left = '-1000px';

           document.body.appendChild(io);

           return io
       },
       createUploadForm: function(id, fileElementId)
       {
           //create form
           var formId = 'jUploadForm' + id;
           var fileId = 'jUploadFile' + id;
           var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
           var oldElement = $('#' + fileElementId);
           var newElement = $(oldElement).clone();
           $(oldElement).attr('id', fileId);
           $(oldElement).before(newElement);
           $(oldElement).appendTo(form);
           //set attributes
           $(form).css('position', 'absolute');
           $(form).css('top', '-1200px');
           $(form).css('left', '-1200px');
           $(form).appendTo('body');
           return form;
       },

       ajaxFileUpload: function(s) {
           // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout
           s = jQuery.extend({}, jQuery.ajaxSettings, s);
           var id = s.fileElementId;
           var form = jQuery.createUploadForm(id, s.fileElementId);
           var io = jQuery.createUploadIframe(id, s.secureuri);
           var frameId = 'jUploadFrame' + id;
           var formId = 'jUploadForm' + id;
           // Watch for a new set of requests
           if ( s.global && ! jQuery.active++ )
           {
               jQuery.event.trigger( "ajaxStart" );
           }
           var requestDone = false;
           // Create the request object
           var xml = {}
           if ( s.global )
               jQuery.event.trigger("ajaxSend", [xml, s]);
           // Wait for a response to come back
           var uploadCallback = function(isTimeout)
           {
               var io = document.getElementById(frameId);
               try
               {
                   if(io.contentWindow)
                   {
                       xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
                       xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;

                   }else if(io.contentDocument)
                   {
                       xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
                       xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
                   }
               }catch(e)
               {
                   jQuery.handleError(s, xml, null, e);
               }
               if ( xml || isTimeout == "timeout")
               {
                   requestDone = true;
                   var status;
                   try {
                       status = isTimeout != "timeout" ? "success" : "error";
                       // Make sure that the request was successful or notmodified
                       if ( status != "error" )
                       {
                           // process the data (runs the xml through httpData regardless of callback)
                           var data = jQuery.uploadHttpData( xml, s.dataType );
                           // If a local callback was specified, fire it and pass it the data
                           if ( s.success )
                               s.success( data, status );

                           // Fire the global callback
                           if( s.global )
                               jQuery.event.trigger( "ajaxSuccess", [xml, s] );
                       } else
                           jQuery.handleError(s, xml, status);
                   } catch(e)
                   {
                       status = "error";
                       jQuery.handleError(s, xml, status, e);
                   }

                   // The request was completed
                   if( s.global )
                       jQuery.event.trigger( "ajaxComplete", [xml, s] );

                   // Handle the global AJAX counter
                   if ( s.global && ! --jQuery.active )
                       jQuery.event.trigger( "ajaxStop" );

                   // Process result
                   if ( s.complete )
                       s.complete(xml, status);

                   jQuery(io).unbind()

                   setTimeout(function()
                   {	try
                   {
                       $(io).remove();
                       $(form).remove();

                   } catch(e)
                   {
                       jQuery.handleError(s, xml, null, e);
                   }

                   }, 100)

                   xml = null

               }
           }
           // Timeout checker
           if ( s.timeout > 0 )
           {
               setTimeout(function(){
                   // Check to see if the request is still happening
                   if( !requestDone ) uploadCallback( "timeout" );
               }, s.timeout);
           }
           try
           {
               // var io = $('#' + frameId);
               var form = $('#' + formId);
               $(form).attr('action', s.url);
               $(form).attr('method', 'POST');
               $(form).attr('target', frameId);
               if(form.encoding)
               {
                   form.encoding = 'multipart/form-data';
               }
               else
               {
                   form.enctype = 'multipart/form-data';
               }
               $(form).submit();

           } catch(e)
           {
               jQuery.handleError(s, xml, null, e);
           }
           if(window.attachEvent){
               document.getElementById(frameId).attachEvent('onload', uploadCallback);
           }
           else{
               document.getElementById(frameId).addEventListener('load', uploadCallback, false);
           }
           return {abort: function () {}};

       },

       uploadHttpData: function( r, type ) {
           var data = !type;
           data = type == "xml" || data ? r.responseXML : r.responseText;
           // If the type is "script", eval it in global context
           if ( type == "script" )
               jQuery.globalEval( data );
           // Get the JavaScript object, if JSON is used.
           if ( type == "json" )
               eval( "data = " + data );
           // evaluate scripts within html
           if ( type == "html" )
               jQuery("<div>").html(data).evalScripts();
           //alert($('param', data).each(function(){alert($(this).attr('value'));}));
           return data;
       }
   })


</script>