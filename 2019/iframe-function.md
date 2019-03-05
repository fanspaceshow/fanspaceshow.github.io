（1）子页面调用父页面的方法或者变量：

window.parent.方法()或者变量名
window.parent相当于定位到父页面  之后的操作和在父页面中写代码一样写

```javascript
window.parent.aa();//调取aa函数
window.parent.bb;//调取bb变量
 
例如：想在子页面中得到id为aaa的文本框的值
 
window.parent.$("#aaa").val();//这种写法的前提是引用了jquery 
 
window.parent.getElementById("aaa").value; //js的写法

```

（2）父页面调取子页面

主要是通过contentWindow定位到子页面

```javascript
document.getElementById("childframe").contentWindow.childtest();
//调取子页面中的childtest方法 js的写法
 
var childWindow = $("#addFrame")[0].contentWindow;//获取子窗体中的对象
childWindow.formSubmit();//调取子页面的formSubmit方法 jquery的写法
//注释：其中 childframe和addFrame 都时iframe的id
````

以上这篇浅谈js中子页面父页面方法 变量相互调用就是小编分享给大家的全部内容了，希望能给大家一个参考，也希望大家多多支持脚本之家。


<a href="https://www.jb51.net/article/89816.htm" target="_blank">浅谈js中子页面父页面方法 变量相互调用</a> 