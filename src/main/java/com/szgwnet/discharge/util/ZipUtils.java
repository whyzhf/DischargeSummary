package com.szgwnet.discharge.util;
import org.apache.commons.lang3.time.DateFormatUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Date;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * @Auther: why
 * @Data:2019/6/3
 * @Deacription:
 */
public class ZipUtils {
    /**
     * 根据资源文件夹，目标文件夹，文件名打包成zip文件下载
     * @param wordPath
     * @param zipPath
     * @param name
     * @param response
     */
    public synchronized static void saveZip(String wordPath, String zipPath, String name, HttpServletRequest request, HttpServletResponse response){

        try {
            String dateTime = DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmssSSS");
            ZipOutputStream zos = null;
            File zipFile=new File(zipPath+name+"_"+dateTime+".zip");
            zos = new ZipOutputStream(new FileOutputStream(zipFile));
            File[] files = new File(wordPath).listFiles();
            byte[] buffer = new byte[1024];
            for (File file2 : files) {
                FileInputStream fis = new FileInputStream(file2);
                zos.putNextEntry(new ZipEntry(file2.getName()));
                int len;
                //读入需要下载的文件的内容，打包到zip文件
                while ((len = fis.read(buffer)) != -1) {
                    zos.write(buffer, 0, len);
                }
                zos.flush();
                zos.closeEntry();
                fis.close();
            }
            zos.close();
            FileUtils.downloadZip(zipFile,request,response);
            FileUtils.deleteDir(wordPath);
            FileUtils.deleteDir(zipPath);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
