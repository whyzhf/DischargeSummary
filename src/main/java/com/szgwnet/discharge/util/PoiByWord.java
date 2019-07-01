/*
package com.szgwnet.discharge.util;

import com.szgwnet.discharge.model.ExceptionEntity.ResultGenerator;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.model.FieldsDocumentPart;
import org.apache.poi.hwpf.model.PicturesTable;
import org.apache.poi.hwpf.usermodel.*;
import org.springframework.util.ResourceUtils;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.*;

*/
/**
 * @Auther: why
 * @Data:2019/5/28
 * @Deacription:
 *//*

public class PoiByWord {
    public static void main(String[] args) {
        String tmpFile = "classpath:static/upload/en.doc";
        String expFile = "D:/esult.doc";
        Map<String, String> datas = new HashMap<String, String>();
        datas.put("fname", "张三");
        datas.put("fsex", "男");
        datas.put("fage", "18");
        datas.put("fdept", "感染内科");

        try {
            build3(ResourceUtils.getFile(tmpFile), datas, expFile);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    private static void build(File tmpFile, Map<String, String> contentMap, String exportFile) throws Exception {
        FileInputStream tempFileInputStream = new FileInputStream(tmpFile);
        HWPFDocument document = new HWPFDocument(tempFileInputStream);
        // 读取文本内容
        Range bodyRange = document.getRange();
        // 替换内容
        for (Map.Entry<String, String> entry : contentMap.entrySet()) {
            bodyRange.replaceText("${" + entry.getKey() + "}", entry.getValue());
        }

        //导出到文件
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        document.write(byteArrayOutputStream);
        OutputStream outputStream = new FileOutputStream(exportFile);
        outputStream.write(byteArrayOutputStream.toByteArray());
        outputStream.close();
    }
    private static void build3(File tmpFile, Map<String, String> contentMap, String exportFile) throws Exception {
        FileInputStream tempFileInputStream = new FileInputStream(tmpFile);
        HWPFDocument document = new HWPFDocument(tempFileInputStream);
        // 读取文本内容

        Range bodyRange = document.getRange();
        // 替换内容
        for (Map.Entry<String, String> entry : contentMap.entrySet()) {
            bodyRange.replaceText("${" + entry.getKey() + "}", entry.getValue());
        }

        //导出到文件
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        document.write(byteArrayOutputStream);
        OutputStream outputStream = new FileOutputStream(exportFile);
        outputStream.write(byteArrayOutputStream.toByteArray());
        outputStream.close();

    }

    public static void build2(File tmpFile, Map<String, String> contentMap, String exportFileName, HttpServletRequest request, HttpServletResponse response) {
        ByteArrayOutputStream ostream = null;
        try {
        FileInputStream tempFileInputStream = new FileInputStream(tmpFile);

        HWPFDocument document = new HWPFDocument(tempFileInputStream);


            // 读取文本内容
        Range bodyRange = document.getRange();

        // 替换内容
        for (Map.Entry<String, String> entry : contentMap.entrySet()) {
            bodyRange.replaceText("${" + entry.getKey() + "}", entry.getValue());
        }
            // 输出 word 内容文件流，提供下载
            response.reset();
            response.setContentType("application/x-msdownload");
            // 随机生成一个文件名
            UUID randomUUID = UUID.randomUUID();
            String attachmentName = randomUUID.toString();
            response.addHeader("Content-Disposition", "attachment; filename=\""+ attachmentName + ".doc\"");
            ostream = new ByteArrayOutputStream();
            ServletOutputStream servletOS = response.getOutputStream();
            document.write(ostream);
            servletOS.write(ostream.toByteArray());
            servletOS.flush();
            servletOS.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exportFileName111111::"+exportFileName);
        }

    }

}
*/
