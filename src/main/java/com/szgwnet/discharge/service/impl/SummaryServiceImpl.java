package com.szgwnet.discharge.service.impl;

import com.szgwnet.discharge.controller.WebSocketController;
import com.szgwnet.discharge.model.*;
import com.szgwnet.discharge.dao.SummaryDao;
import com.szgwnet.discharge.service.SummaryService;
import com.szgwnet.discharge.util.GeneralUtils;
import com.szgwnet.discharge.util.MD5Util;
import com.szgwnet.discharge.util.SpellHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.websocket.Session;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

/**
 * @Auther: why
 * @Data:2019/5/21
 * @Deacription:
 */
@Service
public class SummaryServiceImpl implements SummaryService {
    @Resource
    private SummaryDao SummaryDao;
    @Autowired
    private  WebSocketController  ws;

    @Override
    public List<Org> getAllOrg() {
        return SummaryDao.getAllOrg();
    }
    @Override
    public List<Org> getAllOrgName() {
        return SummaryDao.getAllOrgName();
    }
    @Override
    public List<GwnSummaryCase> getSummaryCaseByUserid( String user_id) {
        return SummaryDao.getSummaryCaseByUserid(user_id);
    }
    @Override
    public List<GwnSummaryCase> getAllSummaryCaseByStatus(String status,String wher) {
        return SummaryDao.getAllSummaryCaseByStatus(status,wher);
    }
    @Override
    public boolean delSummaryCaseById(String id) {
        return SummaryDao.delSummaryCaseById(id);
    }

    @Override
    public Integer checkSummaryCaseStatus(Integer id) {
        return SummaryDao.checkSummaryCaseStatus(id);
    }

    @Override
    public boolean upSummaryCaseError(Integer id, String errMessages) {
        return SummaryDao.upSummaryCaseError(id,errMessages);
    }
    @Override
    public boolean returnSummaryCase(Integer id, String descr) {
        return SummaryDao.returnSummaryCase(id, descr);
    }
    @Override
    public GwnSummaryCase getChSummaryCaseById(Integer id) {
        return SummaryDao.getChSummaryCaseById(id);
    }

    @Override
    public GwnSummaryCase getEnSummaryCaseById(Integer id) {

        return SummaryDao.getEnSummaryCaseById(id);
    }

    @Override
    public Map<String, GwnSummaryCase> getSummaryCaseById(Integer id) {
        Map<String,GwnSummaryCase> resMap=new HashMap<>();
        GwnSummaryCase summaryCase=SummaryDao.getChSummaryCaseById(id);
        resMap.put("china",summaryCase);
        //初始化结构化翻译
        if (1==summaryCase.getStatus()&&GeneralUtils.isNull(SummaryDao.getEnSummaryCaseById(id))){

            GwnSummaryCase sc=new GwnSummaryCase();

            sc.setId(id);
            if (!GeneralUtils.isEmpty(summaryCase.getFname())) {
                //姓名
                sc.setFname(SpellHelper.getUpEname(summaryCase.getFname()));
            }

            if (!GeneralUtils.isEmpty(summaryCase.getFsex())){
                //性别
                sc.setFsex(summaryCase.getFsex().contains("男")?"Male":"Female");
            }
            //年龄
            if (!GeneralUtils.isEmpty(summaryCase.getFsex())){
                //性别
                String age=summaryCase.getFage();
                age=age.replace("年","year");
                age=age.replace("月","months ");
                age=age.replace("天","days ");
                sc.setFage(age);

            }
            sc.setFage(summaryCase.getFage());

            if (!GeneralUtils.isEmpty(summaryCase.getFdept())){
                //科室
                sc.setFdept(SummaryDao.getEnNameByName(summaryCase.getFdept()));
            }

            //床号
            sc.setFdeb(summaryCase.getFdeb());
            //病案号
            sc.setFprn(summaryCase.getFprn());
            sc.setLrdata(summaryCase.getLrdata());
            sc.setFcydata(summaryCase.getFcydata());
            sc.setFrydata(summaryCase.getFrydata());
            sc.setFsumd(summaryCase.getFsumd());
            resMap.put("English",sc);
            new Thread(() -> {
                //添加英文数据
                SummaryDao.addEnSummaryCase(sc);
            }).start();
            resMap.put("english",sc);
        }else{
            resMap.put("english",SummaryDao.getEnSummaryCaseById(id));
        }
        return resMap;
    }

    @Override
    public int addChSummaryCase(GwnSummaryCase gwnSummaryCase) {
        SummaryDao.addChSummaryCase(gwnSummaryCase);
        return gwnSummaryCase.getId();
    }
    @Override
    public boolean  addSummaryCaseGDDATA(Integer id,String time){
        return SummaryDao.addSummaryCaseGDDATA(id, time);
    }
    @Override
    public boolean updataEnSummaryCase(SummaryCase SummaryCase) {

        return SummaryDao.updataEnSummaryCase(SummaryCase);
    }
    @Override
    public boolean updataChSummaryCase(GwnSummaryCase SummaryCase) {

        return SummaryDao.updataChSummaryCase(SummaryCase);
    }
    @Override
    public Map<String, Object> getSetMenu(Integer role_id) {
        Map<String, Object> resmap=new HashMap<>();
        Map<Integer, GwnPubMenu> map=new HashMap<>();
        List<GwnPubMenu> treelist= new ArrayList<>();
        List<GwnPubMenu>list= SummaryDao.getSetMenu(role_id);
        if (null==list||list.isEmpty()){
            GwnPubMenu menu=new GwnPubMenu();
            menu.setId(0);
            menu.setParId(-2);
            menu.setName("该用户暂无系统设置权限");
            menu.setUrl("");
            menu.setSysParam("fa-circle");
            treelist.add(menu);
            resmap.put("data",treelist);
            return resmap;
        }
        map = list.stream().collect(Collectors.toMap(GwnPubMenu::getId, a -> a,(k1, k2)->k1));

        // 将list集合对象转换为json的字符串
        // 如果id是父级的话就放入tree中treelist

        for (GwnPubMenu menu : list) {
            // System.out.println("res::::::"+map.get(menu.getPar_id()));
            if (null==map.get(menu.getParId())) {
                treelist.add(menu);
            } else {
                // 子级通过父id获取到父级的类型
                GwnPubMenu parent = map.get(menu.getParId());
                // 父级获得子级，再将子级放到对应的父级中
                parent.addChildren(menu);
            }
        }
        resmap.put("data",treelist);
        return resmap;
    }
    @Override
    public boolean getWebSocketFlag() {
        return true;
    }
    //修改状态
    @Override
    public boolean updataChSummaryCaseStatus(Integer status,Integer id){
        boolean flag= SummaryDao.updataChSummaryCaseStatus(status,id);

      //  WebSocketController  ws=new WebSocketController();

        new Thread(() -> {
            if(status==1||status==2||status==6){
                ws.sendMessage("3202");
            }else{
                ws.sendMessage("3201");
            }

        }).start();
        return flag;
      //  return SummaryDao.updataChSummaryCaseStatus(status,id);
    }

    //修改状态
    @Override
    public boolean updataChSummaryCaseUSER_ID(Integer status,Integer id){
       boolean flag= SummaryDao.updataChSummaryCaseUSER_ID(status,id);
       new Thread(() -> {
           if(status==1||status==2||status==6){
               ws.sendMessage("3202");
           }else{
               ws.sendMessage("3201");
           }
        }).start();
        return flag;
    }

    @Override
    public List<GwnSummaryCase> getChSummaryCaseByIds(String id) {
        return SummaryDao.getChSummaryCaseByIds(id);
    }

    @Override
    public List<GwnSummaryCase> getEnSummaryCaseByIds(String id) {
        return SummaryDao.getEnSummaryCaseByIds(id);
    }


    @Override
    public boolean checkPwd(Integer user_id,String password){
        password=password==null?"":password;
        String pwd= SummaryDao.getPwdById(user_id);
        return MD5Util.MD5(password).equals(pwd)?true:false;
    }
    @Override
    public   boolean updatePwd(Integer user_id,String password){
        return SummaryDao.updatePwd(user_id,MD5Util.MD5(password));
    }
    @Override
    public  List<CountStatus> CountStatus(){

        return SummaryDao.getCountStatus();
    }


}
