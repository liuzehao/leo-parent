package com.genghis.leo.security.service;


import com.genghis.leo.security.entity.User;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: ChenL
 * Date: 13-11-1
 * Time: 上午9:14
 * To change this template use File | Settings | File Templates.
 */
public interface UserService {

    List<String> getRolesByLoginName(String loginName);

    List<String> getPermTokensByLoginName(String loginName);

    User findUserByLoginName(String loginName);

    List<User> getUserListPage(User user);

    void addUserDo(User user);

    void delUser(int id);

    User findUserById(int id);

    void editUser(User user);

    void editUserRole(User user);

    int hasCheckRepeatLoginName(String loginName);

    int checkRepeatUser(User user);

}
