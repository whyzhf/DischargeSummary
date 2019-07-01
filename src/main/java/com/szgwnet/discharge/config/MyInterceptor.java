package com.szgwnet.discharge.config;

import com.szgwnet.discharge.model.LoginInfo;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

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
          /*  PrintWriter out = response.getWriter();
            out.println("<html>");
            out.println("<script>");
            out.println("window.open ('"+request.getContextPath()+"/login','_top')");
            out.println("</script>");
            out.println("</html>");*/

            return false;
        }else {
            return true;
        }
    }
}
