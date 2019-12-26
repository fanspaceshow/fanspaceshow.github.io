### JasperReport 6.x PDF中文显示问题解决办法详解

![img](img/20191226124734.png)

``` xml
	<fontFamily name="雅黑宋体">
		<normal>net/sf/jasperreports/fonts/dejavu/雅黑宋体.ttf</normal>
		<bold>net/sf/jasperreports/fonts/dejavu/雅黑宋体.ttf</bold>
		<italic>net/sf/jasperreports/fonts/dejavu/雅黑宋体.ttf</italic>
		<boldItalic>net/sf/jasperreports/fonts/dejavu/雅黑宋体.ttf</boldItalic>
		<pdfEncoding>Identity-H</pdfEncoding>
		<pdfEmbedded>true</pdfEmbedded>
		<exportFonts>
			<export key="net.sf.jasperreports.html">'雅黑宋体', Arial, Helvetica, sans-serif</export>
			<export key="net.sf.jasperreports.xhtml">'雅黑宋体', Arial, Helvetica, sans-serif</export>
		</exportFonts>

	</fontFamily>
```


```cmd
E:\Maven\repository\net\sf\jasperreports\jasperreports-fonts\6.0.0>jar cvfm jasp
erreports-fonts-6.0.0.jar jasperreports-fonts-6.0.0\META-INF\MANIFEST.MF -C jasp
erreports-fonts-6.0.0/ .
```

```cmd
jar cvfm jasperreports-fonts-6.0.0.jar jasperreports-fonts-6.0.0\META-INF\MANIFEST.MF -C jasperreports-fonts-6.0.0/ .
```


- <a href="https://www.jianshu.com/p/8dba0bb2f5dd" type="text/html" target="_blank">JasperReport 6.x PDF中文显示问题解决办法详解</a> 