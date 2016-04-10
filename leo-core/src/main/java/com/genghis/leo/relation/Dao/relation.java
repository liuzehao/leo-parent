package com.genghis.leo.relation.Dao;
import com.genghis.steed.annotation.mybatisRepository;
import com.genghis.leo.relation.Model.RelationFile;
/**
 * Created by hao pc on 2016/4/3.
 */
@mybatisRepository
public interface  relation {
    void relation(RelationFile relationmodle);
}
