package com.szgwnet.discharge.controller;
/**
 * @Description:
 * @Author: 77
 * @Date: 2018-11-29 19:41
 */

import com.szgwnet.discharge.model.ExceptionEntity.Result;
import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import com.szgwnet.discharge.model.ExceptionEntity.ServiceException;
import com.szgwnet.discharge.model.LoginInfo;
import com.szgwnet.discharge.model.User;
import com.szgwnet.discharge.service.LoginService;
import com.szgwnet.discharge.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


/**
 * @author 77
 * @date 2018-11-29 19:41
 */
@Controller
@RequestMapping(value = "/login")
@CrossOrigin
public class LoginController {

   @Resource
    private UserService userService;
   @Resource
    private LoginService loginService;

    /**
     * 判断Session是否过期 过期则返回登录页
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "")
    public String login(HttpServletRequest request) {
        String agent = request.getHeader("user-agent");
        HttpSession session = request.getSession();
        if (agent.contains("Windows NT") && session.getAttribute("user") == null) {
            return "login";
        } else if (session.getAttribute("user") != null) {
            return "index";
        } else {
            return "login";
        }
    }

    /**
     * 登陆
     * @param user
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "logVal",produces = {"application/json;charset=UTF-8"})
    public Result logVal(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) {
        Integer status = null;
        HttpSession session = request.getSession();
        if (session.getAttribute("user") == null) {
            Map<String, Object> userInfo = userService.logVal(user);
            status = (int)userInfo.get("status");
            if (status == 1){
                session.setAttribute("user",userInfo.get("info"));
            }
        }else {
            status = 1;
        }
        Map<String, Object> map=new HashMap<>();
        if (status == 1) {
            map.put("url", "/index");
        } else {
            map.put("url", "null");
           //  int a= 1/0;
          //  throw new ServiceException("用户名密码错误");
        }

        return ResultGenerator.genSuccessResult(map);

    }

    /**
     * 登出 清除Session
     * @param request
     * @return
     */
    @RequestMapping("/logOut")
    public String logOut(HttpServletRequest request) throws IOException {
        HttpSession session = request.getSession();
        session.invalidate();
        return "redirect:/login";
    }

    /**
     * 获取版本号
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/getVersions")
    @ResponseBody
    public Result getVersions(HttpServletRequest request, HttpServletResponse response){
        response.setCharacterEncoding("utf-8");
        return  ResultGenerator.genSuccessResult(loginService.getVersions());
    }

    /**
     * 切换角色
     * @param role_index
     * @param response
     * @param request
     */
    @RequestMapping("/changeRole")
    @ResponseBody
    public void changeRole(String role_index, HttpServletResponse response, HttpServletRequest request){
        HttpSession session=request.getSession();
        LoginInfo loginInfo=(LoginInfo) session.getAttribute("user");
        loginInfo.setRole_index(Integer.parseInt((String)role_index));
    }
}
