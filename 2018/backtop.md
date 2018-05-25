&nbsp;&nbsp;网站中的回到顶部功能有益于增强用户体验，当一个页面很长很长时，回到顶部是必不可少的。  

&nbsp;&nbsp;回到顶部按钮，可以使用图片，背景图，矢量字体图标，也可以使用代码 css 生成。这里使用 css 生成的方法。  

```html
<a href="" title="回到顶部" id="toTop">
    <span id="arrow"></span>
</a>
```

```CSS
#toTop {
    display: none;
    position: fixed; /* 固定定位 */
    right: 10px;
    bottom: 30px;
    background-color: #e6e6e6;
    height: 40px;
    line-height: 40px;
    width: 40px;
    transition: all .4s ease .1s;
}
#toTop:hover { background-color: #b7b7b7; }
#toTop span {
    position: relative; /* 相对定位，以便其伪元素绝对定位 */
    top: 5px;
    left: 15px; /* 变换为顺时针旋转 30°，通过数学角度计算后适当调整位置 */
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: #fff;
    border-radius: 3px;
    -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
            transform: rotate(30deg);
}
#toTop span:after {
    content: "";
    position: absolute; /* 伪元素中是相对于 #toTop span 绝对定位 */
    top: -5px;
    left: 8px;
    display: inline-block;
    width: 3px;
    height: 20px;
    background-color: #fff;
    border-radius: 3px;
    -webkit-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
            transform: rotate(-60deg);
}
```
使用 css 代码生成的回到顶部按钮如下：


对于回到顶部的多种方法总结如下：

1. 锚标记

"#" 包含了一个位置信息，默认的锚是 #top 也就是网页的顶端。

方法：

1. 对回到顶部的按钮使用锚标记，即 a 标签，
```
<a href="#top"  title="回到顶部">回到顶部</a>
```
2. 在页面的顶部放置定位目标，<a name="top" id="top"></a>，这里的 name 属性和 id 属性的值比第一步骤中的 href 属性的值少一个 #，name 和 id 选择一个即可。

缺点：

会在地址栏里多出 # 符号。

2. JavaScript Scroll 事件:
```
<a href="javascript:scroll(0, 0)" title="返回顶部">返回顶部</a>
```
scroll(0, 0) 中第一个参数是相对于屏幕的水平位置，第二个参数是相对于屏幕的垂直位置。可调整其中任意一个值。  

3. animate 缓慢回到顶部：
```
$(window).scroll(function () {
    if($(window).scrollTop()>=100) {
        $("#toTop").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () { 
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});
```
  
[点击跳转到原文](https://www.cnblogs.com/xinjie-just/archive/2016/10/08/5937703.html)  
<a href="https://www.cnblogs.com/xinjie-just/archive/2016/10/08/5937703.html" target="_blank">点击跳转到原文</a>
