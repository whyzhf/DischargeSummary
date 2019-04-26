package com.szgwnet.discharge.dao;


import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.model.User;
import org.apache.ibatis.annotations.Param;

public interface UserDao {
    /*登陆*/
    User selectUser(@Param(("userName")) String userName, @Param("pwd") String pwd);

    /*登陆*/
    User selectUserParticulars(@Param(("id")) Integer id);

    /*获取当前APP信息*/
    AppInfo getAppInfo();
}