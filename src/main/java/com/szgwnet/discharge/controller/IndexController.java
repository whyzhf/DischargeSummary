package com.szgwnet.discharge.controller;

import com.szgwnet.discharge.model.LoginInfo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 页面跳转控制器
 * @author 77
 * @date 2018-12-01 11:14
 */
@RestController
@RequestMapping("/index")
public class IndexController {


    /**
     * 首页
     * @param modelAndView
     * @param role_id
     * @param org_id
     * @return
     */
    @RequestMapping(value="")
    public ModelAndView getAllpar(ModelAndView modelAndView, HttpServletRequest request, String role_id, String org_id){
        HttpSession session = request.getSession();
        if((role_id == null || org_id == null)&&session.getAttribute("user")!=null) {
            LoginInfo info = (LoginInfo)session.getAttribute("user");
            int role_index = info.getRole_index();
            role_id = String.valueOf(info.getRole_ids().stream().toArray(Integer[]::new)[role_index]);
            org_id = String.valueOf(info.getOrg_ids().stream().toArray(Integer[]::new)[0]);
        }
        LoginInfo loginInfo=(LoginInfo) session.getAttribute("user");
        modelAndView.addObject("role",loginInfo);
        modelAndView.addObject("roleId",role_id);
        modelAndView.setViewName("index");
        return  modelAndView;
    }



    @RequestMapping(value = "/index")
    public String getIndex() {
        return "index";
    }


    @RequestMapping("/kpi/{pagename}")
    public ModelAndView review(@PathVariable String pagename, HttpServletRequest request) {
        String vname = "";
        ModelAndView mv = new ModelAndView();
        if (pagename.equals("list") ||pagename.equals("permissionManage") ||pagename.equals("userManage")) {
            vname = "kpi/" + pagename;
        }
        mv.setViewName(vname);
        return mv;
    }
}
