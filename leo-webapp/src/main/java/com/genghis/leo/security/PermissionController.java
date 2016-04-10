package com.genghis.leo.security;

import com.genghis.leo.security.entity.Permission;
import com.genghis.leo.security.service.PermissionService;
import com.genghis.steed.ajax.response.PageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by panzhuowen on 2014/10/19.
 */
@Controller
public class PermissionController {

    @Autowired
    private PermissionService permissionService;

    @RequestMapping(value = "/admin/permission/listAllPermissionPageDo", method={RequestMethod.GET})


    public String listAllPermissionPageDo() {
        return "admin/permission/listAllPermission";
    }

    @RequestMapping(value = "/admin/permission/findAllPermission", method = {RequestMethod.POST})
    @ResponseBody
    public PageResponse<Permission> findAllPermission(Permission permission) {
        return new PageResponse<>(permission.getPage(),permissionService.getPermissionListPage(permission));
    }

    @RequestMapping(value = "/admin/permission/addPermissionDo", method = {RequestMethod.GET})
    public String addPermissionDo() {
        return "admin/permission/addPermissionDo";
    }

    @RequestMapping(value = "/admin/permission/addPermission", method = {RequestMethod.POST})
    @ResponseBody
    public void addPermission(Permission permission) {
        permissionService.addPermission(permission);
    }

    @RequestMapping(value = "/admin/permission/delPermission", method = {RequestMethod.DELETE})
    @ResponseBody
    public void delPermission(@RequestParam("id") int id) {
        permissionService.delPermission(id);
    }

    @RequestMapping(value = "/admin/permission/editPermissionDo", method = {RequestMethod.GET,RequestMethod.POST})
    public String editPermissionDo(@RequestParam("id") int id,HttpServletRequest request) {
        Permission permission = permissionService.findPermissionById(id);
        request.setAttribute("permission",permission);
        return "admin/permission/editPermissionDo";
    }

    @RequestMapping(value = "/admin/permission/editPermission", method = {RequestMethod.POST})
    @ResponseBody
    public void editPermission(Permission permission) {
        permissionService.editPermission(permission);
    }

    @RequestMapping(value = "/admin/permission/validatePermission", method = {RequestMethod.POST})
    @ResponseBody
    public boolean validatePermToken(Permission permission) {
        int hasRepeatName = permissionService.checkRepeatPermToken(permission);
        if (permission.getId() == 0) { //新增
            if (hasRepeatName >= 1) {
                return false;
            }
        } else {  //编辑
            int checkRepeatRoleName = permissionService.checkRepeatPermissionName(permission);
            if (hasRepeatName > 1) {
                return false;
            }
            if (hasRepeatName == 1 && checkRepeatRoleName == 0) {
                return false;
            }
        }
        return true;
    }

}
