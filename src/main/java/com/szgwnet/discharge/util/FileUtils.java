package com.szgwnet.discharge.util;
import cn.afterturn.easypoi.word.WordExportUtil;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.util.Assert;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Map;


/**
 * @Auther: why
 * @Data:2019/6/3
 * @Deacription:
 */
public class FileUtils {
    //word临时路劲
    public static final String WORD_PATH= "/data/web_static/static/upload/word/";
    //pdf临时路劲
    public static final String PDF_PATH= "/data/web_static/static/upload/pdf/";
    //zip临时路劲
    public static final String ZIP_PATH= "/data/web_static/static/upload/zip/";
    //word中文模板路劲
    public static final String CHTEMPLATEPATH= "/static/upload/ch.docx";
    //word英文模板路劲
    public static final String ENTEMPLATEPATH= "/static/upload/en.docx";
    //pdf中文模板路劲
    public static final String PDFCHTEMPLATEPATH= "/static/upload/ch.pdf";
    //pdf英文模板路劲
    public static final String PDFENTEMPLATEPATH= "/static/upload/en.pdf";
    /**
     * 获取文件存放地址
     * @param path
     * @return
     */
    public static String getPath(String path){
        File file = new File(path);
        //根据文件夹路径创建文件夹
        if(!file.exists()){
            file.mkdirs();
        }
        return path;
    }
    /**
     * 下载zip包
     * @param file
     * @param response
     * @return
     */
    public static HttpServletResponse downloadZip(File file, HttpServletRequest request,HttpServletResponse response) {
        try {

            String fileName= URLEncoder.encode(file.getName(), "UTF-8");
            // 以流的形式下载文件。
            InputStream fis = new BufferedInputStream(new FileInputStream(file.getPath()));
            byte[] buffer = new byte[fis.available()];
            fis.read(buffer);
            fis.close();
            // 清空response
            response.reset();
            OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
            response.setContentType("application/octet-stream");
            //如果输出的是中文名的文件，在此处就要用URLEncoder.encode方法进行处理
            response.setHeader("Content-Disposition", "attachment;filename=" +fileName);
            toClient.write(buffer);
            toClient.flush();
            toClient.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return response;
    }


    /**
     * 删除目录下所有文件
     * @param path
     * @return
     */
    public static boolean deleteDir(String path){
        File file = new File(path);
        //判断是否待删除目录是否存在

        if(!file.exists()){
            System.out.print("The dir are not exists!");
            return false;
        }
        //取得当前目录下所有文件和文件夹
        String[] content = file.list();
        for(String name : content){
            File temp = new File(path, name);
            //判断是否是目录
            if(temp.isDirectory()){
                //递归调用，删除目录里的内容
                deleteDir(temp.getAbsolutePath());
                //删除空目录
                temp.delete();
            }else{
                //直接删除文件
                if(!temp.delete()){
                    System.out.print("The dir are not exists!");
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String  is = System.getProperty("user.dir");
        System.out.println(is);
        //FileUtils.copyFolder("/static/upload","/static/upload2");
       /* try {
            org.apache.commons.io.FileUtils.copyDirectory(new File("classpath:/static/upload"),new File("/static/upload1"));
        } catch (IOException e) {
            e.printStackTrace();
        }*/
    }
    /**
     * 复制整个文件夹内容
     * @param oldPath String 原文件路径 如：c:/fqf
     * @param newPath String 复制后路径 如：f:/fqf/ff
     * @return boolean
     */
    public static void copyFolder(String oldPath, String newPath) {
        deleteDir(newPath);
        try {
            //如果文件夹不存在 则建立新文件夹
            File nfile = new File(newPath);
            if(!nfile.exists()){
               nfile.mkdirs();
            }
            FileInputStream input = new FileInputStream(FileUtils.CHTEMPLATEPATH);
            FileOutputStream output = new FileOutputStream(newPath + "/" +
                    (FileUtils.CHTEMPLATEPATH).toString());
            byte[] b = new byte[1024 * 5];
            int len;
            while ( (len = input.read(b)) != -1) {
                output.write(b, 0, len);
            }
            output.flush();
            output.close();
            input.close();

            FileInputStream input2 = new FileInputStream(FileUtils.ENTEMPLATEPATH);
            FileOutputStream output2 = new FileOutputStream(newPath + "/" +
                    (FileUtils.ENTEMPLATEPATH).toString());
            byte[] b2 = new byte[1024 * 5];
            int len2;
            while ( (len2 = input2.read(b2)) != -1) {
                output.write(b2, 0, len);
            }
            output2.flush();
            output2.close();
            input2.close();


        }
        catch (Exception e) {
            System.out.println("复制整个文件夹内容操作出错");
            e.printStackTrace();

        }
    }
}