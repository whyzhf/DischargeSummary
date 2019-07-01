package com.szgwnet.discharge.model;


public class GwnSummaryCase {
/**
   * 功能描述
   * ID	int	11		主键
   * FNAME	varchar	20		患者姓名
   * FSEX	varchar	20		性别
   * FAGE	varchar	20		年龄
   * FDEPT	varchar	20		科室
   * FDEB	varchar	20		床号
   * FPRN	varchar	20		病案号
   * FSURVEY	varchar	256		病情概述
   * FRYQK	varchar	512		入院情况
   * FRYZD	varchar	100		入院诊断
   * FZLJG	varchar	512		诊疗经过
   * FCYZD	varchar	512		出院诊断
   * FCYQK	varchar	512		出院情况
   * FCYYZ	varchar	512		出院医嘱
   * STATUS	int	11		1:未翻译，2：已翻译，3：提交（未审核），4：驳回，5：已审核
   * status_name 1:未翻译，2：已翻译，3：提交（未审核），4：驳回，5：已审核
   * DESCR	varchar	256		驳回原因
   * ERRMESSAGES	varchar	256		出错信息
   * LRDATA	varchar	20		录入时间
   * GDDATA	varchar	20		归档时间
   * ENFILE	text			英文文档
   * DISP	int	11		排序
   * USER_ID  int 11   正在编辑的用户,保存或提交后清空
 */
  private Integer id;
  private String fname="";
  private String fsex;
  private String fage;
  private String fdept;
  private String fdeb;
  private String fprn;
  private String fsurvey;
  private String fryqk;
  private String fryzd;
  private String fzljg;
  private String fcyzd;
  private String fcyqk;
  private String fcyyz;
  private Integer status;

  private String status_name;
  private String descr;
  private String errmessages;
  private String lrdata;
  private String gddata;
  private String enfile;
  private Integer disp;
  private Integer user_id;

  public Integer getUser_id() {
    return user_id;
  }

  public void setUser_id(Integer user_id) {
    this.user_id = user_id;
  }

  public String getFrydata() {

    return frydata;
  }

  public void setFrydata(String frydata) {
      this.frydata = frydata;
  }

  public String getFcydata() {

    return fcydata;
  }

  public void setFcydata(String fcydata) {
    this.fcydata = fcydata;
  }

  public String getFsumd() {
    return fsumd;
  }

  public void setFsumd(String fsumd) {
    this.fsumd = fsumd;
  }

  private String frydata="...";
  private String fcydata="...";
  private String fsumd="...";
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public String getFname() {
    return fname;
  }

  public void setFname(String fname) {
    this.fname = fname;
  }


  public String getFsex() {
    return fsex;
  }

  public void setFsex(String fsex) {
    this.fsex = fsex;
  }


  public String getFage() {
    return fage;
  }

  public void setFage(String fage) {
    this.fage = fage;
  }


  public String getFdept() {
    return fdept;
  }

  public void setFdept(String fdept) {
    this.fdept = fdept;
  }


  public String getFdeb() {
    return fdeb;
  }

  public void setFdeb(String fdeb) {
    this.fdeb = fdeb;
  }


  public String getFprn() {
    return fprn;
  }

  public void setFprn(String fprn) {
    this.fprn = fprn;
  }


  public String getFsurvey() {
    return fsurvey;
  }

  public void setFsurvey(String fsurvey) {
    this.fsurvey = fsurvey;
  }


  public String getFryqk() {
    return fryqk;
  }

  public void setFryqk(String fryqk) {
    this.fryqk = fryqk;
  }


  public String getFryzd() {
    return fryzd;
  }

  public void setFryzd(String fryzd) {
    this.fryzd = fryzd;
  }


  public String getFzljg() {
    return fzljg;
  }

  public void setFzljg(String fzljg) {
    this.fzljg = fzljg;
  }


  public String getFcyzd() {
    return fcyzd;
  }

  public void setFcyzd(String fcyzd) {
    this.fcyzd = fcyzd;
  }


  public String getFcyqk() {
    return fcyqk;
  }

  public void setFcyqk(String fcyqk) {
    this.fcyqk = fcyqk;
  }


  public String getFcyyz() {
    return fcyyz;
  }

  public void setFcyyz(String fcyyz) {
    this.fcyyz = fcyyz;
  }


  public Integer getStatus() {
    return status;
  }

  public void setStatus(Integer status) {
    this.status = status;
  }

  public String getStatus_name() {
    return status_name;
  }

  public void setStatus_name(String status_name) {
    this.status_name = status_name;
  }


  public String getDescr() {
    return descr;
  }

  public void setDescr(String descr) {
    this.descr = descr;
  }


  public String getErrmessages() {
    return errmessages;
  }

  public void setErrmessages(String errmessages) {
    this.errmessages = errmessages;
  }


  public String getLrdata() {
    return lrdata;
  }

  public void setLrdata(String lrdata) {
    this.lrdata = lrdata;
  }


  public String getGddata() {
    return gddata;
  }

  public void setGddata(String gddata) {
    this.gddata = gddata;
  }


  public String getEnfile() {
    return enfile;
  }

  public void setEnfile(String enfile) {
    this.enfile = enfile;
  }


  public Integer getDisp() {
    return disp;
  }

  public void setDisp(Integer disp) {
    this.disp = disp;
  }

  @Override
  public String toString() {
    return "GwnSummaryCase{" +
            "id=" + id +
            ", fname='" + fname + '\'' +
            ", fsex='" + fsex + '\'' +
            ", fage='" + fage + '\'' +
            ", fdept='" + fdept + '\'' +
            ", fdeb='" + fdeb + '\'' +
            ", fprn='" + fprn + '\'' +
            ", fsurvey='" + fsurvey + '\'' +
            ", fryqk='" + fryqk + '\'' +
            ", fryzd='" + fryzd + '\'' +
            ", fzljg='" + fzljg + '\'' +
            ", fcyzd='" + fcyzd + '\'' +
            ", fcyqk='" + fcyqk + '\'' +
            ", fcyyz='" + fcyyz + '\'' +
            ", status=" + status +
            ", status_name='" + status_name + '\'' +
            ", descr='" + descr + '\'' +
            ", errmessages='" + errmessages + '\'' +
            ", lrdata='" + lrdata + '\'' +
            ", gddata='" + gddata + '\'' +
            ", enfile='" + enfile + '\'' +
            ", disp=" + disp +
            ", user_id=" + user_id +
            ", frydata='" + frydata + '\'' +
            ", fcydata='" + fcydata + '\'' +
            ", fsumd='" + fsumd + '\'' +
            '}';
  }
}
