package com.szgwnet.discharge.dao;


import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.model.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserDao {
    /*登陆*/
    @Select("select ID,NAME,STATUS FROM GWN_PUB_USER where name=#{userName} and pwd = #{pwd}")
    User selectUser(@Param(("userName")) String userName, @Param("pwd") String pwd);

    /*登陆*/
    @Select("select ID,NAME,PWD,STATUS FROM GWN_PUB_USER where ID = #{id}")
    User selectUserParticulars(@Param(("id")) Integer id);

    /*获取当前APP信息*/
    @Select("SELECT APP_ID, APP_NAME, DESCRIPTION, VERSION, VERSION_DESC, app_logo, BG_IMG, SERVER_IP, APP_LOCATION, DIS_ORDER, STATUS  FROM GWN_PUB_APP WHERE APP_ID=32 limit 1")
    AppInfo getAppInfo();
}