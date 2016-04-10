package com.genghis.leo.util;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

/**
 * Created by panzhuowen on 2014/10/19.
 */
public class LoginUserUtil {

    public LoginUserUtil() {
    }

    public static String findLoginUserName() {
        Subject currentUser = SecurityUtils.getSubject();
        return (String) currentUser.getPrincipal();
    }
}
