package com.szgwnet.discharge.service.impl;

import com.szgwnet.discharge.dao.SettingDao;
import com.szgwnet.discharge.model.AppInfo;
import com.szgwnet.discharge.service.SettingService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class SettingServiceImpl implements SettingService {
    @Resource
    private SettingDao settingDao;

    /**
     * 获取版本
     * @return
     */
    @Override
    public String selXiao() {
        return settingDao.selectXiao().getVersion_desc();
    }

    /**
     * 读取TXT文件中的base64编码字符串
     * @return
     */
    @Override
    public String readImgStr() {
        AppInfo appInfo=settingDao.selImgPathInfo();
        String result="{\"data\":[{\"app_name\":\""+appInfo.getApp_name()+"\",";
        StringBuilder sb = new StringBuilder();
        sb.append(appInfo.getApp_logo());
        if(sb.length()<16){
            result+="\"imagStr\":\"1\"}]}";
        }else{
            //将base码中插入的10位长度的掩码截取掉
            String aa = sb.substring(0,sb.length()-16);
            String bb = sb.substring(sb.length()-6, sb.length());
            StringBuilder imgStrs = new StringBuilder();
            imgStrs.append(aa).append(bb);
            if(!"".equals(imgStrs.toString())||!"NULL".equals(imgStrs.toString())||imgStrs.length()>4){
                result+="\"imagStr\":\""+imgStrs.toString()+"\",\"imagStr2\":\""+sb.toString()+"\"}]}";
            }else{
                result+="\"imagStr\":\"1\"}]}";
            }
        }
        return result;
    }
}
