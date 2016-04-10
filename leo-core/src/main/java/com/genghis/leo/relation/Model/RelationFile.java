package com.genghis.leo.relation.Model;

/**
 * Created by hao pc on 2016/4/3.
 */
public class RelationFile {
    String file_id1;
    String file_id2;
    String file_relationtime;
    public RelationFile(String file_id1,String file_id2,String file_relationtime)
    {
        this.file_id1 =file_id1;
        this.file_id2 = file_id2;
        this.file_relationtime = file_relationtime;
    }
    public String getFile_relationtime() {
        return file_relationtime;
    }

    public void setFile_relationtime(String file_relationtime) {
        this.file_relationtime = file_relationtime;
    }

    public String getFile_id1() {
        return file_id1;
    }

    public void setFile_id1(String file_id1) {
        this.file_id1 = file_id1;
    }

    public String getFile_id2() {
        return file_id2;
    }

    public void setFile_id2(String file_id2) {
        this.file_id2 = file_id2;
    }


}
