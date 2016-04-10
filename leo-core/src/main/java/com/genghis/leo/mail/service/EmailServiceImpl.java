package com.genghis.leo.mail.service;

import com.genghis.leo.mail.model.MailSenderInfo;
import com.genghis.leo.mail.model.SimpleMailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("emailService")
@Transactional
public class EmailServiceImpl implements EmailService {
    @Autowired
    private MailSenderInfo mailInfo;

    @Override
    public void sendEmail(String subject, String content, String sendName) {
        mailInfo.setSubject(subject);
        mailInfo.setContent(content);
        mailInfo.setSendName(sendName);
//        SimpleMailSender.sendHtmlMail(mailInfo);
    }
}
