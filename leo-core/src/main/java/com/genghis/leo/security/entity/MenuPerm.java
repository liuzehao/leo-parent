package com.genghis.leo.security.entity;

/**
 * Created by panzhuowen on 2014/10/20.
 */
public class MenuPerm {
    private int id;
    private String permToken;
    private String menuName;
    private int parentId;
    private boolean checked=false;

    public MenuPerm() {
    }

    public MenuPerm(int id, String permToken, String menuName, int parentId) {
        this.id = id;
        this.permToken = permToken;
        this.menuName = menuName;
        this.parentId = parentId;
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

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }
}
