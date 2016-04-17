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
public class FileController {


    @RequestMapping(value = "/admin/file/getAllFileFileDo",method = {RequestMethod.GET})
    public String getAllFileFileDo() {
        return "admin/file/listAllFileFileDo";
    }

    @RequestMapping(value = "/admin/file/getAllVideoFileDo",method = {RequestMethod.GET})
    public String getAllVideoFileDo() {
        return "admin/file/listAllVideoFileDo";
    }


    @RequestMapping(value = "/admin/file/getAllMusicFileDo",method = {RequestMethod.GET})
    public String getAllMusicFileDo() {
        return "admin/file/listAllMusicFileDo";
    }
    @RequestMapping(value = "/admin/file/getAllOtherFileDo",method = {RequestMethod.GET})
    public String getAllOtherFileDo() {
        return "admin/file/listAllOtherFileDo";
    }
}