package com.szgwnet.discharge.service.impl;


import com.szgwnet.discharge.dao.LoginDao;
import com.szgwnet.discharge.dao.UserDao;
import com.szgwnet.discharge.model.User;
import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.service.LoginService;
import com.szgwnet.discharge.util.MD5Util;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LoginServiceImpl implements LoginService {
    @Resource
    private LoginDao loginDao;

    @Resource
    private UserDao userDao;

    /**
     * 获取版本号
     * @return
     */
    @Override
    public Map<String,Object> getVersions() {
        AppInfo appInfo=loginDao.selVersions();
        Map<String,Object>  res=new HashMap<>();
        res.put("version",appInfo.getVersion());
        return res;
    }

    /**
     * 单点登录
     * @return
     */
    @Override
    public List<AppInfo> selAppInfo() {
        return loginDao.selectAppInfo();
    }

    /**
     * 修改密码
     * @param use
     * @return
     */
    @Override
    @Transactional
    public Map changePwd(User use) {
        Map<String,Object> map = new HashMap();
        try {
            //找到用户相关信息
            User user = userDao.selectUserParticulars(use.getId());
            // 0、旧密码错误  2、新 旧密码一致
            if(user !=null && user.getPwd().equals(MD5Util.MD5(use.getPwd()))){
                if(use.getNpwd().equals(MD5Util.MD5(use.getPwd()))){
                    map.put("pwd",2);
                }else {
                    boolean folgs = loginDao.editUser(use);
                    map.put("pwd",folgs);
                }
            }else {
                map.put("pwd",0);
            }
        }catch (Exception e){
            e.printStackTrace();
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
        return map;
        //return loginDao.editUser(use);
    }

    /**
     * 检查密码
     * @param user_id
     * @param pwd
     * @return
     */
    @Override
    public boolean checkPwd(int user_id, String pwd) {
        User user=loginDao.selcetPwd(user_id,pwd);
        if (user!=null){
            return  true;
        }
        return false;
    }
}
