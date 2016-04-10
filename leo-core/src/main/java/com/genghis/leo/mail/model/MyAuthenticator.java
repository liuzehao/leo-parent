/*
* MyAuthenticator.java
* Created on  2013-12-11 下午1:47
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-12-11        chenl     初始版本
*
*/
package com.genghis.leo.mail.model;
/**
* 类的描述信息
*
* @author chenl
* @version 1.0.1
*/

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

public class MyAuthenticator extends Authenticator {
    String userName = null;
    String password = null;

    public MyAuthenticator() {
    }

    public MyAuthenticator(String username, String password) {
        this.userName = username;
        this.password = password;
    }

    protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(userName, password);
    }
}