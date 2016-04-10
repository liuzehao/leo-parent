package com.genghis.leo.upload.Model;

/**
 * Created by hao pc on 2016/3/30.
 */
public class File {
    String name;
    String type;
    String time;
    public File(String name, String type ,String time)
    {
        this.name = name;
        this.type = type;
        this.time = time;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }


}
