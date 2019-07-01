package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.*;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/5/21
 * @Deacription:
 */
public interface SummaryDao {
    @Select("select id,name from GWN_PUB_ORG")
    List<Org> getAllOrg();
    @Select("select id,name from GWN_PUB_ORG where type=1 ")
    List<Org> getAllOrgName();
    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,USER_ID,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_CASE where STATUS in(${status}) ${wher} order by id DESC")
    List<GwnSummaryCase> getAllSummaryCaseByStatus(@Param("status") String status,@Param("wher") String wher);

    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,USER_ID,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_CASE where user_id =${user_id} and STATUS=-1  order by id DESC limit 1")
    List<GwnSummaryCase> getSummaryCaseByUserid(@Param("user_id") String user_id);
    @Delete("delete  FROM GWN_SUMMARY_CASE where id in(${id})")
    boolean delSummaryCaseById(@Param("id") String id);
    @Select("select USER_ID FROM GWN_SUMMARY_CASE where id =#{id}")
    Integer checkSummaryCaseStatus(@Param("id") Integer id);
    @Update("UPDATE GWN_SUMMARY_CASE  SET  ERRMESSAGES=#{errMessages}  ,  STATUS=6 WHERE ID=#{id}")
    boolean upSummaryCaseError(@Param("id") Integer id,@Param("errMessages") String errMessages);
    @Update("UPDATE GWN_SUMMARY_CASE  SET  DESCR=#{descr}  ,  STATUS=4 WHERE ID=#{id}")
    boolean returnSummaryCase(@Param("id") Integer id,@Param("descr") String descr);
    @Update("UPDATE GWN_SUMMARY_CASE  SET  GDDATA=#{time}  WHERE ID=#{id}")
    boolean addSummaryCaseGDDATA(@Param("id") Integer id,@Param("time") String time);

    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,USER_ID,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_CASE where ID=#{id}")
    GwnSummaryCase getChSummaryCaseById(@Param("id") Integer id);
    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_ENCASE where ID=#{id}")
    GwnSummaryCase getEnSummaryCaseById(@Param("id") Integer id);

    @Select("SELECT  ENNAME FROM GWN_SUMMARY_DICTIONARY WHERE NAME like '${name}%' LIMIT 1")
    String getEnNameByName(@Param("name") String name);

    @Insert("INSERT INTO GWN_SUMMARY_ENCASE" +
            " (ID, FNAME, FSEX, FAGE, FDEPT, FDEB, FPRN, FSURVEY, FRYQK, FRYZD, FZLJG, FCYZD, FCYQK, FCYYZ, STATUS, DESCR, ERRMESSAGES, LRDATA, GDDATA, ENFILE, DISP,FRYDATA,FCYDATA,FSUMD)" +
            " VALUES (#{GwnSummaryCase.id},#{GwnSummaryCase.fname} ,#{GwnSummaryCase.fsex} ,#{GwnSummaryCase.fage} ,#{GwnSummaryCase.fdept} ,#{GwnSummaryCase.fdeb} ,#{GwnSummaryCase.fprn} ," +
            "#{GwnSummaryCase.fsurvey} ,#{GwnSummaryCase.fryqk} ,#{GwnSummaryCase.fryzd} ,#{GwnSummaryCase.fzljg} ,#{GwnSummaryCase.fcyzd} ,#{GwnSummaryCase.fcyqk} ,#{GwnSummaryCase.fcyyz} ," +
            "#{GwnSummaryCase.status} ,#{GwnSummaryCase.descr} ,#{GwnSummaryCase.errmessages} ,#{GwnSummaryCase.lrdata} ,#{GwnSummaryCase.gddata} ,#{GwnSummaryCase.enfile} ,#{GwnSummaryCase.disp}," +
            "#{GwnSummaryCase.frydata} ,#{GwnSummaryCase.fcydata} ,#{GwnSummaryCase.fsumd} )")
    boolean addEnSummaryCase(@Param("GwnSummaryCase") GwnSummaryCase GwnSummaryCase);

    @Insert("INSERT INTO GWN_SUMMARY_CASE" +
            " ( FNAME, FSEX, FAGE, FDEPT, FDEB, FPRN, FSURVEY, FRYQK, FRYZD, FZLJG, FCYZD, FCYQK, FCYYZ, STATUS, DESCR, ERRMESSAGES, LRDATA, GDDATA, ENFILE, DISP,FRYDATA,FCYDATA,FSUMD,USER_ID)" +
            " VALUES (#{GwnSummaryCase.fname} ,#{GwnSummaryCase.fsex} ,#{GwnSummaryCase.fage} ,#{GwnSummaryCase.fdept} ,#{GwnSummaryCase.fdeb} ,#{GwnSummaryCase.fprn} ," +
            "#{GwnSummaryCase.fsurvey} ,#{GwnSummaryCase.fryqk} ,#{GwnSummaryCase.fryzd} ,#{GwnSummaryCase.fzljg} ,#{GwnSummaryCase.fcyzd} ,#{GwnSummaryCase.fcyqk} ,#{GwnSummaryCase.fcyyz} ,#{GwnSummaryCase.status} ," +
            "#{GwnSummaryCase.descr} ,#{GwnSummaryCase.errmessages} ,#{GwnSummaryCase.lrdata} ,#{GwnSummaryCase.gddata} ,#{GwnSummaryCase.enfile} ,#{GwnSummaryCase.disp},#{GwnSummaryCase.frydata} ,#{GwnSummaryCase.fcydata} ,#{GwnSummaryCase.fsumd} ,#{GwnSummaryCase.user_id} )")
    @Options(useGeneratedKeys = true, keyProperty = "GwnSummaryCase.id", keyColumn = "ID")
    int addChSummaryCase(@Param("GwnSummaryCase") GwnSummaryCase GwnSummaryCase);


    @UpdateProvider(type = AppProvider.class, method = "updataEnSummaryCase")
    boolean updataEnSummaryCase(@Param("SummaryCase")SummaryCase SummaryCase);
    @UpdateProvider(type = AppProvider.class, method = "updataChSummaryCase")
    boolean updataChSummaryCase(@Param("GwnSummaryCase")GwnSummaryCase SummaryCase);

    @Select("select " +
            "   M.ID, APP_ID as APPID, MENU_TYPE_ID as MENUTYPEID, M.NAME , M.DESCR, URL, SYS_PARAM as SYSPARAM, M.PAR_ID as PARID, REMARKS,M.DIS_ORDER as DISORDER, IMG_URL as IMGURL, BG_COLOR as BGCOLOR, IFDIM, TYPE " +
            " from GWN_PUB_MENU M LEFT JOIN GWN_PUB_ROLE_MENU_REL R  on M.ID=R.MENU_ID where R.ROLE_ID=#{role_id} order by M.ID")
    List<GwnPubMenu> getSetMenu(@Param("role_id") Integer role_id);

    @Update("UPDATE GWN_SUMMARY_CASE SET STATUS = #{status}  where ID=#{id} " )
    boolean updataChSummaryCaseStatus(@Param("status")Integer status,@Param("id")Integer id);
    @Update("UPDATE GWN_SUMMARY_CASE SET STATUS = #{status} ,USER_ID=null where ID=#{id} " )
    boolean updataChSummaryCaseUSER_ID(@Param("status")Integer status,@Param("id")Integer id);


    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_CASE where ID in (${id})")
    List<GwnSummaryCase> getChSummaryCaseByIds(@Param("id") String id);
    @Select("select ID,FNAME,FSEX,FAGE,FDEPT,FDEB,FPRN,FSURVEY,FRYQK,FRYZD,FZLJG,FCYZD,FCYQK,FCYYZ,STATUS,DESCR,ERRMESSAGES,LRDATA,GDDATA,ENFILE,DISP,FRYDATA,FCYDATA,FSUMD FROM GWN_SUMMARY_ENCASE where ID in (${id})")
    List<GwnSummaryCase> getEnSummaryCaseByIds(@Param("id") String id);

    @Select("SELECT  PWD FROM GWN_PUB_USER WHERE ID=#{user_id} ")
    String getPwdById(@Param("user_id") Integer user_id);

    @Update("Update  GWN_PUB_USER SET PWD=#{password} WHERE ID=#{user_id} ")
    boolean updatePwd(@Param("user_id") Integer user_id,@Param("password")String password);

    @Select("select STATUS as status, COUNT(ID) as Count from GWN_SUMMARY_CASE GROUP by STATUS")
    List<CountStatus> getCountStatus();

}
