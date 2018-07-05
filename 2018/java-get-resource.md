### 一、 相对路径的获得
说明:相对路径(即不写明时候到底相对谁)均可通过以下方式获得（不论是一般的java项目还是web项目）
```java
String relativelyPath=System.getProperty("user.dir"); 
```
上述相对路径中，java项目中的文件是相对于项目的根目录web项目中的文件路径视不同的web服务器不同而不同（tomcat是相对于tomcat安装目录\bin）

### 二 类加载目录的获得(即当运行时某一类时获得其装载目录)
1.1)通用的方法一(不论是一般的java项目还是web项目,先定位到能看到包路径的第一级目录)
```java
InputStreamis=TestAction.class.getClassLoader().getResourceAsStream("test.txt"); 
```
(test.txt文件的路径为
项目名\src\test.txt;类TestPath所在包的第一级目录位于src目录下)


上式中将TestPath，test.txt替换成对应成相应的类名和文件名字即可

1.2)通用方法二 (此方法和1.1中的方法类似,不同的是此方法必须以'/'开头) InputStream is=Test1.class.getResourceAsStream("/test.txt");
(test.txt文件的路径为 项目名\src\test.txt,类Test1所在包的第一级目录位于src目录下)


### 三 web项目根目录的获得(发布之后)  
#### 1 从servlet出发  
可建立一个servlet在其的init方法中写入如下语句(没有请求的话会抛空指针导常)

```java
ServletContext s1=this.getServletContext();  
String temp=s1.getRealPath("/"); (关键)  
```
结果形如：F:\tomcat-6.0.36\webapps\test\(test为项目名字)
如果是调用了s1.getRealPath("")则输出F:\tomcat-6.0.36\webapps\test(少了一个"\")  

#### 2 从httpServletRequest出发(没有请求的话会抛空指针导常)
```java
String path=request.getSession().getServletContext().getRealPath("/");
```
结果形如: F:\tomcat-6.0.36\webapps\test\

#### 四 classpath的获取(在Eclipse中为获得src或者classes目录的路径),放在监听器，可以窗口启动获取路径

##### 方法一 
```java
Thread.currentThread().getContextClassLoader().getResource("").getPath()
String path = Thread.currentThread().getContextClassLoader()
.getResource("").getPath();
System.out.println("path========" + path);
```
输出: path========/F:/tomcat-6.0.36/webapps/test/WEB-INF/classes/

##### 方法二 
```java
JdomParse.class.getClassLoader().getResource("").getPath() (JdomParse为src某一个包中的类,下同)
eg:String p1=JdomParse.class.getClassLoader().getResource("").getPath();
System.out.println("JdomParse.class.getClassLoader().getResource--"+p1);
```
输出:JdomParse.class.getClassLoader().getResource-/F:/tomcat-6.0.36/webapps/test/WEB-INF/classes/  

另外,如果想把文件放在某一包中,则可以 通过以下方式获得到文件(先定位到该包的最后一级目录)

eg 
```java
String p2=JdomParse.class.getResource("").getPath();
System.out.println("JdomParse.class.getResource---"+p2);
```
输出:JdomParse.class.getResource--/F:/tomcat-6.0.36/webapps/test/WEB-INF/classes/
(JdomParse为src目录下jdom包中的类)

#### 四 属性文件的读取:
##### 方法 一
```java
InputStream in = new BufferedInputStream( new FileInputStream(name)); 　　
Properties p = new Properties();

p.load(in);
```
注意路径的问题,做执行之后就可以调用p.getProperty("name")得到对应属性的值

#### 方法二
```java
Locale locale =Locale.getDefault();
ResourceBundle localResource = ResourceBundle.getBundle("test/propertiesTest",locale);
String value = localResource.getString("test");
System.out.println("ResourceBundle: " + value);
```
工程src目录下propertiesTest.properties(名字后缀必须为properties)文件内容如下:
```java
test=hello word
```

#### 五 不通过Servlet获取路径
##### 第一种实现

Java代码
```java
URL url = ClassLoader.getSystemClassLoader().getResource("./");
File file =new File(url.getPath());
File parentFile =new File(file.getParent());
System.out.println("webRoot:"+parentFile.getParent());
```
##### 第二种实现
首先写一个接听类 (推荐使用，容器启动时就执行，不会抛空指针异常,适合做定时器任务来删除服务器文件的路径)
Java代码:
```java
package com.chinacreator.report.listener;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
/**
* @authorxiaoqun.yi
*/
public class PathListener implementsServletContextListener {
private staticServletContext servletContext;
public voidcontextDestroyed(ServletContextEvent sce) {
this.servletContext= sce.getServletContext();
System.out.println("path=======:"+servletContext.getRealPath("/"));
}
public voidcontextInitialized(ServletContextEvent arg0) {
}
}
```
在web.xml中加入如下配置

Java代码 :
```java
com.chinacreator.report.listener.PathListener
```
#### 六、Java中的getResourceAsStream有以下几种：
1. Class.getResourceAsStream(String path) ： path 不以’/'开头时默认是从此类所在的包下取资源，以’/'开头则是从ClassPath根下获取。其只是通过path构造一个绝对路径，最终还是由 ClassLoader(类加载器)(获取资源)

2. Class.getClassLoader.getResourceAsStream(String path) ：默认则是从ClassPath根下获取，path不能以’/'开头，最终是由ClassLoader获取资源。

3. ServletContext. getResourceAsStream(String path)：默认从WebAPP根目录下取资源，Tomcat下path是否以’/'开头无所谓，当然这和具体的容器实现有关。

4. Jsp下的application内置对象就是上面的ServletContext的一种实现。

其次，getResourceAsStream 用法大致有以下几种：

第一： 要加载的文件和.class文件在同一目录下，例如：com.x.y 下有类me.class ,同时有资源文件myfile.xml

那么，应该有如下代码：

me.class.getResourceAsStream("myfile.xml");

第二：在me.class目录的子目录下，例如：com.x.y 下有类me.class ,同时在 com.x.y.file 目录下有资源文件myfile.xml

那么，应该有如下代码：
```java
me.class.getResourceAsStream("file/myfile.xml");
```
第三：不在me.class目录下，也不在子目录下，例如：com.x.y 下有类me.class ,同时在 com.x.file 目录下有资源文件myfile.xml

那么，应该有如下代码：
```java
me.class.getResourceAsStream("/com/x/file/myfile.xml");
```
总结一下，可能只是两种写法

第一：前面有 “ / ”

“ / ”代表了工程的根目录，例如工程名叫做myproject，“ / ”代表了myproject
```java
me.class.getResourceAsStream("/com/x/file/myfile.xml");
```
第二：前面没有 “ / ”

代表当前类的目录
```java
me.class.getResourceAsStream("myfile.xml");

me.class.getResourceAsStream("file/myfile.xml");
```