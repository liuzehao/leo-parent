package com.genghis.leo.service;

import com.genghis.util.SpringTransactionalTestCase;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

/**
* Created by Van on 14-4-28.
*/
@ContextConfiguration("/applicationContext-test.xml")
public class TimerServiceTest extends SpringTransactionalTestCase {

    @Autowired
    private TimerService timerService;

    @Test
    public void sendPasswordTest() throws Exception {
        timerService.sendPassword();
    }

}
