package com.szgwnet.discharge.dao;


import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.model.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface LoginDao {
    /**
     * 获取版本号
     * @return
     */
    @Select(" SELECT VERSION FROM GWN_PUB_APP WHERE APP_ID = 32")
    AppInfo selVersions();

    /**
     * 单点登录
     * @return
     */
    @Select(" select app_id,app_name,description,version,server_ip,app_location from GWN_PUB_APP where app_id != 4")
    List<AppInfo> selectAppInfo();

    /**
     * 修改密码
     * @param use
     * @return
     */
    @Update(" update GWN_PUB_USER  set pwd=#{use.npwd} where id=#{use.id}")
    boolean editUser(@Param("use") User use);

    /**
     * 检查密码
     * @param user_id
     * @param pwd
     * @return
     */
    @Select("select id from GWN_PUB_USER where id=#{user_id} and pwd=#{pwd}")
    User selcetPwd(@Param("user_id") int user_id, @Param("pwd") String pwd);
}
