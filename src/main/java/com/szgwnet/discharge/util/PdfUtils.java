package com.szgwnet.discharge.util;

import cn.afterturn.easypoi.word.WordExportUtil;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Map;

/**
 * @Auther: why
 * @Data:2019/6/14
 * @Deacription:
 */
public class PdfUtils {
    public static void savePDF(Map<String,Object> param, String templPath, String pdfPath, String pdfName) {
        String dateTime = DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmssSSS");
        //填充值
        Map<String,Object> datemap = (Map<String,Object>)param.get("datemap");
        PdfReader reader;
        FileOutputStream out;
        ByteArrayOutputStream bos;
        PdfStamper stamper;
        try {
            BaseFont bf = BaseFont.createFont("/font/simhei.ttf" , BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
            Font FontChinese = new Font(bf, 4, Font.NORMAL);
            // 输出流
            out = new FileOutputStream(pdfPath +pdfName+dateTime+".pdf");
            // 读取pdf模板
            reader = new PdfReader(templPath);
            bos = new ByteArrayOutputStream();
            stamper = new PdfStamper(reader, bos);
            AcroFields form = stamper.getAcroFields();
            //文字类的内容处理
            form.addSubstitutionFont(bf);
            for(String key : datemap.keySet()){
                String value = datemap.get(key)+"";
                form.setField(key+"",value+"");
            }
            //图片类的内容处理
            Map<String,Object> imgmap = (Map<String,Object>)param.get("imgmap");
            if (imgmap!=null) {
                for (String key : imgmap.keySet()) {
                    String value = imgmap.get(key)+"";
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
}
