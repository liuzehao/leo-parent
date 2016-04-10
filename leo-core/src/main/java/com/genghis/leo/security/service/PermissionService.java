package com.genghis.leo.security.service;

import com.genghis.leo.security.entity.MenuPerm;
import com.genghis.leo.security.entity.Permission;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/19.
 */
public interface PermissionService {

    List<MenuPerm> getMenuTree();

    List<Permission> getPermissionListPage(Permission permission);

    void addPermission(Permission permission);

    void delPermission(int id);

    Permission findPermissionById(int id);

    void editPermission(Permission permission);

    int checkRepeatPermToken(Permission permission);

    int checkRepeatPermissionName(Permission permission);

    int findIdByPermToken(String permToken);

}
