package com.genghis.leo.security.entity;

/**
 * Created by panzhuowen on 2014/10/22.
 */
public class RolePermission {
    private int roleId;
    private int permId;
    private String permToken;

    public RolePermission() {
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public int getPermId() {
        return permId;
    }

    public void setPermId(int permId) {
        this.permId = permId;
    }

    public String getPermToken() {
        return permToken;
    }

    public void setPermToken(String permToken) {
        this.permToken = permToken;
    }
}
