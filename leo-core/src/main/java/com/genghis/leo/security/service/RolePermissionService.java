package com.genghis.leo.security.service;

import com.genghis.leo.security.entity.Permission;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/21.
 */
public interface RolePermissionService {

    void addRolePermission(int id, String permTokens);

    void delRolePermission(int id);

    List<Permission> findChoosedPermissionTokenByRoleId(int roleId);

}
