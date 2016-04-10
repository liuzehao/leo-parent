/**
* TimerServiceImpl.java
* 功能：定时器
* 类名: TimerServiceImpl.java
*  版本       修改时间       作者    修改内容
* ---------------------------------------------------
* V1.0.1     2010.05.25      王晶    添加日和月存储过程
* V1.0.2     2010.08.12      王晶    添加星期存储过程
* V1.0.3     2010.08.17      王晶    增加方法
* V1.0.4     2010.08.19      王晶    增加方法
*
* Copyright (c) 2010 leo Team All Rights Reserved
*/
package com.genghis.leo.service.impl;

import com.genghis.leo.mail.service.EmailService;
import com.genghis.leo.service.TimerService;
import com.genghis.shield.security.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
* 本类是定时器类。
*
*/
@Service("timerService")
@Transactional
public class TimerServiceImpl implements TimerService {

    @Autowired
    private SecurityService securityService;

    @Autowired
    private EmailService emailService;

    @PostConstruct
    public void sendPassword() {
        emailService.sendEmail("carpo_" + new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + "密码",
                securityService.getPassword(false), "吉成科技");
    }
}
