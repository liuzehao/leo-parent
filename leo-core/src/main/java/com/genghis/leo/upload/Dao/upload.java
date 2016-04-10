package com.genghis.leo.upload.Dao;

import com.genghis.steed.annotation.mybatisRepository;
import com.genghis.leo.upload.Model.File;


/**
 * Created by panzhuowen on 2014/10/19.
 */
@mybatisRepository
public interface upload {
    void upload(File modle);
}
