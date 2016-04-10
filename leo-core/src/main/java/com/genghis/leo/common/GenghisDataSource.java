/*
* GenghisDataSource.java
* Created on  2014-3-8 下午9:24
* 版本       修改时间          作者      修改内容
* V1.0.1    2014-3-8       gaoxinyu    初始版本
*
*/
package com.genghis.leo.common;

import com.genghis.steed.util.Des;
import org.apache.tomcat.jdbc.pool.DataSource;

/**
 * 用于对数据库口令加密
 * @author panzhuowen
 * @version 1.0.1
 */
public class GenghisDataSource extends DataSource {

    @Override
    public void setPassword(String password) {
        super.setPassword(password);
    }

    @Override
    public void setUsername(String username) {
        super.setUsername(username);
    }
}
