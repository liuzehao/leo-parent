/*
* Role.java
* Created on  2013-9-26 下午10:07
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-9-26       gaoxinyu    初始版本
*
*/
package com.genghis.leo.security.entity;

import com.genghis.steed.mybatis.model.PageBase;

/**
 * @author gaoxinyu
 * @version 1.0.1
 */
public class Role extends PageBase{

    private int id;
    private String roleName;
    private String roleDescription;

    private String permToken;
    private String permId;

    public Role() {
    }

    public Role(String roleName, String description) {
        this.roleName = roleName;
        this.roleDescription = description;
    }

    public Role(int id, String roleName, String description) {
        this.id = id;
        this.roleName = roleName;
        this.roleDescription = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

    public String getPermToken() {
        return permToken;
    }

    public void setPermToken(String permToken) {
        this.permToken = permToken;
    }

    public String getPermId() {
        return permId;
    }

    public void setPermId(String permId) {
        this.permId = permId;
    }
}
