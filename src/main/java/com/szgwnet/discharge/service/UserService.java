package com.szgwnet.discharge.service;

import com.szgwnet.discharge.model.User;

import java.util.Map;

/**
 * @Description:
 * @Author: 77
 * @Date: 2018-11-29 19:44
 */
public interface UserService {

    /*登陆*/
    Map<String,Object> logVal(User user);
}
