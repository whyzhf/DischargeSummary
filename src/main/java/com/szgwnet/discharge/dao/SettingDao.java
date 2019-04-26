package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.AppInfo;

public interface SettingDao {
     /**
     * 获取图片路径信息
     * @return
     */
    AppInfo selImgPathInfo();
    /**
     * 获取版本
     * @return
     */
    AppInfo selectXiao();
}
