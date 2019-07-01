package com.szgwnet.discharge.service;

import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.model.User;

import java.util.List;
import java.util.Map;

public interface LoginService {
    /**
     * 获取版本号
     * @return
     */
    Map<String,Object> getVersions();

    /**
     * 单点登录
     * @return
     */
    List<AppInfo> selAppInfo();

    /**
     * 修改密码
     * @param use
     * @return
     */
    Map changePwd(User use);

    /**
     * 检查密码
     * @param user_id
     * @param pwd
     * @return
     */
    boolean checkPwd(int user_id, String pwd);
}
