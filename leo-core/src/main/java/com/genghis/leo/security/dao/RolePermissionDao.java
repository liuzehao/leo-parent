package com.genghis.leo.security.dao;

import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.entity.RolePermission;
import com.genghis.steed.annotation.mybatisRepository;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/21.
 */
@mybatisRepository
public interface RolePermissionDao {

    void addRolePermission(RolePermission rolePermission);

    void delRolePermission(@Param("id")int id);

    List<Permission> findChoosedPermissionTokenByRoleId(@Param("roleId")int roleId);

}
