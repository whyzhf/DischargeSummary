package com.szgwnet.discharge.util;

/**
 * @Auther: why
 * @Data:2019/4/29
 * @Deacription:
 */
public class GeneralUtils {

    /**
     * 判断对象是否为null , 为null返回true,否则返回false
     * @param obj 被判断的对象
     * @return boolean
     */
    public static boolean isNull(Object obj){
        return (null == obj) ? true : false;
    }

    /**
     * 判断输入的字符串参数是否为空
     * @return boolean 空则返回true,非空则flase
     */
    public static boolean isEmpty(String input) {
        return null==input || 0==input.length() || 0==input.replaceAll("\\s", "").length();
    }
}
