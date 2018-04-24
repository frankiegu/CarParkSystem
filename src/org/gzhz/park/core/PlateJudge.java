package org.gzhz.park.core;

import static org.bytedeco.javacpp.opencv_core.*;
import static org.bytedeco.javacpp.opencv_imgproc.resize;

import java.util.Vector;

import org.bytedeco.javacpp.opencv_core.Mat;
import org.bytedeco.javacpp.opencv_core.Rect;
import org.bytedeco.javacpp.opencv_core.Size;
import org.bytedeco.javacpp.opencv_ml.SVM;
import org.springframework.stereotype.Component;

/**
 * 车牌判断
 * @author eguid
 *
 */

public class PlateJudge {

    public PlateJudge() {
        loadModel();
    }

    public void loadModel() {
        loadModel(path);
    }

    public void loadModel(String s) {
        svm.clear();
        s = s.substring(1);//本来是为了去掉JAVA的路径前面的/，但是部署到服务器要注释掉
        System.out.println("当前得到的svm模型路径：" + s);
        svm=SVM.loadSVM(s, "svm");
    }
    
    /**
     * 对单幅图像进行SVM判断
     * 
     * @param inMat
     * @return
     */
    public int plateJudge(final Mat inMat) {
        Mat features = this.features.getHistogramFeatures(inMat);
        
        // 通过直方图均衡化后的彩色图进行预测
        Mat p = features.reshape(1, 1);
        p.convertTo(p, CV_32FC1);

        float ret = svm.predict(p);
       
        return (int) ret;
    }

    /**
     * 对多幅图像进行SVM判断
     * 
     * @param inVec
     * @param resultVec
     * @return
     */
    public int plateJudge(Vector<Mat> inVec, Vector<Mat> resultVec) {

        for (int j = 0; j < inVec.size(); j++) {
            Mat inMat = inVec.get(j);
            if (1 == plateJudge(inMat)) {
                resultVec.add(inMat);
            } else { // 再取中间部分判断一次
                int w = inMat.cols();
                int h = inMat.rows();
                Mat tmpDes = inMat.clone();
                Mat tmpMat = new Mat(inMat, new Rect((int) (w * 0.05), (int) (h * 0.1), (int) (w * 0.9),
                        (int) (h * 0.8)));
                resize(tmpMat, tmpDes, new Size(inMat.size()));

                if (plateJudge(tmpDes) == 1) {
                    resultVec.add(inMat);
                }
            }
        }

        return 0;
    }

    public void setModelPath(String path) {
        this.path = path;
    }

    public final String getModelPath() {
        return path;
    }
   
    private SVM svm = SVM.create();

    /**
     * EasyPR的getFeatures回调函数, 用于从车牌的image生成svm的训练特征features
     */
    private SVMCallback features = new Features();

    /**
     * 模型存储路径
     */
//    private String path = this.getClass().getResource("/").getPath() + "/res/model/svm.xml";
    private String path = (this.getClass().getResource("").getPath() + "SVM/svm.xml");//电脑端用
//    private String path = ("/home/ubuntu/apache-tomcat-8.5.29/webapps/CarParkSystem/WEB-INF/classes/org/gzhz/park/core/SVM/svm.xml");//部署服务器用
//    private String path = "F:/ChuanYiJava/UTF8Mode/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/CarParkSystem/WEB-INF/classes/org/gzhz/park/core/SVM/svm.xml";
    
}
