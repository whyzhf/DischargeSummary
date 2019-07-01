package com.szgwnet.discharge.util;
import javax.xml.namespace.QName;

import com.szgwnet.discharge.model.ExceptionEntity.Result;
import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import org.apache.axis.client.Call;
import org.apache.axis.client.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * @author dell
 * @Auther: why
 * @Data:2019/6/27
 * @Deacription:WebService接口操作
 */
public class WebService {
    public static void main(String[] args) {

        String endpoint = "http://10.100.1.38:8080/iemr/webservice/IEMRWebService?wsdl";
        String namespaceURL="http://webservice.iih.pkuhit/";
        String method="selectMrsXml";
        Map<String,Object> param=new HashMap<>();
        param.put("arg0","2910879");
        getWebService(endpoint,namespaceURL,method,param);
    }

    /**
     * @param endpoint  wsdl地址URL
     * @param namespaceURL wsdl文件中的targetNamespace
     * @param method  需要调用的接口名称
     * @param param   接口参数，Map类型，K:参数名，V：参数值
     * @return WebService接口调用
     */
    public static Result getWebService(String endpoint, String namespaceURL, String method, Map<String,Object> param){
        try {
            //直接引用远程的wsdl文件
            Service service = new Service();
            Call call = (Call) service.createCall();
            call.setTargetEndpointAddress(endpoint);
            //WSDL里面描述的接口名称
            // 调用的方法名
            call.setOperationName(new QName(namespaceURL, method));
            //接口的参数
            List<Object> pvaList=new LinkedList<>();
            param.forEach((K,V)->{
                //接口的参数
                call.addParameter(K, org.apache.axis.encoding.XMLType.XSD_DATE,
                        javax.xml.rpc.ParameterMode.IN);
                pvaList.add(V);
            });

            //设置返回类型
            call.setReturnType(org.apache.axis.encoding.XMLType.XSD_STRING);
            String result = (String)call.invoke(pvaList.toArray());
            //给方法传递参数，并且调用方法
            return ResultGenerator.setCustomResult(200,"获取成功",result);
        }
        catch (Exception e) {
            return ResultGenerator.setCustomResult(4000,"获取失败",e.toString());
        }

    }
}
