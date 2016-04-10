/*
* AutoCompleteServiceImpl.java
* Created on  2013-10-31 下午2:23
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-10-31       gaoxinyu    初始版本
*
*/
package com.genghis.leo.autocomplete.service;

import com.genghis.leo.autocomplete.dao.AutoCompleteDao;
import com.genghis.steed.autocomplete.model.AutoComplete;
import com.genghis.steed.autocomplete.service.AbstractAutoCompleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * AutoCompleteServiceImpl
 *
 * @author gaoxinyu
 * @version 1.0.1
 */
@Service("autoCompleteService")
public class CustomAutoCompleteServiceImpl extends AbstractAutoCompleteService implements AutoCompleteService{

    @Autowired
    private AutoCompleteDao autoCompleteDao;

    @Override
    @PostConstruct
    public void initAutoComplete() {
        super.initAutoComplete();
    }

    @Override
    protected void initAutoCompleteMap() {
        Map<String, List<AutoComplete>> autoCompleteMap = new HashMap<>();
        autoCompleteMap.put("roleAutoCompleteList",autoCompleteDao.getRoleAutoCompleteList());
        setAutoCompleteMap(autoCompleteMap);
    }
}
