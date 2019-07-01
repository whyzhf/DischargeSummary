package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.SummaryCase;
import com.szgwnet.discharge.util.GeneralUtils;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/5/24
 * @Deacription:
 */
public class AppProvider extends SQL {
       private static final String GWN_SUMMARY_ENCASE = "GWN_SUMMARY_ENCASE";
       private static final String GWN_SUMMARY_ChCASE = "GWN_SUMMARY_CASE";
       private static Map<String,String> columMap = null;
       private static void init(){
           columMap = new HashMap<>();
           columMap.put("id","id");
           columMap.put("fname","fname");
           columMap.put("fsex","fsex");
           columMap.put("fage","fage");
           columMap.put("fdept","fdept");
           columMap.put("fdeb","fdeb");
           columMap.put("fprn","fprn");
           columMap.put("fsurvey","fsurvey");
           columMap.put("fryqk","fryqk");
           columMap.put("fryzd","fryzd");
           columMap.put("fzljg","fzljg");
           columMap.put("fcyzd","fcyzd");
           columMap.put("fcyqk","fcyqk");
           columMap.put("fcyyz","fcyyz");
           columMap.put("status","status");
           columMap.put("descr","descr");
           columMap.put("errmessages","errmessages");
           columMap.put("lrdata","lrdata");
           columMap.put("gddata","gddata");
           columMap.put("enfile","enfile");
           columMap.put("disp","disp");
           columMap.put("user_id","user_id");
           columMap.put("frydata","frydata");
           columMap.put("fcydata","fcydata");
           columMap.put("fsumd","fsumd");

       }

       public  String updataEnSummaryCase(@Param("SummaryCase")SummaryCase SummaryCase){
            String sql=new SQL(){
                     {
                            UPDATE(GWN_SUMMARY_ENCASE);
                            SET(" LRDATA= '"+(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd HH:mm:ss")))+"'");
                            BeanMap.create(SummaryCase).forEach((K,V)->{
                                   if (!GeneralUtils.isNull(V)){
                                         SET(K+" = #{SummaryCase."+K+"}");
                                   }
                            });
                           WHERE("id=#{SummaryCase.id}");
                            // WHERE("id=#{GwnSummaryCase.id,javaType=Long,jdbcType=INT}}");
                     }
              }.toString();

           return sql;
       }


    public  String updataChSummaryCase(@Param("GwnSummaryCase")GwnSummaryCase GwnSummaryCase){
        init();
        return new SQL(){
            {
                UPDATE(GWN_SUMMARY_ChCASE);
                SET(" LRDATA= '"+(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))+"'");
                BeanMap.create(GwnSummaryCase).forEach((K,V)->{
                    if (!GeneralUtils.isNull(V)&&!GeneralUtils.isNull(columMap.get(K))){
                        SET(K+" = #{GwnSummaryCase."+K+"}");
                    }
                });
                WHERE("id=#{GwnSummaryCase.id}");
                // WHERE("id=#{GwnSummaryCase.id,javaType=Long,jdbcType=INT}}");
            }
        }.toString();

    }

}
