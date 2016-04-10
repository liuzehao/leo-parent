package com.genghis.leo.mail.service;

public interface EmailService {
    public void sendEmail(String subject, String content, String sendName);
}
