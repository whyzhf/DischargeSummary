package com.szgwnet.discharge.util;

import com.szgwnet.discharge.model.AppInfo;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/4/29
 * @Deacription:反射
 */
public class ReflectUtil {

    public static void main(String[] args) {
        try {
            reflect(new AppInfo());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /**
       * 功能描述
       * @author why
       * @date 2019/4/29
       * @param clazz 对象
       * @return void
       * @description  获取对象属性名 K，属性值 V
     */
    public static Map<String,Object> reflect(Object clazz) throws Exception {
        Map<String,Object> resmap=new HashMap<>();
        Class cls = clazz.getClass();
        Field[] fields = cls.getDeclaredFields();
        for (int i = 0; i < fields.length; i++) {
            Field f = fields[i];
            f.setAccessible(true);
           // System.out.println("属性名:" + f.getName() + " 属性值:" + f.get(clazz));
            resmap.put( f.getName(),f.get(clazz));
        }
        return resmap;
    }

}
