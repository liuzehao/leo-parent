/**
 * GlobalExceptionHandle.java
 * 功能：全局异常处理
 * 类名: GlobalExceptionHandle
 *  版本       修改时间       作者    修改内容
 * ---------------------------------------------------
 * V1.0.1    2010.03.31    平彧蕾    初始版本
 */
package com.genghis.leo.common.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Spring全局异常处理。<br>
 *
 * @version 1.0.1 2010.03.31
 */
@SuppressWarnings("unchecked")
@Component
public class GlobalExceptionHandle implements HandlerExceptionResolver {

    private static Log log = LogFactory.getLog(GlobalExceptionHandle.class);

    public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object object, Exception exception) {
        outError(exception, null, httpServletRequest);
        ModelAndView mv = new ModelAndView();
        mv.setViewName("common/developerror");
        mv.addObject("message", exception.toString());
        mv.addObject("url", httpServletRequest.getServletPath());
        return mv;
    }

    public static void outError(Throwable throwable, String referURL, Object... args) {
        int argsLength = args.length;
        if (argsLength > 0) {
            String errorMSG = throwable.toString();
            StringBuilder sb = new StringBuilder("");
            sb.append("\n<br/>errorMSG:").append(errorMSG);
            if (throwable.getStackTrace() != null) {
                for (StackTraceElement i : throwable.getStackTrace()) {
                    sb.append("\n<br/>").append(i.toString());
                }
            }
            Object requestObj = args[argsLength - 1];
            if (requestObj instanceof HttpServletRequest) {
                HttpServletRequest request = (HttpServletRequest) requestObj;
                referURL = referURL == null ? request.getServletPath() : referURL;
                sb.append("\n<br/> referURL: ").append(referURL);
                sb.append("\n<br/>request对象参数列表<br/><table border='1' style='width:500px'><thead>\n<tr><td>参数</td><td>值</td></tr></thead>");
                for (Map.Entry<String, String[]> entry : (request.getParameterMap()).entrySet()) {
                    sb.append("\n<tr><td>").append(entry.getKey()).append("</td><td>&nbsp;").append(arrayToString(entry.getValue())).append("</td></tr>");
                }
                sb.append("</table>");
            }
            log.error(sb.toString());
        }
    }

    public static String arrayToString(Object obj) {
        StringBuffer sb;
        if (obj instanceof String[]) {
            sb = new StringBuffer("");
            for (String str : (String[]) obj) {
                sb.append(str).append(",");
            }
            String str = sb.toString();
            return str.substring(0, str.length() - 1);
        }
        return obj.toString();
    }
}
