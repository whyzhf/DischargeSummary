package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.DischargeApplication;
import com.szgwnet.discharge.model.CountStatus;
import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.SummaryCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * @Auther: why
 * @Data:2019/5/24
 * @Deacription:
 */
@SpringBootTest(classes = DischargeApplication.class)
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
public class SummaryDaoTest {
    @Resource
    private SummaryDao SummaryDao;
    @Test
    public void updataEnSummaryCase() {
      /*  SummaryCase sc=new SummaryCase();
        sc.setId(1);
        sc.setFname("qwe");
        sc.setStatus(2);

        SummaryDao.updataEnSummaryCase(sc);*/
/*
        String list=SummaryDao.getPwdById(10);

        System.out.println(list);*/

        List<GwnSummaryCase> list=SummaryDao.getChSummaryCaseByIds("84");

        System.out.println(list.size());
    }
}