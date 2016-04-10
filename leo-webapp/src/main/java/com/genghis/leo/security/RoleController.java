package com.genghis.leo.security;

import com.genghis.leo.security.entity.MenuPerm;
import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.entity.Role;
import com.genghis.leo.security.service.PermissionService;
import com.genghis.leo.security.service.RolePermissionService;
import com.genghis.leo.security.service.RoleService;
import com.genghis.steed.ajax.response.PageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by panzhuowen on 2014/10/18.
 */

@Controller
public class RoleController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private RolePermissionService rolePermissionService;

    @Autowired
    private PermissionService permissionService;

    @RequestMapping(value = "/admin/role/listAllRoleDo",method = {RequestMethod.GET})
    public String listAllRoleDo() {
        return "admin/role/listAllRoleDo";
    }

    @RequestMapping(value = "admin/role/findAllRole",method = {RequestMethod.POST})
    @ResponseBody
    public PageResponse<Role> findAllRile(Role role) {
        return new PageResponse<>(role.getPage(),roleService.getRoleListPage(role));
    }

    @RequestMapping(value = "/admin/role/addRoleDo", method = {RequestMethod.GET})
    public String addRoleDo(HttpServletRequest request) {
        List<MenuPerm> menuPermList = permissionService.getMenuTree();
        request.setAttribute("menuPermList",menuPermList);
        return "admin/role/addRoleDo";
    }

    @RequestMapping(value = "/admin/role/addRole", method = {RequestMethod.POST})
    @ResponseBody
    public void addRole(Role role) {
        roleService.addRole(role);
        rolePermissionService.addRolePermission(role.getId(),role.getPermToken());
    }

    @RequestMapping(value = "/admin/role/delRoleDo", method = {RequestMethod.DELETE})
    @ResponseBody
    public void delRoleDa(@RequestParam("id") int id) {
        roleService.delRoleDo(id);
        rolePermissionService.delRolePermission(id);
    }

    @RequestMapping(value = "/admin/role/editRoleDo",method = {RequestMethod.GET})
    public String editRoleDo(@RequestParam("id") int id,HttpServletRequest request) {
        Role role = roleService.findRoleById(id);
        List<MenuPerm> menuPermList = permissionService.getMenuTree();
        List<Permission> choosedPerms = rolePermissionService.findChoosedPermissionTokenByRoleId(id);
        String permissionValues = roleService.getPermissionTokenValues(choosedPerms);
        String permissionTokens = roleService.getPermissionTokens(choosedPerms);
        roleService.setHasChecked(menuPermList,choosedPerms);
        request.setAttribute("role",role);
        request.setAttribute("permissionTokens",permissionTokens);
        request.setAttribute("menuPermList",menuPermList);
        request.setAttribute("permissionValues",permissionValues);
        request.setAttribute("choosedPerms",choosedPerms);
        return "admin/role/editRoleDo";
    }

    @RequestMapping(value = "/admin/role/editRole", method = {RequestMethod.POST})
    @ResponseBody
    public void editRole(Role role) {
        roleService.editRole(role);
        rolePermissionService.delRolePermission(role.getId());
        rolePermissionService.addRolePermission(role.getId(),role.getPermToken());
    }

    @RequestMapping(value = "/admin/role/validateRoleName",method = {RequestMethod.POST})
    @ResponseBody
    public boolean validateRoleName(Role role) {
        int hasRepeatName = roleService.checkRepeatRoleNameNum(role.getRoleName());
        if (role.getId() == 0 ) { //新增
            if (hasRepeatName >= 1) {
                return false;
            }
        } else { //编辑
            int checkRoleNameByRole = roleService.checkRepeatRoleNameByRole(role);
            if (hasRepeatName > 1) {             //多个角色一个名
                return false;
            }
            if (hasRepeatName == 1 && checkRoleNameByRole == 0) {       // 角色名称只有一个，但不是要修改的这个角色名称
                return false;
            }
        }
        return true;
    }
}
