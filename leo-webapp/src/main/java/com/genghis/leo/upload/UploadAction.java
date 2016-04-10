package com.genghis.leo.upload;
import com.genghis.leo.upload.service.Uploadlm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.io.File;
import java.util.*;

@Controller
public class UploadAction {
    @Autowired
    private Uploadlm upload;
    @RequestMapping(value="/upload")
    public String upload(){
        return "upload";
    }
    @RequestMapping(value="uploadFile",method= RequestMethod.POST)
   public @ResponseBody  HashMap<String, String> uploadFile(@RequestParam(value = "input[]", required = true) MultipartFile file[],HttpServletRequest request) throws IOException {
        for(int i = 0;i<file.length;i++){
            if(file[i] != null){

                //取得当前上传文件的文件名称
                String myFileName = file[i].getOriginalFilename();
                String myFileType = file[i].getContentType();
                String myFileTime="2016-3-30";
                com.genghis.leo.upload.Model.File modle=new com.genghis.leo.upload.Model.File(myFileName,myFileType,myFileTime);
                upload.addPermission(modle);
                //如果名称不为“”,说明该文件存在，否则说明该文件不存在
                if(myFileName.trim() !=""){
                    //重命名上传后的文件名
                    String fileName = file[i].getOriginalFilename();
                    //定义上传路径
                    String path = "D:/" + fileName;
                    File localFile = new File(path);
                    file[i].transferTo(localFile);
                }
            }

        }
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("true", " ");
        return map;
    }
    }


