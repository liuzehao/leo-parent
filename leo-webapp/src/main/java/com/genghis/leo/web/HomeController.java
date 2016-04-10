package com.genghis.leo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author gaoxinyu
 * @version 1.0.1
 */
@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping(method = {RequestMethod.GET, RequestMethod.POST})
    public String index() {
        return "/index";
    }

}
