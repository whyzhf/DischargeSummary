package com.szgwnet.discharge.model;

import java.io.Serializable;

public class AppInfo  {

    private int app_id;	//统一定义的应用ID
    private String app_name;	//统一定义的应用名称
    private String description;	//应用描述
    private String version;		//应用版本号
    private String version_desc;
    private String app_logo;
    private String bg_img;
    private String server_ip;	//应用所运行服务器IP地址
    private String app_location;//授权开始时间
    private int dis_order;
    private int status;

    @Override
    public String toString() {
        return "AppInfo{" +
                "app_id=" + app_id +
                ", app_name='" + app_name + '\'' +
                ", description='" + description + '\'' +
                ", version='" + version + '\'' +
                ", version_desc='" + version_desc + '\'' +
                ", app_logo='" + app_logo + '\'' +
                ", bg_img='" + bg_img + '\'' +
                ", server_ip='" + server_ip + '\'' +
                ", app_location='" + app_location + '\'' +
                ", dis_order=" + dis_order +
                ", status=" + status +
                '}';
    }

    public int getApp_id() {
        return app_id;
    }

    public void setApp_id(int app_id) {
        this.app_id = app_id;
    }

    public String getApp_name() {
        return app_name;
    }

    public void setApp_name(String app_name) {
        this.app_name = app_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getVersion_desc() {
        return version_desc;
    }

    public void setVersion_desc(String version_desc) {
        this.version_desc = version_desc;
    }

    public String getApp_logo() {
        return app_logo;
    }

    public void setApp_logo(String app_logo) {
        this.app_logo = app_logo;
    }

    public String getBg_img() {
        return bg_img;
    }

    public void setBg_img(String bg_img) {
        this.bg_img = bg_img;
    }

    public String getServer_ip() {
        return server_ip;
    }

    public void setServer_ip(String server_ip) {
        this.server_ip = server_ip;
    }

    public String getApp_location() {
        return app_location;
    }

    public void setApp_location(String app_location) {
        this.app_location = app_location;
    }

    public int getDis_order() {
        return dis_order;
    }

    public void setDis_order(int dis_order) {
        this.dis_order = dis_order;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
