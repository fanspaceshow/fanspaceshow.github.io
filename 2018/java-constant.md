``` java
/**
 * Method One
 */  
interface ConstantInterface {  
    String SUNDAY = "SUNDAY";  
    String MONDAY = "MONDAY";  
    String TUESDAY = "TUESDAY";  
    String WEDNESDAY = "WEDNESDAY";  
    String THURSDAY = "THURSDAY";  
    String FRIDAY = "FRIDAY";  
    String SATURDAY = "SATURDAY";  
}  
/**
 * Method Two  
 */  
enum ConstantEnum {  
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY  
}  
/**
 * Method Three
 */  
class ConstantClassField {  
    public static final String SUNDAY = "SUNDAY";  
    public static final String MONDAY = "MONDAY";  
    public static final String TUESDAY = "TUESDAY";  
    public static final String WEDNESDAY = "WEDNESDAY";  
    public static final String THURSDAY = "THURSDAY";  
    public static final String FRIDAY = "FRIDAY";  
    public static final String SATURDAY = "SATURDAY";  
}  
/**
 * Method Four
 * http://www.ibm.com/developerworks/cn/<a href="http://lib.csdn.net/base/javase" class='replace_word' title="Java SE知识库" target='_blank' style='color:#df3434; font-weight:bold;'>Java</a>/l-java-interface/index.html
 */  
class ConstantClassFunction {  
    private static final String SUNDAY = "SUNDAY";  
    private static final String MONDAY = "MONDAY";  
    private static final String TUESDAY = "TUESDAY";  
    private static final String WEDNESDAY = "WEDNESDAY";  
    private static final String THURSDAY = "THURSDAY";  
    private static final String FRIDAY = "FRIDAY";  
    private static final String SATURDAY = "SATURDAY";  
    public static String getSunday() {  
        return SUNDAY;  
    }  
    public static String getMonday() {  
        return MONDAY;  
    }  
    public static String getTuesday() {  
        return TUESDAY;  
    }  
    public static String getWednesday() {  
        return WEDNESDAY;  
    }  
    public static String getThursday() {  
        return THURSDAY;  
    }  
    public static String getFirday() {  
        return FRIDAY;  
    }  
    public static String getSaturday() {  
        return SATURDAY;  
    }  
}  
public class TestConstant {  
    static final String day = "saturday";  
    public static void main(String[] args) {  
        System.out.println("Is today Saturday?");  
        System.out.println(day.equalsIgnoreCase(ConstantInterface.SATURDAY));  
        System.out.println(day.equalsIgnoreCase(ConstantEnum.SATURDAY.name()));  
        System.out.println(day.equalsIgnoreCase(ConstantClassField.SATURDAY));  
        System.out.println(day.equalsIgnoreCase(ConstantClassFunction  
                .getSaturday()));  
    }  
}  
```

方法一采用接口(Interface)的中变量默认为static final的特性。

方法二采用了Java 5.0中引入的Enum类型。

方法三采用了在普通类中使用static final修饰变量的方法。

方法四类似方法三，但是通过函数来获取常量。



首先定义全局变量似乎有违Java的面向对象的封装特性，增加的耦合。所以最佳的方法是避免定义全局变量。如果是参数等，可以写入配置文件。如果实在是必须的，方法二是最为推荐的。方法三是大家都能想到的，非常的直观。方法一和方法三本质上一样。方法四提供了灵活性，具体参考引用【1】。

原文链接：
<a href="http://blog.csdn.net/autofei/article/details/6419460" target="_blank">http://blog.csdn.net/autofei/article/details/6419460</a>  

参考

【1】<a href=" http://www.ibm.com/developerworks/cn/java/l-java-interface/index.html" target="_blank"> http://www.ibm.com/developerworks/cn/java/l-java-interface/index.html</a>  
---  

原文链接：
<a href="https://blog.csdn.net/zhang_980/article/details/72573229" target="_blank">  
https://blog.csdn.net/zhang_980/article/details/72573229</a>
