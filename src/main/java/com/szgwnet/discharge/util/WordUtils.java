package com.szgwnet.discharge.util;


import cn.afterturn.easypoi.word.WordExportUtil;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.util.Assert;
import org.springframework.util.ResourceUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Map;

/**
 * @program byh-service-referral
 * @description: word工具类
 * @author: why
 * @create: 2019/06/03 11:33
 */
public class WordUtils {

    /**
     * 根据参数与文件路径生成word文件
     * @param param
     * @param wordPath
     */
    public static void saveWord(Map<String,Object> param, String templPath, String wordPath,String wordName) {
        String dateTime = DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmssSSS");
        try {

            XWPFDocument doc = WordExportUtil.exportWord07(templPath, param);
            FileOutputStream fos = new FileOutputStream(wordPath +wordName+dateTime+".docx");
            doc.write(fos);
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /**
     * 根据参数与文件路径生成word文件(导出单个文件夹)
     * @param params
     */
    public static void uploadWord(Map<String,Object> params,  String templatePath,String wordName, HttpServletRequest request, HttpServletResponse response) {
        String dateTime = DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmssSSS");
        String temDir= FileUtils.getPath(FileUtils.WORD_PATH);
        String fileName=wordName+dateTime+".docx";
        Assert.notNull(templatePath,"模板路径不能为空");
        Assert.notNull(temDir,"临时文件路径不能为空");
        Assert.notNull(fileName,"导出文件名不能为空");
        Assert.isTrue(fileName.endsWith(".docx"),"word导出请使用docx格式");
        try {
            String userAgent = request.getHeader("user-agent").toLowerCase();
            if (userAgent.contains("msie") || userAgent.contains("like gecko")) {
                fileName = URLEncoder.encode(fileName, "UTF-8");
            } else {
                fileName = new String(fileName.getBytes("utf-8"), "ISO-8859-1");
            }
           /// System.out.println(templatePath);
          //  params.forEach((K,V)-> System.out.println(K+"  "+V));
            XWPFDocument doc = WordExportUtil.exportWord07(templatePath, params);
            String tmpPath = temDir + fileName;
            FileOutputStream fos = new FileOutputStream(tmpPath);
            doc.write(fos);
            // 设置强制下载不打开
            response.setContentType("application/force-download");
           // response.setContentType("application/octet-stream");
            // 设置文件名
            response.addHeader("Content-Disposition", "attachment;fileName=" + fileName);
            OutputStream out = response.getOutputStream();
            doc.write(out);
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //这一步看具体需求，要不要删
            FileUtils.deleteDir(temDir);
        }


    }
}
