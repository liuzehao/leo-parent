package com.genghis.leo.security.entity;

import com.genghis.steed.mybatis.model.PageBase;

/**
 * @author gaoxinyu
 * @version 1.0.1
 */
public class User extends PageBase{

    private int userId;
    private String username;
    private String loginName;
    private String password;
    private String rePassword;
    private boolean rememberMe;

    private int roleId;
    private String showRoleId;
    private String roleName;

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public User() {

    }

    public String getRePassword() {
        return rePassword;
    }

    public void setRePassword(String rePassword) {
        this.rePassword = rePassword;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isRememberMe() {
        return rememberMe;
    }

    public void setRememberMe(boolean rememberMe) {
        this.rememberMe = rememberMe;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getShowRoleId() {
        return showRoleId;
    }

    public void setShowRoleId(String showRoleId) {
        this.showRoleId = showRoleId;
    }
}
