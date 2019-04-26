package com.szgwnet.discharge.config;

import com.szgwnet.discharge.model.LoginInfo;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author why
 * @date 2019-04-05 10:52
 */
public class MyInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取session
        LoginInfo loginInfo = (LoginInfo)request.getSession().getAttribute("user");
        if (loginInfo == null){
            response.sendRedirect(request.getContextPath()+"/login");
            return false;
        }else {
            return true;
        }
    }
}
