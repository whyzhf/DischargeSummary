package com.szgwnet.discharge.util;

import com.szgwnet.discharge.model.AppInfo;
import org.ansj.domain.Result;
import org.ansj.domain.Term;
import org.ansj.splitWord.analysis.BaseAnalysis;
import org.ansj.splitWord.analysis.IndexAnalysis;
import org.ansj.splitWord.analysis.NlpAnalysis;
import org.ansj.splitWord.analysis.ToAnalysis;
import org.nlpcn.commons.lang.tire.domain.Forest;
import org.nlpcn.commons.lang.tire.library.Library;

import java.lang.reflect.Field;
import java.util.List;

/**
 * @Auther: why
 * @Data:2019/4/29
 * @Deacription:中文分词工具类
 */
public class AnsjUtil {
    /**
     * 1.基本分词-BaseAnalysis
     *基本就是保证了最基本的分词.词语颗粒度最非常小的，所涉及到的词大约是10万左右，
     *基本分词速度非常快，在macAir上.能到每秒300w字每秒，同时准确率也很高.但是对于新词他的功能十分有限。
     * eg:  String txt = "腾讯公司的员工非常多，有40678个员工，老板是马化腾";
     * return :腾讯/nt,公司/n,的/u,员工/n,非常/d,多/a,，/w,有/v,40678/m,个/q,员工/n,，/w,老板/n,是/v,马/n,化/v,腾/v
     */
    public static String BaseAnalysis(String txt) {
        return BaseAnalysis.parse(txt).toString();
    }
    /**
     * 1.基本分词-BaseAnalysisWithOutNature(无词性)
     *基本就是保证了最基本的分词.词语颗粒度最非常小的，所涉及到的词大约是10万左右，
     *基本分词速度非常快，在macAir上.能到每秒300w字每秒，同时准确率也很高.但是对于新词他的功能十分有限。
     * eg:  String txt = "腾讯公司的员工非常多，有40678个员工，老板是马化腾";
     * return :腾讯,公司,的,员工,非常,多,，,有,40678,个,员工,，,老板,是,马,化,腾
     */
    public static String BaseAnalysisWithOutNature(String txt) {
        return BaseAnalysis.parse(txt).toStringWithOutNature();
    }
    /**
     * 2.精准分词-ToAnalysis
     * 它在易用性,稳定性.准确性.以及分词效率上.都取得了一个不错的平衡。
     * 如果你初次赏识Ansj如果你想开箱即用.那么就用这个分词方式是不会错的。
     * eg:  String txt = "腾讯公司的员工非常多，有40678个员工，老板是马化腾";
     * return :腾讯,公司,的,员工,非常,多,，,有,40678个员工,，,老板,是,马化腾
     */
    public static String ToAnalysis(String txt) {
        return ToAnalysis.parse(txt).toStringWithOutNature();
    }
    /**
     *3.nlp分词-NlpAnalysis
     * nlp的适用方式：语法实体名抽取.未登录词整理.只要是对文本进行发现分析等工作
     * eg:  String txt = "腾讯公司的员工非常多，有40678个员工，老板是马化腾";
     * return :腾讯公司,的,员工,非常,多,，,有,40678个员工,，,老板,是,马化腾
     */
    public static String NlpAnalysis(String txt) {
        return NlpAnalysis.parse(txt).toStringWithOutNature();
    }
    /**
     *4.面向索引的分词-IndexAnalysis
     * 面向索引的分词，故名思议就是适合在lucene等文本检索中用到的分词。
     * 主要考虑以下两点：
     * 召回率召回率是对分词结果尽可能的涵盖。比如对“上海虹桥机场南路” 召回结果是[上海/ns, 上海虹桥机场/nt, 虹桥/ns, 虹桥机场/nz, 机场/n, 南路/nr]
     * 准确率其实这和召回本身是具有一定矛盾性的Ansj的强大之处是很巧妙的避开了这两个的冲突 。
     * 比如我们常见的歧义句“旅游和服务”->对于一般保证召回 。
     * 大家会给出的结果是“旅游 和服 服务” 对于ansj不存在跨term的分词。意思就是。召回的词只是针对精准分词之后的结果的一个细分。比较好的解决了这个问题
     * eg:  String txt = "腾讯公司的员工非常多，有40678个员工，老板是马化腾";
     * return :腾讯,公司,的,员工,非常,多,，,有,40678个员工,，,老板,是,马化腾
     */
    public static String IndexAnalysis(String txt) {
        return IndexAnalysis.parse(txt).toStringWithOutNature();
    }

    public static String addLibrary(String libPath,String txt){
        StringBuffer res=new StringBuffer();
        Forest forest = null;
        try {
            //加载字典文件
            forest=Library.makeForest(AnsjUtil.class.getResourceAsStream(libPath));
            //传入forest
            Result result=NlpAnalysis.parse(txt,forest);
            List<Term> termList=result.getTerms();
            for(Term term:termList){
                res.append(term.getName()).append(",");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res.toString();
    }

    public static void main(String[] args) {
        try {
            ToAnalysis("");
            reflect(new AppInfo());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void reflect(Object clazz ) throws Exception {
        Class cls = clazz.getClass();
        Field[] fields = cls.getDeclaredFields();
        for (int i = 0; i < fields.length; i++) {
            Field f = fields[i];
            f.setAccessible(true);
            System.out.println("属性名:" + f.getName() + " 属性值:" + f.get(clazz));
        }
    }

}
