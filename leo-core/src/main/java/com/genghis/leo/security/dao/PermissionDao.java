package com.genghis.leo.security.dao;

import com.genghis.leo.security.entity.Permission;
import com.genghis.steed.annotation.mybatisRepository;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by panzhuowen on 2014/10/19.
 */
@mybatisRepository
public interface PermissionDao {

    List<Permission> getPermissionListPage(Permission permission);

    void addPermission(Permission permission);

    void delPermission(@Param("id") int id);

    Permission findPermissionById(@Param("id")int id);

    void editPermission(Permission permission);

    int checkRepeatPermToken(Permission permission);

    int checkRepeatPermissionName(Permission permission);

    int findIdByPermToken(@Param("permToken") String permToken);
}
