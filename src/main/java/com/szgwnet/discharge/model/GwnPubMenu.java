package com.szgwnet.discharge.model;


import java.util.ArrayList;

public class GwnPubMenu {

  private Integer id;
  private Integer appId;
  private Integer menuTypeId;
  private String name;
  private String descr;
  private String url;
  private String sysParam;
  private Integer parId;
  private String remarks;
  private Integer disOrder;
  private String imgUrl;
  private String bgColor;
  private String ifdim;
  private Integer type;
  public ArrayList<GwnPubMenu> children;
  public GwnPubMenu() {
    super();
    this.children = new ArrayList<>();
  }
  public void addChildren(GwnPubMenu menu) {
    this.children.add(menu);
  }

  @Override
  public String toString() {
    return "GwnPubMenu{" +
            "id=" + id +
            ", appId=" + appId +
            ", menuTypeId=" + menuTypeId +
            ", name='" + name + '\'' +
            ", descr='" + descr + '\'' +
            ", url='" + url + '\'' +
            ", sysParam='" + sysParam + '\'' +
            ", parId=" + parId +
            ", remarks='" + remarks + '\'' +
            ", disOrder=" + disOrder +
            ", imgUrl='" + imgUrl + '\'' +
            ", bgColor='" + bgColor + '\'' +
            ", ifdim='" + ifdim + '\'' +
            ", type=" + type +
            ", children=" + children +
            '}';
  }

  public ArrayList<GwnPubMenu> getChildren() {
    return children;
  }

  public void setChildren(ArrayList<GwnPubMenu> children) {
    this.children = children;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public Integer getAppId() {
    return appId;
  }

  public void setAppId(Integer appId) {
    this.appId = appId;
  }


  public Integer getMenuTypeId() {
    return menuTypeId;
  }

  public void setMenuTypeId(Integer menuTypeId) {
    this.menuTypeId = menuTypeId;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getDescr() {
    return descr;
  }

  public void setDescr(String descr) {
    this.descr = descr;
  }


  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }


  public String getSysParam() {
    return sysParam;
  }

  public void setSysParam(String sysParam) {
    this.sysParam = sysParam;
  }


  public Integer getParId() {
    return parId;
  }

  public void setParId(Integer parId) {
    this.parId = parId;
  }


  public String getRemarks() {
    return remarks;
  }

  public void setRemarks(String remarks) {
    this.remarks = remarks;
  }


  public Integer getDisOrder() {
    return disOrder;
  }

  public void setDisOrder(Integer disOrder) {
    this.disOrder = disOrder;
  }


  public String getImgUrl() {
    return imgUrl;
  }

  public void setImgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
  }


  public String getBgColor() {
    return bgColor;
  }

  public void setBgColor(String bgColor) {
    this.bgColor = bgColor;
  }


  public String getIfdim() {
    return ifdim;
  }

  public void setIfdim(String ifdim) {
    this.ifdim = ifdim;
  }


  public Integer getType() {
    return type;
  }

  public void setType(Integer type) {
    this.type = type;
  }

}
