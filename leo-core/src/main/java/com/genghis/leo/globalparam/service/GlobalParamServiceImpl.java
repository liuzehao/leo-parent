package com.genghis.leo.globalparam.service;

import com.genghis.leo.globalparam.dao.GlobalParamDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * Created by genghis on 14-8-7.
 */
@Service("leoGlobalParamService")
public class GlobalParamServiceImpl implements GlobalParamService {

    @Autowired
    @Qualifier("leoGlobalParamDao")
    GlobalParamDao globalParamDao;

    @Override
    public String getParamValue(String paramName) {
        return globalParamDao.getParamValue(paramName);
    }
}
