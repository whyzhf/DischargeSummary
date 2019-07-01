package com.szgwnet.discharge.controller;
import com.alibaba.fastjson.JSON;

import com.szgwnet.discharge.service.SummaryService;
import com.szgwnet.discharge.model.CountStatus;

import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import com.szgwnet.discharge.service.impl.SummaryServiceImpl;
import com.szgwnet.discharge.util.SystemUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.stream.Collectors;

/**
 * @Auther: why
 * @Data:2019/6/10
 * @Deacription: 打war包WebConfig 中ServerEndpointExporter得注释掉
 */
@ServerEndpoint(value ="/WebSocket/{user_id}/{role_id}")
@Controller
public class WebSocketController   {
    // 解决WebSocket中Service层不能注入的问题
    private static  SummaryService summaryService;
    // 注入的时候，给类的 service 注入
    @Autowired
    public void setChatService(SummaryService summaryService) {
        WebSocketController.summaryService= summaryService;
    }

    //private static ApplicationContext applicationContext;
    // 用来记录当前连接数的变量
    private static volatile int onlineCount = 0;
    //记录请求用户角色
    private Map<String, String> usermap = new ConcurrentHashMap<>();
    // concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象
    private static CopyOnWriteArraySet<WebSocketController> webSocketSet = new CopyOnWriteArraySet<WebSocketController>();
    //记录请求用户角色
    private Map<String, Session> sessionmap = new ConcurrentHashMap<>();
    // 与某个客户端的连接会话，需要通过它来与客户端进行数据收发
    private Session session;
    private String role_id;
    private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketController.class);


    @OnOpen
    public void onOpen(Session session, @PathParam("user_id") String user_id, @PathParam("role_id") String role_id) throws Exception {
        this.session = session;
        this.role_id=role_id;
        if(this.session.isOpen()) {
            SystemUtil.sessionmap.put(role_id, this.session);
        }
        usermap.put(this.session.getId(),role_id);
        webSocketSet.add(this);
        sendMessage(this.role_id);
    }

    @OnClose
    public void onClose() {
        webSocketSet.remove(this);
        usermap.remove(this.session.getId());
        SystemUtil.sessionmap.clear();
    }

    @OnMessage
    public void onMessage(String message, Session session) {
       // sendMessage();
        sendMessage(this.role_id);
    }

    @OnError
    public void onError(Session session, Throwable error) {
        ResultGenerator.genFailResult("连接出错");
    }

    public void sendMessage(String role_id)  {
        SystemUtil.sessionmap.forEach((K,V)-> System.out.println(K+"    "+V+" "+ V.isOpen()));
        try {
            if(null== this.session||!this.session.isOpen()){
                this.session=  SystemUtil.sessionmap.get(role_id);
                this.role_id=role_id;
                if (null== this.session){
                    this.session=  SystemUtil.sessionmap.get("3201");
                    this.role_id="3201";
                }
            }

            List<String> resList=new ArrayList<>();

             if (this.session.isOpen()){
                List<CountStatus> list=summaryService.CountStatus();
                if(null==list||list.isEmpty()){
                    String str = JSON.toJSONString(ResultGenerator.setCustomResult(200,"发送成功",resList));
                    // List转json
                    this.session.getBasicRemote().sendText(str);
                }
                Map<Integer, CountStatus> countMap = list.stream()
                        .collect(Collectors.toMap(CountStatus::getStatus, a -> a,(k1, k2)->k1));
                if("3201".equals(this.role_id)){
                    if(null!=countMap.get(3)&&0!=countMap.get(3).getCount()) {
                        resList.add("共"+countMap.get(3).getCount()+"条档案待审核");
                    }
                    if(null!=countMap.get(6)&&0!=countMap.get(6).getCount()) {
                        resList.add("共" + countMap.get(6).getCount() + "条档案报错");
                    }
                    if(null!=countMap.get(1)&&0!=countMap.get(1).getCount()||null!=countMap.get(2)) {
                        resList.add("共"+(countMap.get(1).getCount()+countMap.get(2).getCount())+"条档案待翻译");
                    }
                   /* if(null!=countMap.get(2)&&0!=countMap.get(2).getCount()) {
                        resList.add("共"+countMap.get(2).getCount()+"条档案待提交");
                    }*/
                    if(null!=countMap.get(4)&&0!=countMap.get(4).getCount()) {
                        resList.add("共" + countMap.get(4).getCount() + "条档案被驳回");
                    }
                }else{
                    if(null!=countMap.get(1)&&0!=countMap.get(1).getCount()) {
                        resList.add("共"+countMap.get(1).getCount()+"条档案待翻译");
                    }
                    if(null!=countMap.get(2)&&0!=countMap.get(2).getCount()) {
                        resList.add("共"+countMap.get(2).getCount()+"条档案待提交");
                    }
                    if(null!=countMap.get(4)&&0!=countMap.get(4).getCount()) {
                        resList.add("共" + countMap.get(4).getCount() + "条档案被驳回");
                    }
                }
                String str = JSON.toJSONString(ResultGenerator.setCustomResult(200,"发送成功",resList));
                // List转json
                 this.session.getBasicRemote().sendText(str);
           }else{
                resList.add("连接失败");
                String str = JSON.toJSONString(ResultGenerator.setCustomResult(4000,"连接失败",resList));
                // List转json
                this.session.getBasicRemote().sendText(str);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketController.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketController.onlineCount--;
    }

    /*public static void setApplicationContext(ApplicationContext applicationContext) {
        WebSocketController.applicationContext = applicationContext;
    }*/
}
