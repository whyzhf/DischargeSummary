package com.szgwnet.discharge.controller;

import com.szgwnet.discharge.model.ExceptionEntity.Result;
import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.SummaryCase;
import com.szgwnet.discharge.util.CaseUtil;
import com.szgwnet.discharge.util.TestDom4j;
import com.szgwnet.discharge.util.WebService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/7/1
 * @Deacription:
 */
@RestController
public class WebServiceController {
    @Resource
    private com.szgwnet.discharge.service.SummaryService SummaryService;

    @ResponseBody
    @RequestMapping("/summary/upCaseFile")
    public Result  getWsCase(){
        GwnSummaryCase sc= CaseUtil.getWsCase();
        if (sc==null){
            return  ResultGenerator.setCustomResult(4000,"获取失败");
        }
        int ind=SummaryService.addChSummaryCase(sc);
        SummaryService.updataChSummaryCaseStatus(1,ind);
        Map<String,String> map=new HashMap<>();
        map.put("id",ind+"");
        return ResultGenerator.setCustomResult(200,"获取成功",map) ;
    }
}
