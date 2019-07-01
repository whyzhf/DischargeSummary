package com.szgwnet.discharge.model;

public class Role {
    private Integer id;

    private String name;

    private String descr;

    private String disOrder;

    private Integer orgId;

    private Integer sysrole;

    private Integer appId;

    private Integer parRoleId;

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

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr == null ? null : descr.trim();
    }

    public String getDisOrder() {
        return disOrder;
    }

    public void setDisOrder(String disOrder) {
        this.disOrder = disOrder == null ? null : disOrder.trim();
    }

    public Integer getOrgId() {
        return orgId;
    }

    public void setOrgId(Integer orgId) {
        this.orgId = orgId;
    }

    public Integer getSysrole() {
        return sysrole;
    }

    public void setSysrole(Integer sysrole) {
        this.sysrole = sysrole;
    }

    public Integer getAppId() {
        return appId;
    }

    public void setAppId(Integer appId) {
        this.appId = appId;
    }

    public Integer getParRoleId() {
        return parRoleId;
    }

    public void setParRoleId(Integer parRoleId) {
        this.parRoleId = parRoleId;
    }
}