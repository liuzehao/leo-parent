package com.genghis.leo.globalparam.dao;

        import com.genghis.steed.annotation.mybatisRepository;
        import org.apache.ibatis.annotations.Param;

/**
 * Created by genghis on 14-8-7.
 */
@mybatisRepository("leoGlobalParamDao")
public interface GlobalParamDao {

    String getParamValue(@Param("paramName") String paramName);
}
