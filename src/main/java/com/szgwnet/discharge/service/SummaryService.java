package com.szgwnet.discharge.service;

import com.szgwnet.discharge.model.CountStatus;
import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.Org;
import com.szgwnet.discharge.model.SummaryCase;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/5/21
 * @Deacription:
 */
public interface SummaryService {
    List<Org> getAllOrg();
    List<Org> getAllOrgName();
    List<GwnSummaryCase> getAllSummaryCaseByStatus(String status,String wher);
    List<GwnSummaryCase> getSummaryCaseByUserid( String user_id);
    boolean delSummaryCaseById( String id);

    Integer checkSummaryCaseStatus(Integer id);

    boolean upSummaryCaseError(Integer id, String errMessages);
    boolean returnSummaryCase(Integer id, String descr);
    GwnSummaryCase getChSummaryCaseById( Integer id);

    GwnSummaryCase getEnSummaryCaseById( Integer id);

    Map<String,GwnSummaryCase> getSummaryCaseById(Integer id);

    int addChSummaryCase( GwnSummaryCase GwnSummaryCase);
    boolean  addSummaryCaseGDDATA(Integer id,String time);
    boolean updataEnSummaryCase(SummaryCase SummaryCase);
    boolean updataChSummaryCase(GwnSummaryCase SummaryCase);
    Map<String, Object> getSetMenu(Integer role_id);
    boolean updataChSummaryCaseStatus(Integer status,Integer id);
    boolean updataChSummaryCaseUSER_ID(Integer status,Integer id);

    boolean getWebSocketFlag();
    List<GwnSummaryCase> getChSummaryCaseByIds( String id);

    List<GwnSummaryCase> getEnSummaryCaseByIds( String id);

    boolean checkPwd(Integer user_id,String password);

    boolean updatePwd(Integer user_id,String password);

    List<CountStatus> CountStatus();
}
