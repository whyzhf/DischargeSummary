package com.szgwnet.discharge.model;

/**
 * @Auther: why
 * @Data:2019/5/24
 * @Deacription:
 */
public class SummaryCase {
    private Integer id;
    private String fname;
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
    private String errmessages;
    private String lrdata;
    private String gddata;
    private String frydata;
    private String fcydata;
    private String fsumd;

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

    @Override
    public String toString() {
        return "SummaryCase{" +
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
                ", errmessages='" + errmessages + '\'' +
                ", lrdata='" + lrdata + '\'' +
                ", gddata='" + gddata + '\'' +
                '}';
    }

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
}
