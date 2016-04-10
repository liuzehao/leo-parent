package com.genghis.leo.security.service.impl;

import com.genghis.leo.security.dao.RoleDao;
import com.genghis.leo.security.entity.MenuPerm;
import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.entity.Role;
import com.genghis.leo.security.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/18.
 */
@Service("roleService")
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleDao roleDao;

    @Override
    public List<Role> getRoleListPage(Role role) {
        return roleDao.getRoleListPage(role);
    }

    @Override
    public void addRole(Role role) {
        roleDao.addRole(role);
    }

    @Override
    public Role findRoleByUserId(int userId) {
        return null;
    }

    @Override
    public void delRoleDo(int id) {
        roleDao.delRoleDo(id);
    }

    @Override
    public Role findRoleById(int id) {
        return roleDao.findRoleById(id);
    }

    @Override
    public List<Role> findAllRole() {
        return roleDao.findAllRole();
    }

    @Override
    public String getPermissionTokenValues(List<Permission> permissionList) {
        String permissionValues = "";
        if (!permissionList.isEmpty()) {
            for (Permission permission : permissionList) {
                permissionValues += permission.getDescription() + ",";
            }
        }
        permissionValues = permissionValues.substring(0,permissionValues.length() - 1);
        return permissionValues;
    }

    @Override
    public String getPermissionTokens(List<Permission> permissionList) {
        String permissionTokens = "";
        if (!permissionList.isEmpty()) {
            for (Permission permission : permissionList) {
                permissionTokens += permission.getPermToken() + ",";
            }
        }
        permissionTokens = permissionTokens.substring(0,permissionTokens.length() - 1);
        return permissionTokens;
    }

    @Override
    public void setHasChecked(List<MenuPerm> menuPermList, List<Permission> permissionList) {
        for (MenuPerm menuPerm : menuPermList) {
            for (Permission permissionSelect : permissionList) {
                if (permissionSelect.getPermToken().equals(menuPerm.getPermToken())) {
                    menuPerm.setChecked(true);
                }
            }
        }
    }

    @Override
    public void editRole(Role role) {
        roleDao.editRole(role);
    }

    @Override
    public int checkRepeatRoleNameNum(String roleName) {
        return roleDao.checkRepeatRoleNameNum(roleName);
    }

    @Override
    public int checkRepeatRoleNameByRole(Role role) {
        return roleDao.checkRepeatRoleNameByRole(role);
    }

}
