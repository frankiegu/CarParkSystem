package org.gzhz.tool;
/** 
* @author  作者 E-mail: 郭智雄
* @date 创建时间：2018年4月25日 上午9:01:19 
* @version 1.0 
* @parameter  
* @since  
* @return  
*/
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//这里不明白的童鞋可以抽空看看自定义注解
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
public @interface OperLog {
    
    //操作类型
    String operType() default "";
    //操作人
    String user() default "";
    //操作人下标
    int userIndex() default -1;
    
}
