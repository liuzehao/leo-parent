/*
* AutoCompleteDao.java
* Created on  2014-3-2 上午1:21
* 版本       修改时间          作者      修改内容
* V1.0.1    2014-3-2        gaoxinyu    初始版本
*
*/
package com.genghis.leo.autocomplete.dao;

import com.genghis.steed.annotation.mybatisRepository;
import com.genghis.steed.autocomplete.model.AutoComplete;

import java.util.List;

/**
 * @author gaoxinyu
 * @version 1.0.1
 */
@mybatisRepository
public interface AutoCompleteDao {

    List<AutoComplete> getRoleAutoCompleteList();
}
