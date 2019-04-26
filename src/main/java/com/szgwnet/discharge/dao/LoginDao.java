package com.szgwnet.discharge.dao;


import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.model.User;
import org.apache.ibatis.annotations.Param;
import java.util.List;

public interface LoginDao {
    /**
     * 获取版本号
     * @return
     */
    AppInfo selVersions();

    /**
     * 单点登录
     * @return
     */
    List<AppInfo> selectAppInfo();

    /**
     * 修改密码
     * @param use
     * @return
     */
    boolean editUser(User use);

    /**
     * 检查密码
     * @param user_id
     * @param pwd
     * @return
     */
    User selcetPwd(@Param("user_id") int user_id, @Param("pwd") String pwd);
}
