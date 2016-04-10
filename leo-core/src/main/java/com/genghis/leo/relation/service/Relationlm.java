package com.genghis.leo.relation.service;

import com.genghis.leo.relation.Dao.relation;
import com.genghis.leo.relation.Model.RelationFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by hao pc on 2016/4/3.
 */
@Service("Relation")
public class Relationlm {
    @Autowired
    private relation demo;
    public void addrelation(RelationFile t){
        demo.relation(t);
    }
}
