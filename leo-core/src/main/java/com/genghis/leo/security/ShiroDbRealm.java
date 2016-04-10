package com.genghis.leo.security;

import com.genghis.leo.security.entity.User;
import com.genghis.leo.security.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xulixin
 * Date: 13-7-9
 * Time: 下午8:03
 * To change this template use File | Settings | File Templates.
 */
public class ShiroDbRealm extends AuthorizingRealm {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String) getAvailablePrincipal(principals); // 使用Shiro提供的方法获取用户名称
        if (username != null) {
            List<String> roles = userService.getRolesByLoginName(username);
            List<String> permTokens = userService.getPermTokensByLoginName(username);
            SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
            if (roles != null) {
                info.addRoles(roles); // 加入用户角色
            }
            if (permTokens != null) {
                info.addStringPermissions(permTokens); // 加入用户许可标记
            }
            return info;
        }
        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken)
            throws AuthenticationException {

        UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
        String userName = token.getUsername();

        if (userName != null && !"".equals(userName)) {
            User user = userService.findUserByLoginName(userName);
            if (user != null) {
                return new SimpleAuthenticationInfo(user.getLoginName(), user.getPassword(), getName());
            }
        }
        return null;
    }

}
