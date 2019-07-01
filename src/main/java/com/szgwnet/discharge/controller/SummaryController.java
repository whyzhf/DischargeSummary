package com.szgwnet.discharge.controller;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szgwnet.discharge.model.CountStatus;
import com.szgwnet.discharge.model.ExceptionEntity.Result;
import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.Org;
import com.szgwnet.discharge.model.SummaryCase;
import com.szgwnet.discharge.util.*;
//import com.szgwnet.discharge.util.PoiByWord;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/5/21
 * @Deacription:
 */
@RestController
@RequestMapping("/summary")
public class SummaryController {
    @Resource
    private com.szgwnet.discharge.service.SummaryService SummaryService;

/**
   * 所有科室
   * @author why
   * @date 2019/6/4
   * @param
   * @return com.szgwnet.discharge.model.ExceptionEntity.Result
   * @description  ${description}
 */
    @ResponseBody
    @RequestMapping("/getAllOrg")
    public Result getAllOrg(){
        List<Org> list = SummaryService.getAllOrgName();
        return ResultGenerator.genSuccessResult(list);
    }
    /**
     * 功能描述 :左侧菜单
     * @author why
     * @date 2019/3/12
     * @return java.util.Map<java.lang.String,java.lang.Object>
     * @description  ${description}
     */
    @RequestMapping("/getMenu")
    @ResponseBody
    public Result getMenu( Integer role_id, HttpServletRequest request, HttpServletResponse response) {

        return ResultGenerator.genSuccessResult(SummaryService.getSetMenu(role_id).get("data"));
    }


    /**
       * 病例清单（归档文案）
       * @author why
       * @date 2019/5/22
       * @param pageNum
         * @param pageSize
         * @param role_id
         * @param status
         * @param fdept
         * @param fsex
         * @param fage
         * @param lrdata
         * @param gddata
       * @return com.szgwnet.discharge.model.ExceptionEntity.Result
       * @description 请求参数：
                         * 	pageNum：第几页
                         * 	pageSize：每页几条
                         * 	role_id：角色id
                         * 	status:状态默认筛选值0； status是筛选值,status_name是对应中文
                         * 			主任角色可选筛选值：3：提交（未审核）5：已审核；6：报错
                         * 			医生角色可选筛选值：1:未翻译，2：已翻译，4：驳回
                         * 	fdept：科室 默认空字符串
                         * 	fsex：性别 默认空字符串
                         * 	fage：年龄 默认空字符串
                         * 	lrdata：录入日期 默认空字符串
                         * 	gddata：归档日期 默认空字符串
                         * 返回值：
                             * 	code：状态码 200为正常状态
                             * 	message：状态信息
                             * 	data：
                             * 	  total：总条数
                             * 	  list：需要显示的数据
                             * 	  pageNum：当前第几页
                             * 	  pageSize：每页条数
                             * 	  prePage：上一页页码
                             * 	  nextPage：下一页页码
                             * 	  navigatepageNums：页码数组
     */
    @ResponseBody
    @RequestMapping("/getAllSummaryCaseByStatus")
    public Result getAllSummaryCaseByStatus(@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum, Integer pageSize, String role_id,
                                            String status,String fdept,String fsex,String fage,String lrdata,String gddata,String flag){
        PageHelper.startPage(pageNum,pageSize);
        List<GwnSummaryCase> list =new ArrayList<>();
        StringBuffer wher=new StringBuffer();
        if (!GeneralUtils.isEmpty(fdept)&&!"0".equals(fdept)){

            wher.append(" and fdept like '").append(fdept).append("%' ");

        }
        if (!GeneralUtils.isEmpty(fsex)&&!"0".equals(fsex)){
            wher.append(" and fsex='").append("1".equals(fsex)?"男":"女").append("' ");
        }
        if (!GeneralUtils.isEmpty(fage)&&!"0".equals(fage)){
            wher.append(" and fage='").append(fage).append("' ");
        }
        if (!GeneralUtils.isEmpty(lrdata)&&!"0".equals(lrdata)){
            wher.append(" and lrdata like'").append(lrdata).append("%' ");
        }
        if (!GeneralUtils.isEmpty(gddata)&&!"0".equals(gddata)){
            wher.append(" and gddata like '").append(gddata).append("%' ");
        }
        if("1".equals(flag)){
            //病例清单
            if("0".equals(status)){
                //主任查看归档文案
               // status="3,5,6";
                status="5";
            }else if (!"5".equals(status)){
                return ResultGenerator.setCustomResult(4000,"状态筛选有误！只可筛选[已审核]");
            }else{}
            list = SummaryService.getAllSummaryCaseByStatus(status, wher.toString());
            list.forEach(e -> {
                e.setStatus_name("已审核");
            });
        }else{
            if ("0".equals(status)&&"3202".equals(role_id)) {
                status = "1,2,4";
                if ("3".equals(status)||"5".equals(status)||"6".equals(status)) {
                    return ResultGenerator.setCustomResult(4000, "状态筛选有误！只可筛选[全部][未翻译][翻译][驳回]");
                }
            }else if("0".equals(status)&&"3201".equals(role_id)){
                //主任病例清单
                status = "1,2,3,4,6";
                if ("1".equals(status)){
                    status = "1,2";
                }
            }else if ("1".equals(status)&&"3201".equals(role_id)){
                status = "1,2";
            }else{

            }
            //医师查看所有病例
            list = SummaryService.getAllSummaryCaseByStatus(status ,wher.toString());
            if("3202".equals(role_id)){
                list.forEach(e -> {
                    switch (e.getStatus()) {
                        case 1:
                            e.setStatus_name("未翻译");
                            break;
                        case 2:
                            e.setStatus_name("未提交");
                            break;
                        case 4:
                            e.setStatus_name("驳回");
                            break;


                    }
                });
            }else {
                list.forEach(e -> {
                    switch (e.getStatus()) {
                        case 1:
                            e.setStatus_name("未翻译");
                            break;
                        case 2:
                            e.setStatus_name("未翻译");
                            break;
                        case 3:
                            e.setStatus_name("未审核");
                            break;
                        case 4:
                            e.setStatus_name("驳回");
                            break;
                        case 6:
                            e.setStatus_name("报错");
                            break;

                    }
                });
            }
        }

        PageInfo<GwnSummaryCase> pageInfo = new PageInfo<GwnSummaryCase>(list);
        return ResultGenerator.genSuccessResult(pageInfo);
    }
    /**
       * 根据id删除SummaryCase
       * @author why
       * @date 2019/5/22
       * @param id
       * @return com.szgwnet.discharge.model.ExceptionEntity.Result
       * @description  多个id用，连接 1,2,3
     */
    @ResponseBody
    @RequestMapping("/delSummaryCaseById")
    public Result getAllSummaryCaseByStatus(String id){
        boolean flag = SummaryService.delSummaryCaseById(id);
        if(flag){
            return ResultGenerator.setCustomResult(200,"删除成功");
        }else{
            return ResultGenerator.setCustomResult(4000,"删除失败");
        }

    }
    /**
     * 新增SummaryCase保存
     * @author why
     * @date 2019/5/22

     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description  多个id用，连接 1,2,3
     */
    @ResponseBody
    @RequestMapping("/addChSummaryCase")
    public Result addChSummaryCase(@RequestBody GwnSummaryCase SummaryCase){
        Map<String,String> map=new HashMap<>();
        int ind=0;
        if(!GeneralUtils.isNull(SummaryCase.getId())){
            ind=SummaryCase.getId();
           SummaryService.updataChSummaryCase(SummaryCase);
        }else {
            ind = SummaryService.addChSummaryCase(SummaryCase);
        }
        boolean flag = ind>0?true:false;
        if(flag){
            map.put("id",ind+"");
            SummaryService.updataChSummaryCaseStatus(-1,ind);
            return ResultGenerator.setCustomResult(200,"新增成功",map);
        }else{
            return ResultGenerator.setCustomResult(4000,"新增失败");
        }

    }
    /**
     * 新增SummaryCase提交
     * @author why
     * @date 2019/5/22

     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description  多个id用，连接 1,2,3
     */
    @ResponseBody
    @RequestMapping("/saveChSummaryCase")
    public Result saveChSummaryCase(@RequestBody GwnSummaryCase SummaryCase){
        boolean flag =false;
        int ind=0;
        if (GeneralUtils.isNull(SummaryCase.getId())){
            SummaryCase.setLrdata((LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))+"");
            ind= SummaryService.addChSummaryCase(SummaryCase);
            flag=ind>0?true:false;
        }else{
            ind=SummaryCase.getId();
            flag =SummaryService.updataChSummaryCase(SummaryCase);
        }
        if(flag){
            SummaryService.updataChSummaryCaseUSER_ID(1,ind);
            return ResultGenerator.setCustomResult(200,"提交成功");
        }else{
            return ResultGenerator.setCustomResult(4000,"提交失败");
        }

    }
    /**
     * 根据id查看SummaryCase是否有人在编辑
     * @author why
     * @date 2019/5/22
     * @param id
     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description  多个id用，连接 1,2,3
     */
    @ResponseBody
    @RequestMapping("/checkSummaryCaseStatus")
    public Result checkSummaryCaseStatus(Integer id,String user_id){
        Integer user = SummaryService.checkSummaryCaseStatus(id);
        // 空则返回true,非空则flase
        if (GeneralUtils.isNull(user)||user_id.equals(user+"")){
            return ResultGenerator.setCustomResult(200,"可以查看");
        }else{
            return ResultGenerator.setCustomResult(4000,"有其他用户正在编辑");
        }
    }
    /**
     * 根据user_id查看SummaryCase是否有人在编辑
     * @author why
     * @date 2019/5/22

     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description
     */
    @ResponseBody
    @RequestMapping("/getSummaryCaseByUserid")
    public Result getSummaryCaseByUserid(String user_id){
        List<GwnSummaryCase> list =new ArrayList<>();
        list= SummaryService.getSummaryCaseByUserid(user_id);
        // 空则返回true,非空则flase
        if (null!=list&&!list.isEmpty()){
            return ResultGenerator.setCustomResult(4000,"您有未提交的文档，是否提交后再开始添加新的文档",list);
        }else{
            return ResultGenerator.setCustomResult(200,"无未完成文档");
        }
    }

    /**
       * 根据id获取中英文病例
       * @author why
       * @date 2019/5/23
       * @param id
       * @return com.szgwnet.discharge.model.ExceptionEntity.Result
       * @description  ${description}
     */

    @ResponseBody
    @RequestMapping("/getSummaryCaseById")
    public Result getSummaryCaseById(Integer id){
        return ResultGenerator.genSuccessResult(SummaryService.getSummaryCaseById(id));
    }

    /**
     * 提交报错信息
     * @author why
     * @date 2019/5/22
     * @param id
     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description
     */
    @ResponseBody
    @RequestMapping("/upSummaryCaseError")
    public Result upSummaryCaseError(Integer id,String errMessages){
        boolean flag = SummaryService.upSummaryCaseError(id, errMessages);
        SummaryService.updataChSummaryCaseStatus(6,id);

        // 空则返回true,非空则flase
        if(flag){
            return ResultGenerator.setCustomResult(200,"已提交报错信息");
        }else{
            return ResultGenerator.setCustomResult(4000,"报错信息提交失败");
        }
    }

    /**
     * 提交驳回信息
     * @author why
     * @date 2019/5/22
     * @param id
     * @return com.szgwnet.discharge.model.ExceptionEntity.Result
     * @description
     */
    @ResponseBody
    @RequestMapping("/returnSummaryCase")
    public Result returnSummaryCase(Integer id,String descr){
        boolean flag = SummaryService.returnSummaryCase(id, descr);
        SummaryService.updataChSummaryCaseStatus(4,id);

        // 空则返回true,非空则flase
        if(flag){
            return ResultGenerator.setCustomResult(200,"已提交驳回信息");
        }else{
            return ResultGenerator.setCustomResult(4000,"驳回信息提交失败");
        }
    }
    /**
       * 修改英文病例
       * @author why
       * @date 2019/5/24
       * @return
       * @description  ${description}
     */
    @ResponseBody
    @RequestMapping("/updataEnSummaryCase")
    public Result updataEnSummaryCase(@RequestBody SummaryCase SummaryCase){
        boolean flag = SummaryService.updataEnSummaryCase(SummaryCase);
        SummaryService.updataChSummaryCaseStatus(2,SummaryCase.getId());
        // 空则返回true,非空则flase
        if(flag){
            return ResultGenerator.setCustomResult(200,"修改成功");
        }else{
            return ResultGenerator.setCustomResult(4000,"修改失败");
        }
    }
    /**
     * 提交英文病例
     * @author why
     * @date 2019/5/24
     * @return
     * @description  ${description}
     */
    @ResponseBody
    @RequestMapping("/commitEnSummaryCase")
    public Result commitEnSummaryCase(@RequestBody SummaryCase SummaryCase){
        boolean flag = SummaryService.updataEnSummaryCase(SummaryCase);
        SummaryService.updataChSummaryCaseStatus(3,SummaryCase.getId());
        // 空则返回true,非空则flase
        if(flag){
            return ResultGenerator.setCustomResult(200,"提交成功");
        }else{
            return ResultGenerator.setCustomResult(4000,"提交失败");
        }
    }

    /**
     * 通过英文病例
     * @author why
     * @date 2019/5/24
     * @return
     * @description  ${description}
     */
    @ResponseBody
    @RequestMapping("/passEnSummaryCase")
    public Result passEnSummaryCase(@RequestBody SummaryCase SummaryCase){
        String time=(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))+"";
        SummaryCase.setGddata(time);
        boolean flag = SummaryService.updataEnSummaryCase(SummaryCase);
        boolean flag2 = SummaryService.addSummaryCaseGDDATA(SummaryCase.getId(),time);
        SummaryService.updataChSummaryCaseStatus(5,SummaryCase.getId());
        // 空则返回true,非空则flase
        if(flag){
            return ResultGenerator.setCustomResult(200,"提交成功");
        }else{
            return ResultGenerator.setCustomResult(4000,"提交失败");
        }
    }


    /**
       * word导出
       * @author why
       * @date 2019/6/4
       * @param request
     * @param response
       * @return void
       * @description  ${description}
     */
    @RequestMapping("wordExport")
    public void chExport(String ids,HttpServletRequest request, HttpServletResponse response){
        //word 临时路劲
        String wordPath= FileUtils.getPath(FileUtils.WORD_PATH);
        String zipPath=FileUtils.getPath(FileUtils.ZIP_PATH);
        //调用的模板
        String chtemplPath= FileUtils.CHTEMPLATEPATH;
        String entemplPath= FileUtils.ENTEMPLATEPATH;
        ids=ids.endsWith(",")?ids.substring(0,ids.length()-1):ids;
        Map<String,Object> param=null;
        String wordName="";
        List<GwnSummaryCase> chlist=SummaryService.getChSummaryCaseByIds(ids);
        List<GwnSummaryCase> enlist=SummaryService.getEnSummaryCaseByIds(ids);
        if (null!=chlist&&!chlist.isEmpty()){
            //批量导出中文
            for (int i = 0; i <chlist.size() ; i++) {
                param=new HashMap<>();
                param= BeanMap.create(chlist.get(i));
                wordName=param.get("fname").toString().replaceAll(" ","")+"_";
                WordUtils.saveWord(param,chtemplPath,wordPath,wordName);
            }
            //批量导出英文
            for (int i = 0; i <enlist.size() ; i++) {
                param=new HashMap<>();
                param= BeanMap.create(enlist.get(i));
                wordName=param.get("fname").toString().replaceAll(" ","")+"_";
                WordUtils.saveWord(param,entemplPath,wordPath,wordName);
            }
            ZipUtils.saveZip(wordPath,zipPath,"DischargSummary",request,response);
        }else{
             ResultGenerator.setCustomResult(4000,"未查询到该病例");
        }
    }
       /**
       * pdf导出
       * @author why
       * @date 2019/6/4
       * @return void
       * @description  ${description}
       */
    @RequestMapping("pdfExport")
    public void enExport(String ids,HttpServletRequest request, HttpServletResponse response){
        //word 临时路劲
        String pdfPath= FileUtils.getPath(FileUtils.PDF_PATH);
        String zipPath=FileUtils.getPath(FileUtils.ZIP_PATH);
        //调用的模板
        String chtemplPath= FileUtils.PDFCHTEMPLATEPATH;
        String entemplPath= FileUtils.PDFENTEMPLATEPATH;
        ids=ids.endsWith(",")?ids.substring(0,ids.length()-1):ids;
        Map<String,Object> param=null;
        Map<String,Object> paramsub=null;
        String pdfName="";
        List<GwnSummaryCase> chlist=SummaryService.getChSummaryCaseByIds(ids);
        List<GwnSummaryCase> enlist=SummaryService.getEnSummaryCaseByIds(ids);
        if (null!=chlist&&!chlist.isEmpty()) {
            //批量导出zip
            param = new HashMap<>();
            for (int i = 0; i < chlist.size(); i++) {
                paramsub = BeanMap.create(chlist.get(i));
                paramsub.put("fsurvey","患者 "+paramsub.get("fname")+"，性别 "+paramsub.get("fsex")+"，年龄"+paramsub.get("fage")+"，因“"+paramsub.get("fsurvey")+"” 于"+paramsub.get("frydata")+"入院，" +
                        "于"+paramsub.get("fcydata")+"出院，共住院"+paramsub.get("fsumd")+"天。");
                param.put("datemap",paramsub);
                pdfName=paramsub.get("fname").toString().replaceAll(" ","")+"_";
                PdfUtils.savePDF(param,chtemplPath,pdfPath,pdfName);
            }
            for (int i = 0; i < enlist.size(); i++) {
                paramsub = BeanMap.create(enlist.get(i));
                paramsub.put("fsurvey","Patient: "+paramsub.get("fname")+"， "+paramsub.get("fsex")+"，"
                        +paramsub.get("fage")+"，due to “"+paramsub.get("fsurvey")+"”,admitted to hospital "
                        +"at \n "+paramsub.get("frydata")+"，" +"discharged at "+paramsub.get("fcydata")
                        +",hospitalized for "+paramsub.get("fsumd")+" days。");
                param.put("datemap",paramsub);
                pdfName=paramsub.get("fname").toString().replaceAll(" ","")+"_";
                PdfUtils.savePDF(param,entemplPath,pdfPath,pdfName);
            }
            ZipUtils.saveZip(pdfPath, zipPath, "DischargSummary", request, response);
        }else{
            ResultGenerator.setCustomResult(4000,"未查询到该病例");
        }
    }

    @RequestMapping("checkPwd")
    public Result checkPwd(Integer user_id,String password){
        if(SummaryService.checkPwd(user_id,password)){
           return ResultGenerator.setCustomResult(200,"可以修改密码");
        }else{
            return  ResultGenerator.setCustomResult(4000,"旧密码输入错误");
        }
    }
    @RequestMapping("updatePwd")
    public Result updatePwd(Integer user_id,String password){
        if(SummaryService.updatePwd(user_id,password)){
            return ResultGenerator.setCustomResult(200,"修改成功");
        }else{
            return  ResultGenerator.setCustomResult(4000,"修改失败");
        }
    }
    @RequestMapping("CountStatus")
    public  List<CountStatus> CountStatus(){
        System.out.println("11111");
        return SummaryService.CountStatus();
    }

}
