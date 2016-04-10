package com.genghis.leo.security.entity;

import com.genghis.steed.mybatis.model.PageBase;

import java.util.ArrayList;
import java.util.List;

/**
 * @author gaoxinyu
 * @version 1.0.1
 */
public class Permission extends PageBase{

    private int id;
    private String permToken;
    private String description;
    private String oldPermToken;


    public Permission() {
        // reserved for JavaBean Instant
    }

    public Permission(String permToken, String description,String oldPermToken) {
        this.permToken = permToken;
        this.description = description;
        this.oldPermToken = oldPermToken;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPermToken() {
        return permToken;
    }

    public void setPermToken(String permToken) {
        this.permToken = permToken;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOldPermToken() {
        return oldPermToken;
    }

    public void setOldPermToken(String oldPermToken) {
        this.oldPermToken = oldPermToken;
    }
}
