package com.szgwnet.discharge.dao;

import com.szgwnet.discharge.model.AppInfo;
import org.apache.ibatis.annotations.Select;

public interface SettingDao {
     /**
     * 获取图片路径信息
     * @return
     */
     @Select("select app_name,app_logo from GWN_PUB_APP where app_id = 32")
    AppInfo selImgPathInfo();
    /**
     * 获取版本
     * @return
     */
    @Select("SELECT VERSION_DESC FROM GWN_PUB_APP WHERE APP_ID = 32")
    AppInfo selectXiao();
}
