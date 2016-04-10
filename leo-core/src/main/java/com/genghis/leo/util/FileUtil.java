package com.genghis.leo.util;

import info.monitorenter.cpdetector.io.*;

import java.io.*;
import java.nio.charset.Charset;

/**
 * Created by genghis on 14-5-5.
 */
public class FileUtil {

    public static String getCharset(File file) throws IOException {
        /*------------------------------------------------------------------------
          detector是探测器，它把探测任务交给具体的探测实现类的实例完成。
          cpDetector内置了一些常用的探测实现类，这些探测实现类的实例可以通过add方法
          加进来，如ParsingDetector、 JChardetFacade、ASCIIDetector、UnicodeDetector。
          detector按照“谁最先返回非空的探测结果，就以该结果为准”的原则返回探测到的
          字符集编码。
        --------------------------------------------------------------------------*/
        CodepageDetectorProxy detector = CodepageDetectorProxy.getInstance();
        /*-------------------------------------------------------------------------
          ParsingDetector可用于检查HTML、XML等文件或字符流的编码,构造方法中的参数用于
          指示是否显示探测过程的详细信息，为false不显示。
        ---------------------------------------------------------------------------*/
        detector.add(new ParsingDetector(false));
        /*--------------------------------------------------------------------------
          JChardetFacade封装了由Mozilla组织提供的JChardet，它可以完成大多数文件的编码
          测定。所以，一般有了这个探测器就可满足大多数项目的要求，如果你还不放心，可以
          再多加几个探测器，比如下面的ASCIIDetector、UnicodeDetector等。
         ---------------------------------------------------------------------------*/
        detector.add(JChardetFacade.getInstance());
        //ASCIIDetector用于ASCII编码测定
        detector.add(ASCIIDetector.getInstance());
        //UnicodeDetector用于Unicode家族编码的测定
        detector.add(UnicodeDetector.getInstance());
        Charset charset = null;
        try {
            charset = detector.detectCodepage(file.toURL());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        if (charset != null) {
            return charset.name();
        } else {
            return null;
        }
    }

    public static String getTextFromText(File file, String lineSeparator) {
        try {
            InputStreamReader isr = new InputStreamReader(new FileInputStream(file), getCharset(file));
            BufferedReader br = new BufferedReader(isr);

            StringBuilder sb = new StringBuilder("");
            String temp;
            while ((temp = br.readLine()) != null) {
                sb.append(temp).append(lineSeparator);
            }
            br.close();
            System.out.println(file.getAbsolutePath());
            return sb.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean createDirectory(String directory) {
        File dir = new File(directory);
        return dir.mkdirs();
    }
}
