package com.genghis.leo.security.service;

import com.genghis.leo.security.entity.MenuPerm;
import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.entity.Role;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/18.
 */
public interface RoleService {

    List<Role> getRoleListPage(Role role);

    void addRole(Role role);

    Role findRoleByUserId(int userId);

    void delRoleDo(int id);

    Role findRoleById(int id);

    List<Role> findAllRole();

    String getPermissionTokenValues(List<Permission> permissionList);

    String getPermissionTokens(List<Permission> permissionList);

    void setHasChecked(List<MenuPerm> menuPermList, List<Permission> permissionList);

    void editRole(Role role);

    int checkRepeatRoleNameNum(String roleName);

    int checkRepeatRoleNameByRole(Role role);
}
