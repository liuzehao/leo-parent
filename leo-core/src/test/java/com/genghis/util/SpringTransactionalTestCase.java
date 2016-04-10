/*
* SpringTransactionalTestCase.java
* Created on  2014-3-6 上午10:53
* 版本       修改时间          作者      修改内容
* V1.0.1    2014-3-6       gaoxinyu    初始版本
*
*/
package com.genghis.util;

import com.genghis.steed.util.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

import javax.sql.DataSource;

/**
* 类的描述信息
*
* @author gaoxinyu
* @version 1.0.1
*/
@ActiveProfiles("test")
public abstract class SpringTransactionalTestCase extends AbstractTransactionalJUnit4SpringContextTests {
    protected DataSource dataSource;

    @Autowired
    private SpringContextHolder springContextHolder;

    @Override
    @Autowired
    public void setDataSource(DataSource dataSource) {
        super.setDataSource(dataSource);
        this.dataSource = dataSource;
    }
}
