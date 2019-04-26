package com.szgwnet.discharge.model;

public class Org {
    private Integer id;

    private String name;

    private Integer parId;

    private Integer disOrder;

    private Integer status;

    private Integer type;

    private String accname;

    private String descr;

    private Integer userNumber;

    private String orgAdmin;

    private String orgAdminTel;

    public Org(){}

    public Org(Integer id, String name, Integer parId) {
        this.id = id;
        this.name = name;
        this.parId = parId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getParId() {
        return parId;
    }

    public void setParId(Integer parId) {
        this.parId = parId;
    }

    public Integer getDisOrder() {
        return disOrder;
    }

    public void setDisOrder(Integer disOrder) {
        this.disOrder = disOrder;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getAccname() {
        return accname;
    }

    public void setAccname(String accname) {
        this.accname = accname == null ? null : accname.trim();
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr == null ? null : descr.trim();
    }

    public Integer getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(Integer userNumber) {
        this.userNumber = userNumber;
    }

    public String getOrgAdmin() {
        return orgAdmin;
    }

    public void setOrgAdmin(String orgAdmin) {
        this.orgAdmin = orgAdmin == null ? null : orgAdmin.trim();
    }

    public String getOrgAdminTel() {
        return orgAdminTel;
    }

    public void setOrgAdminTel(String orgAdminTel) {
        this.orgAdminTel = orgAdminTel == null ? null : orgAdminTel.trim();
    }
}