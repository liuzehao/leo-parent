package com.genghis.leo.security.service.impl;

import com.genghis.leo.security.dao.PermissionDao;
import com.genghis.leo.security.entity.MenuPerm;
import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by panzhuowen on 2014/10/19.
 */
@Service("permissionService")
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionDao permissionDao;

    @Override
    public List<MenuPerm> getMenuTree() {
        List<MenuPerm> menuPermList = new ArrayList<>();
        menuPermList.add(new MenuPerm(1,"","权限选择",-1));
        menuPermList.add(new MenuPerm(2,"admin","系统设置",1));
        menuPermList.add(new MenuPerm(3,"user_admin","用户管理",2));
        menuPermList.add(new MenuPerm(3,"role_admin","角色管理",2));
        menuPermList.add(new MenuPerm(3,"perm_admin","权限管理",2));
        return menuPermList;
    }

    @Override
    public List<Permission> getPermissionListPage(Permission permission) {
        return permissionDao.getPermissionListPage(permission);
    }

    @Override
    public void addPermission(Permission permission) {
        permissionDao.addPermission(permission);
    }

    @Override
    public void delPermission(int id) {
        permissionDao.delPermission(id);
    }

    @Override
    public Permission findPermissionById(int id) {
        return permissionDao.findPermissionById(id);
    }

    @Override
    public void editPermission(Permission permission) {
        permissionDao.editPermission(permission);
    }

    @Override
    public int checkRepeatPermToken(Permission permission) {
        return permissionDao.checkRepeatPermToken(permission);
    }

    @Override
    public int checkRepeatPermissionName(Permission permission) {
        return permissionDao.checkRepeatPermissionName(permission);
    }

    @Override
    public int findIdByPermToken(String permToken) {
        return permissionDao.findIdByPermToken(permToken);
    }
}
