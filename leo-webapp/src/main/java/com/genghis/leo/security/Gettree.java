package com.genghis.leo.security;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.io.File;
import java.util.Date;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import netscape.security.Privilege;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import  net.sf.json.JSONArray;
/**
 * Created by hao pc on 2016/3/19.
 */
@Controller
@RequestMapping("/study")
public class Gettree{
    @RequestMapping("updateInfoVideo")
    @ResponseBody
    public ModelAndView getCourse2(Model model,HttpServletRequest request,HttpSession session) throws JsonProcessingException {
        try {
            System.out.println("来了");
            String s1 = "{id:1, pId:0, name:\"test1\" , open:true}";
            String s2 = "{id:2, pId:1, name:\"test2\" , open:true}";
            String s3 = "{id:3, pId:1, name:\"test3\" , open:true}";
            String s4 = "{id:4, pId:2, name:\"test4\" , open:true}";
            List<String> lstTree = new ArrayList<String>();
            lstTree.add(s1);
            lstTree.add(s2);
            lstTree.add(s3);
            lstTree.add(s4);
            System.out.println("走了");
            model.addAttribute("tree",new ObjectMapper().writeValueAsString(lstTree));

        }
        catch (NullPointerException e) {
            e.printStackTrace();
        }

        return new ModelAndView("index");
    }
}
