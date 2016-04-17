package com.genghis.leo.security;
import com.genghis.leo.autocomplete.service.AutoCompleteService;
import com.genghis.leo.security.entity.User;
import com.genghis.leo.security.service.UserService;
import com.genghis.steed.ajax.response.PageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
/**
 * Created by SunJQ on 2016/4/12.
 */
@Controller
public class ThemeController {
    @RequestMapping(value = "/admin/theme/getAllThemeDo",method = {RequestMethod.GET})
    public String getAllThemeDo() {
        return "admin/theme/listAllThemeDo";
    }
}
