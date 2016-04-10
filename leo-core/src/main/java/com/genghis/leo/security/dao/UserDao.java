/*
* UserDao.java
* Created on  2013-9-26 下午10:03
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-9-26        gaoxinyu    初始版本
*
*/
package com.genghis.leo.security.dao;


import com.genghis.leo.security.entity.User;
import com.genghis.steed.annotation.mybatisRepository;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 角色dao接口
 *
 * @author gaoxinyu
 * @version 1.0.1
 */
@mybatisRepository
public interface UserDao {

    User findUserByLoginName(@Param("loginName") String loginName);

    List<String> findAllUserPermTokensByUserId(@Param("loginName") String loginName);

    List<User> getUserListPage(User user);

    void addUserDo(User user);

    void addUserRole(User user);

    void delUser(@Param("id") int id);

    void delUserRole(@Param("id") int id);

    User findUserById(@Param("id")int id);

    void editUser(User user);

    void editUserRole(User user);

    int hasCheckRepeatLoginName(@Param("loginName")String loginName);

    int checkRepeatUser(User user);

}
