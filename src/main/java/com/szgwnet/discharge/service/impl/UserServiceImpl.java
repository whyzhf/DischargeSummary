package com.szgwnet.discharge.service.impl;/**
 * @Description:
 * @Author: 77
 * @Date: 2018-11-29 19:50
 */

import com.szgwnet.discharge.service.UserService;
import com.szgwnet.discharge.dao.OrgDao;
import com.szgwnet.discharge.dao.RoleDao;
import com.szgwnet.discharge.dao.UserDao;
import com.szgwnet.discharge.model.LoginInfo;
import com.szgwnet.discharge.model.Org;
import com.szgwnet.discharge.model.Role;
import com.szgwnet.discharge.model.User;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * @author 77
 * @date 2018-11-29 19:50
 */
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;
    @Resource
    private OrgDao orgDao;
    @Resource
    private RoleDao roleDao;


    @Override
    public Map<String, Object> logVal(User userInfo) {
        Map<String,Object> userMap = new HashMap<>();

        User user = userDao.selectUser(userInfo.getName(),userInfo.getPwd());

        if (user == null){//没有匹配到相关用户（用户名或者密码错误）
            userMap.put("status",0);
        }else if (user.getStatus() == null || user.getStatus() == 0){//用户被禁用
            userMap.put("status",2);
        }else if (user.getStatus() == 1){
            List<Org> orgs = orgDao.selUserOrgRel(user.getId());
            List<Role> roles = roleDao.selUserRoleRel(user.getId());
            if (orgs.size() == 0 || roles.size() == 0){//该用户没有相关角色或科室
                userMap.put("status",3);
            }else {
                userMap.put("status",1);//登陆成功
                LoginInfo info = new LoginInfo();
                info.setUser_id(user.getId());
                info.setUser_name(user.getName());
                info.setOrg_ids(orgs.stream().map(e->e.getId()).collect(Collectors.toList()));
                info.setOrg_names(orgs.stream().map(e->e.getName()).collect(Collectors.toList()));
                info.setRole_ids(roles.stream().map(e->e.getId()).collect(Collectors.toList()));
                info.setRole_names(roles.stream().map(e->e.getName()).collect(Collectors.toList()));
                info.setRole_index(0);
                userMap.put("info",info);
            }
        }

        return userMap;
    }
}
