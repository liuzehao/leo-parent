package com.genghis.leo.security.service.impl;

import com.genghis.leo.security.dao.RolePermissionDao;
import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.entity.Role;
import com.genghis.leo.security.entity.RolePermission;
import com.genghis.leo.security.service.PermissionService;
import com.genghis.leo.security.service.RolePermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/21.
 */
@Service("rolePermissionService")
public class RolePermissionServiceImpl implements RolePermissionService {

    @Autowired
    private RolePermissionDao rolePermissionDao;

    @Autowired
    private PermissionService permissionService;

    @Override
    public void addRolePermission(int id, String permTokens) {
        RolePermission rolePermission = new RolePermission();
        rolePermission.setRoleId(id);
        String[] permToken = permTokens.split(",");
        for (int i = 0; i < permToken.length; i++) {
            int permId = permissionService.findIdByPermToken(permToken[i]);
            rolePermission.setPermId(permId);
            rolePermission.setPermToken(permToken[i]);
            rolePermissionDao.addRolePermission(rolePermission);
        }

    }

    @Override
    public void delRolePermission(int id) {
        rolePermissionDao.delRolePermission(id);
    }

    @Override
    public List<Permission> findChoosedPermissionTokenByRoleId(int roleId) {
        return rolePermissionDao.findChoosedPermissionTokenByRoleId(roleId);
    }
}
