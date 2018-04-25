package org.gzhz.tool;
/** 
* @author  作者 E-mail: 郭智雄
* @date 创建时间：2018年4月25日 上午9:02:41 
* @version 1.0 
* @parameter  
* @since  
* @return  
*/
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;



@Aspect
@Component
public class OperLogInterceptor {
    //这里写的为环绕触发 ，可自行根据业务场景选择@Before @After
    //触发条件为：com.opr包下面所有类且注解为OperLog的
    @Around("within(com.opr..*) && @annotation(operLog)")
    public Object doAroundMethod(ProceedingJoinPoint pjd,OperLog operLog) throws Throwable {
        long startTime=System.currentTimeMillis();//开始时间
        
        Object[] params = pjd.getArgs();//获取请求参数
        System.out.println("监听到传入参数为:");
        for(Object param:params) {
            System.out.println(param);
        }
        
        //###################上面代码为方法执行前#####################
        Object result  = pjd.proceed();//执行方法，获取返回参数
        //###################下面代码为方法执行后#####################
        System.out.println("返回参数为:" + result);
        
        String user = operLog.userIndex()==-1?operLog.user():(String)params[operLog.userIndex()];//操作人
        String operType = operLog.operType();//操作类型
        System.out.println("操作人: " + user +" 操作类型: " + operType);
        
        long endTime=System.currentTimeMillis();//结束时间
        float excTime=(float)(endTime-startTime)/1000;
        System.out.println("执行时间:"+excTime+"s");
        System.out.println("#######################分隔符##########################");
        return result;
        
    } 
    
    
}