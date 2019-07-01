package com.szgwnet.discharge.util;

import com.szgwnet.discharge.model.ExceptionEntity.Result;
import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.SummaryCase;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.util.regex.Pattern.*;

/**
 * @Auther: why
 * @Data:2019/6/27
 * @Deacription:
 */
public class CaseUtil {

    public static String  summarycase(){

        return "";
    }
    public static String getCase(String xmlStr){
      //  xmlStr=summarycase();
        int start=xmlStr.indexOf("出院证明");

        String temp=xmlStr.substring(start);
        //System.out.println(temp);
        int start2=temp.indexOf("出院证明");
        int end2=temp.indexOf("出院记录");
        String temp2=temp.substring(start2,end2);
       int start3=temp2.indexOf("body");
        int end3=temp2.indexOf("/body");
        String temp3=temp2.substring(start3,end3);
        temp3=temp3.replaceAll("&amp;gt;",">");
        temp3=temp3.replaceAll("&amp;lt;","<");
        temp3=temp3.replaceAll("&amp;#xD;","");
        temp3="<"+temp3+"/body>";
      //  System.out.println(temp3);
        //getVal(summarycase(),"出院证明","出院记录");
        return temp3;
    }

    public static Object convertXmlStrToObject(Class clazz, String XmlStr) {
        Object xmlObject = null;
        try {
            JAXBContext context = JAXBContext.newInstance(clazz);
            // 进行将Xml转成对象的核心接口
            Unmarshaller unmarshaller = context.createUnmarshaller();
            StringReader sr = new StringReader(XmlStr);
            xmlObject = unmarshaller.unmarshal(sr);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return xmlObject;
    }
    public  static GwnSummaryCase getWsCase(){
        String endpoint = "http://10.100.1.38:8080/iemr/webservice/IEMRWebService?wsdl";
        String namespaceURL="http://webservice.iih.pkuhit/";
        String method="selectMrsXml";
        Map<String,Object> param=new HashMap<>();
        param.put("arg0","2910879");
        Result res=WebService.getWebService(endpoint,namespaceURL,method,param);
        String str=res.getData()+"";
        return  TestDom4j.readStringXml(getCase(str));
    }
    public static void main(String[] args) {
      //  getCase();
       // TestDom4j.readStringXml(XmlStr);
    }
    //<?xml version=\"1.0\" encoding=\"UTF-8\"?> \n" +
    //
    //            "<data-record xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"IIH_GreenCDA.xsd\"> \n" +
    //</data-record>

}
