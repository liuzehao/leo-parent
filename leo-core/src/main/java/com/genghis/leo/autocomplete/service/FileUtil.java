package com.genghis.leo.autocomplete.service;

/**
 * Created by hao pc on 2016/3/22.
 */

import java.io.BufferedInputStream;

import java.io.BufferedOutputStream;

import java.io.File;

import java.io.FileInputStream;

import java.io.FileOutputStream;

import java.io.IOException;

import java.io.InputStream;

import java.io.OutputStream;

import java.util.List;

import java.util.zip.ZipEntry;

import java.util.zip.ZipOutputStream;



import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;
public class FileUtil {
    /**

     * 单个文件上传

     * @param is

     * @param fileName

     * @param filePath

     */

    public static void upFile(InputStream is,String fileName,String filePath){

        FileOutputStream fos = null;

        BufferedOutputStream bos = null;

        BufferedInputStream bis = null;

        File file = new File(filePath);

        if(!file.exists()){

            file.mkdirs();

        }

        File f = new File(filePath+"/"+fileName);

        try {

            bis = new BufferedInputStream(is);

            fos = new FileOutputStream(f);

            bos = new BufferedOutputStream(fos);

            byte[] bt = new byte[4096];

            int len;

            while((len = bis.read(bt))>0){

                bos.write(bt, 0, len);

            }

        } catch (Exception e) {

            e.printStackTrace();

        }finally {

            try {

                if(null != bos){

                    bos.close();

                    bos = null;}

                if(null != fos){

                    fos.close();

                    fos= null;

                }

                if(null != is){

                    is.close();

                    is=null;

                }

                if (null != bis) {

                    bis.close();

                    bis = null;

                }

            } catch (Exception e) {

                e.printStackTrace();

            }

        }

    }

}
