/*
* MailSenderInfo.java
* Created on  2013-12-11 下午1:47
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-12-11        chenl     初始版本
*
*/
package com.genghis.leo.mail.model;

/**
* 发送邮件需要使用的基本信息
*
* @author chenl
* @version 1.0.1
*/

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Properties;

@Component
public class MailSenderInfo {
    // 发送邮件的服务器的IP和端口
    @Value("${email.send.mailServerHost}")
    private String mailServerHost;
    private String mailServerPort = "25";
    // 邮件发送者的地址
    @Value("${email.send.address}")
    private String fromAddress;
    // 邮件接收者的地址
    @Value("${email.send.toAddress}")
    private String toAddress;
    // 登陆邮件发送服务器的用户名和密码
    @Value("${email.send.userName}")
    private String userName;
    @Value("${email.send.password}")
    private String password;
    // 是否需要身份验证
    private boolean validate = true;
    // 邮件主题
    private String subject;
    // 邮件的文本内容
    private String content;
    // 邮件附件的文件名
    private String[] attachFileNames;

    private String sendName;

    /**
     * 获得邮件会话属性
     */
    public Properties getProperties() {
        Properties p = new Properties();
        p.put("mail.smtp.host", this.mailServerHost);
        p.put("mail.smtp.port", this.mailServerPort);
        p.put("mail.smtp.auth", validate ? "true" : "false");
        return p;
    }

    public String getMailServerHost() {
        return mailServerHost;
    }

    public void setMailServerHost(String mailServerHost) {
        this.mailServerHost = mailServerHost;
    }

    public String getMailServerPort() {
        return mailServerPort;
    }

    public void setMailServerPort(String mailServerPort) {
        this.mailServerPort = mailServerPort;
    }

    public boolean isValidate() {
        return validate;
    }

    public void setValidate(boolean validate) {
        this.validate = validate;
    }

    public String[] getAttachFileNames() {
        return attachFileNames;
    }

    public void setAttachFileNames(String[] fileNames) {
        this.attachFileNames = fileNames;
    }

    public String getFromAddress() {
        return fromAddress;
    }

    public void setFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToAddress() {
        return toAddress;
    }

    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String textContent) {
        this.content = textContent;
    }

    public String getSendName() {
        return sendName;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }
}