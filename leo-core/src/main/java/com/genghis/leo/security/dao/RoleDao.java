/*
* RoleDao.java
* Created on  2013-9-26 下午10:03
* 版本       修改时间          作者      修改内容
* V1.0.1    2013-9-26        gaoxinyu    初始版本
*
*/
package com.genghis.leo.security.dao;

import com.genghis.leo.security.entity.Role;
import com.genghis.steed.annotation.mybatisRepository;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 角色dao接口
 *
 * @author gaoxinyu
 * @version 1.0.1
 */
@mybatisRepository
public interface RoleDao {

    List<String> findAllRoleNamesByLoginName(@Param("loginName") String loginName);

    List<String> findAllRolePermTokensByLoginName(@Param("loginName") String loginName);

    List<Role> getRoleListPage(Role role);

    void addRole(Role role);

    Role findRoleByUserId(@Param("userId")int userId);

    void delRoleDo(@Param("id")int id);

    Role findRoleById(@Param("id")int id);

    void editRole(Role role);

    int checkRepeatRoleNameNum(@Param("roleName")String roleName);

    int checkRepeatRoleNameByRole(Role role);

    List<Role> findAllRole();
}
