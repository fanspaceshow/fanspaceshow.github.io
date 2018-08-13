## jQuery,选择器，选择父页面的元素
最近操作iframe页面元素比较多。涉及到在子页面里控制父页面元素的显示，  
使用parent.document.getElementById("filterToFloders")获取父页面里id为filterToFloders的元素，  
或者是从顶层window下找到iframe页面元素的操作-window.parent.frames["setFilterFrame"].document.getElementById("targetFloder")，  
获取元素。但是现在页面里多半是使用jQuery来获取DOM元素，这样混杂着原生js获取DOM元素的操作，  
让代码整体看起来不伦不类。后来才发现jQuery选择器本身还可以带一个参数，传递选择的范围的，  
$("元素标识","元素所在范围")。所让代码变得简洁很多。而且风格统一。  

如下对等操作：  
``` javascript
javascript----------------------------------------------------------------------------jQuery

parent.document.getElementById("filterToFloders")-----------------------------------$("#filterToFloders",parent.document) //子页面获取iframe父页面的DOM

window.parent.frames["setFilterFrame"].document.getElementById("targetFloder")----$("#targetFloder",window.parent.frames["setFilterFrame"].document)//子页面获取父页面里的其他iframe子页面里的DOM

window.frames["iframeChild"].document.getElementById("floader")------------------$("#floader",window.frames["iframeChild"].document)//父页面获取子页面的DOM元素
```
除此之前还有另一种方法：$(window.frames["iframeChild"].document).find("#floader")（这种方法看到的，还没实际验证。）

另外可以先用jQuery选中目标父页面或者是目标子页面，在再这页面上进行下一层级DOM元素的寻找。

父页面获取子页面元素：
``` javascript
javascript:window.frames["iframeChild"].document    //假如iframe的id为iframeChild

jQuery:$(window.frames["iframeChild"].document)    //假如iframe的id为iframeChild
```
接着获取子页面元素：
``` javascript
$(window.frames["iframeChild"].document).find("#floader")

$("#floader",window.frames["iframeChild"].document)
```
子页面获取父页面元素雷同。关键是获取要找的页面就行。


获取dialog的子页面的document  
``` javascript
var formobj = $("#formobj",document.getElementById('myIframe').contentWindow.document);
```
