package com.szgwnet.discharge.util;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import com.szgwnet.discharge.model.GwnSummaryCase;
import org.apache.commons.lang3.time.DateFormatUtils;

import javax.annotation.Resource;

/**
 * @Auther: why
 * @Data:2019/6/11
 * @Deacription:
 */
public class WordToPdfUtils {
    // 利用模板生成pdf
    public static void pdfout(Map<String,Object> o) {
        // 模板路径
        String templatePath = FileUtils.PDFCHTEMPLATEPATH;
        // 生成的新文件路径
        String newPDFPath= FileUtils.getPath(FileUtils.PDF_PATH);
        //String newPDFPath ="/static/upload/pdf/";
        //填充值
        Map<String,Object> datemap = (Map<String,Object>)o.get("datemap");
    //    String dateTime = DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmssSSS");
        String fileName="123.pdf";
        newPDFPath=newPDFPath+fileName;

        PdfReader reader;
        FileOutputStream out;
        ByteArrayOutputStream bos;
        PdfStamper stamper;
        try {
            BaseFont bf = BaseFont.createFont("/simhei.ttf" , BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
            Font FontChinese = new Font(bf, 5, Font.NORMAL);
            // 输出流
            out = new FileOutputStream(newPDFPath);
            // 读取pdf模板
            reader = new PdfReader(templatePath);
            bos = new ByteArrayOutputStream();
            stamper = new PdfStamper(reader, bos);
            AcroFields form = stamper.getAcroFields();
            //文字类的内容处理

            form.addSubstitutionFont(bf);
                datemap.forEach((K,V)-> {
                    try {
                        form.setField(K+"",V+"");
                    } catch (IOException e) {
                        e.printStackTrace();
                    } catch (DocumentException e) {
                        e.printStackTrace();
                    }

                });

           /* for(String key : datemap.keySet()){
                String value = datemap.get(key)+"";
                form.setField(key+"",value+"");
            }*/
            //图片类的内容处理
            Map<String,String> imgmap = (Map<String,String>)o.get("imgmap");
            if (imgmap!=null) {
                for (String key : imgmap.keySet()) {
                    String value = imgmap.get(key);
                    String imgpath = value;
                    int pageNo = form.getFieldPositions(key).get(0).page;
                    Rectangle signRect = form.getFieldPositions(key).get(0).position;
                    float x = signRect.getLeft();
                    float y = signRect.getBottom();
                    //根据路径读取图片
                    Image image = Image.getInstance(imgpath);
                    //获取图片页面
                    PdfContentByte under = stamper.getOverContent(pageNo);
                    //图片大小自适应
                    image.scaleToFit(signRect.getWidth(), signRect.getHeight());
                    //添加图片
                    image.setAbsolutePosition(x, y);
                    under.addImage(image);
                }
            }
            // 如果为false，生成的PDF文件可以编辑，如果为true，生成的PDF文件不可以编辑
            stamper.setFormFlattening(true);
            stamper.close();
            Document doc = new Document();
            Font font = new Font(bf, 32);
            PdfCopy copy = new PdfCopy(doc, out);
            doc.open();
            PdfImportedPage importPage = copy.getImportedPage(new PdfReader(bos.toByteArray()), 1);
            copy.addPage(importPage);
            doc.close();
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e);
        } catch (DocumentException e) {
            e.printStackTrace();
            System.out.println(e);
        }

    }


    public static void main(String[] args) {
        Map<String,String> map = new HashMap();
        map.put("fsurvey","张三qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
        map.put("fname","2018年1月1日");
        map.put("fsex","晴朗");
        map.put("fage","打羽毛球");

        /*Map<String,String> map2 = new HashMap();
        map2.put("img","c:/50336.jpg");
*/
        Map<String,Object> o=new HashMap();
        o.put("datemap",map);
        //  o.put("imgmap",map2);
        pdfout(o);
    }
}
