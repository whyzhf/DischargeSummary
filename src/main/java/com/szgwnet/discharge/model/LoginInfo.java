package com.szgwnet.discharge.model;

import java.util.List;


public class LoginInfo {

    private Integer user_id;//用户id
    private String user_name;//用户名称
    private Integer status;//用户状态 0禁用 1启用

    private List<Integer> org_ids;//科室id
    private List<String> org_names;//科室名称  和org_ids一一对应

    private List<Integer> role_ids;//角色id
    private List<String> role_names;//角色名称  和role_ids一一对应
    private Integer role_index;//当前角色下标

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public List<Integer> getOrg_ids() {
        return org_ids;
    }

    public void setOrg_ids(List<Integer> org_ids) {
        this.org_ids = org_ids;
    }

    public List<String> getOrg_names() {
        return org_names;
    }

    public void setOrg_names(List<String> org_names) {
        this.org_names = org_names;
    }

    public List<Integer> getRole_ids() {
        return role_ids;
    }

    public void setRole_ids(List<Integer> role_ids) {
        this.role_ids = role_ids;
    }

    public List<String> getRole_names() {
        return role_names;
    }

    public void setRole_names(List<String> role_names) {
        this.role_names = role_names;
    }

    public Integer getRole_index() {
        return role_index;
    }

    public void setRole_index(Integer role_index) {
        this.role_index = role_index;
    }
}
