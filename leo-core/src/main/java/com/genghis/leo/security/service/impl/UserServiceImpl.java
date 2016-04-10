/*
* UserManager.java
* Created on  2013-10-21 上午7:44
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-10-21       gaoxinyu    初始版本
*
*/
package com.genghis.leo.security.service.impl;

import com.genghis.leo.security.dao.RoleDao;
import com.genghis.leo.security.dao.UserDao;
import com.genghis.leo.security.entity.User;
import com.genghis.leo.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author gaoxinyu
 * @version 1.0.1
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;
    @Autowired
    private RoleDao roleDao;

    @Override
    public User findUserByLoginName(String loginName) {
        return userDao.findUserByLoginName(loginName);
    }

    @Override
    public List<User> getUserListPage(User user) {
        return userDao.getUserListPage(user);
    }

    @Override
    public void addUserDo(User user) {
        userDao.addUserDo(user);
        userDao.addUserRole(user);
    }

    @Override
    public void delUser(int id) {
        userDao.delUser(id);
        userDao.delUserRole(id);
    }

    @Override
    public User findUserById(int id) {
        return userDao.findUserById(id);
    }

    @Override
    public void editUser(User user) {
        userDao.editUser(user);
    }

    @Override
    public void editUserRole(User user) {
        userDao.editUserRole(user);
    }

    @Override
    public int hasCheckRepeatLoginName(String loginName) {
        return userDao.hasCheckRepeatLoginName(loginName);
    }

    @Override
    public int checkRepeatUser(User user) {
        return userDao.checkRepeatUser(user);
    }

    @Override
    public List<String> getRolesByLoginName(String loginName) {
        return roleDao.findAllRoleNamesByLoginName(loginName);
    }

    @Override
    public List<String> getPermTokensByLoginName(String loginName) {
        List<String> rolePermTokens = roleDao.findAllRolePermTokensByLoginName(loginName);
        Map<String, String> map = new HashMap<>();
        for (String permToken : rolePermTokens) {
            map.put(permToken, permToken);
        }
        List<String> userPermTokensList = userDao.findAllUserPermTokensByUserId(loginName);
        for (String permToken : userPermTokensList) {
            map.put(permToken, permToken);
        }
        return new ArrayList<>(map.keySet());
    }

}
