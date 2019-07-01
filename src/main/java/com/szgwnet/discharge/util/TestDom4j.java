package com.szgwnet.discharge.util;
//先加入dom4j.jar包
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.szgwnet.discharge.model.GwnSummaryCase;
import com.szgwnet.discharge.model.SummaryCase;
import org.dom4j.*;

/**
 * @Title: TestDom4j.java
 * @Package
 * @Description: 解析xml字符串
 * @author 无处不在
 * @date 2012-11-20 下午05:14:05
 * @version V1.0
 */
public class TestDom4j {
    public static  Map<String,String> map =new HashMap<>();
    public static GwnSummaryCase readStringXml(String xml) {
        System.out.println(xml);
        Document doc = null;
        try {

            // 读取并解析XML文档
            // SAXReader就是一个管道，用一个流的方式，把xml文件读出来
            //
            // SAXReader reader = new SAXReader(); //User.hbm.xml表示你要解析的xml文档
            // Document document = reader.read(new File("User.hbm.xml"));
            // 下面的是通过解析xml字符串的
            doc = DocumentHelper.parseText(xml); // 将字符串转为XML

            Element rootElt = doc.getRootElement(); // 获取根节点
            getNodes2(rootElt);
           return getCase();
        } catch (Exception e) {
            e.printStackTrace();
            return getCase();
        }
    }
    public static void getNodes(Element node) {
        System.out.println("--------------------");

        //当前节点的名称、文本内容和属性
        System.out.println("当前节点名称：" + node.getName());//当前节点名称
        System.out.println("当前节点的内容：" + node.getTextTrim());//当前节点名称
        List<Attribute> listAttr = node.attributes();//当前节点的所有属性的list
        for (Attribute attr : listAttr) {//遍历当前节点的所有属性
            String name = attr.getName();//属性名称
            String value = attr.getValue();//属性的值
            System.out.println("属性名称：" + name + "属性值：" + value);
        }

        //递归遍历当前节点所有的子节点
        List<Element> listElement = node.elements();//所有一级子节点的list
        for (Element e : listElement) {//遍历所有一级子节点
          getNodes(e);//递归
        }
    }

    public static void getNodes2(Element node) {
        //当前节点的所有属性的list
        List<Attribute> listAttr = node.attributes();
        String dvalue="",dname="";
        for (Attribute attr : listAttr) {
            //遍历当前节点的所有属性
            //属性名称
            String name = attr.getName();
            //属性的值
            String value = attr.getValue();
            if("display-value".equals(name)){
                dvalue=value;
                if (dvalue.contains("诊疗经过")){
                    map.put("诊疗经过",dvalue.substring(5,dvalue.length()));
                }
                if (dvalue.contains("出院情况")){
                    map.put("出院情况",dvalue.substring(9,dvalue.length()));
                }
                if (dvalue.contains("出院医嘱")){
                    map.put("出院医嘱","");
                }
                if (null!=map.get("出院医嘱")&&!dvalue.contains("上级医生")&&!dvalue.contains("出院医嘱")){
                    map.put("出院医嘱",map.get("出院医嘱")+dvalue);
                }
            }
            if("name".equals(name)){
                dname=value;
            }
        }
        map.put(dvalue,dname);

        //递归遍历当前节点所有的子节点
        //所有一级子节点的list
        List<Element> listElement = node.elements();
        for (Element e : listElement) {
            //遍历所有一级子节点
            getNodes2(e);
        }
    }
    public static GwnSummaryCase  getCase(){
        GwnSummaryCase sc=new GwnSummaryCase();
        sc.setFname(getKey(map,"姓名"));
        sc.setFsex(getKey(map,"性别"));
        sc.setFage(getKey(map,"年龄"));
        sc.setFsurvey(getKey(map,"主诉"));
        sc.setFrydata(getKey(map,"入院日期"));
        sc.setFcydata(getKey(map,"出院时间"));
        sc.setFsumd(getKey(map,"{数字}"));
        sc.setFryzd(getKey(map,"初步诊断"));
        sc.setFcyzd(getKey(map,"最后诊断"));
        sc.setFzljg(map.get("诊疗经过"));
        sc.setFcyqk(map.get("出院情况"));
        sc.setFcyyz(map.get("出院医嘱"));
        System.out.println(sc.toString());
        return sc;
    }
    public static String getKey(Map<String,String> map,String value){
        String key = null;
        //Map,HashMap并没有实现Iteratable接口.不能用于增强for循环.
        for(String getKey: map.keySet()){
            if(map.get(getKey).equals(value)){
                key = getKey;
            }
        }
        return key;

    }
}
