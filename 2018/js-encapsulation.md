## javaScript封装的各种写法

<a href="https://blog.csdn.net/AlbenXie/article/details/70208473" target="_blank">javaScript封装的各种写法</a>  


&nbsp;&nbsp;&nbsp;&nbsp;在javascript的世界里，写法是个神奇的现象，真是百家齐开放啊！每次看到老外写的js组件，思想和写法都怪异，就没看到一个js结构基本相同的代码出来。今天，我就来谈谈js写法，我在开发过程中，也写了几种。对于性能方面，如果代码结构或逻辑写的不好，会造成计算机CPU的运算加大，运行性能降低，js的写法对性能的影响也是至关重要的。

&nbsp;&nbsp;&nbsp;&nbsp;通常写js组件开发的，都会用到匿名函数的写法去封装一个对象，与外界形成一个闭包的作用域。（这里对于js的继承，多态，我就不多说了，高级程序员应该具备这些知识，如果您也做过java开发，这个概念太熟悉了。）

&nbsp;&nbsp;&nbsp;&nbsp;主要对封装进行研究，因为前后台都会涉及到面向对象的概念，对于封装，怎么封装，封装的性能，等等很重要概念。封装（在程序世界是第一概念，我个人认为），全天下漫天遍野的封装，JQuery，EXT和Prototype.js封装的是javascript，jQuery uI和jQuery mobile封装着jQuery，java中的JDBC在spirng,Hibernate等框架封装着，在这里列举几个例子，还有很多种不一一介绍。

&nbsp;&nbsp;&nbsp;&nbsp;回到主题javaScript封装写法，先来看看一个简单的

```javascript
function hello() {
	var a = 'hello';
	alert(a);
}
```

&nbsp;&nbsp;&nbsp;&nbsp;js函数是最原始，最基础的封装，懂js一目了然，如果你的页面不需要很多js交互操作，就可以用这种简单的方式，如果你喜欢用JQuery,则需要写成这样

```javascript
$(function() {
	$('#id').click(function() {
		alert('hello');
	})
});
```

&nbsp;&nbsp;&nbsp;&nbsp;再深层次封装写法，如果遇到大量使用js操作，单凭每个小的函数无法满足，因为它们存在一个公共的域中，写法多而散很容易造成了很多bug因素，需要规整。js创造者给我们提供了一个叫匿名函数，顾名思义，匿名函数就是没有实际名字的函数，它的格式很多种，！function(){}(),(function(){})(),(function(){}()),new function(){},void function(){}();JQuery.js就是一个匿名函数封装,先看最常用的

```javascript
(function() {
	star.init = (function(name) {
		var e = new Editor(name, Data.toolbarData);
	});
})();
```

&nbsp;&nbsp;&nbsp;&nbsp;如果开发一些js组件的时候，可以先创建一个对象，给这个对象属性和方法，让这个对象能够单独操作和可以和其他对象合作

```javascript
var klm = klm || {};

klm = (function() {

	//第一个写法
	klm.init = function() {

		alert('hello');

	}

	//第二个写法
	klm.browser = (function(ua) {
		var b = {
			msie: /msie/.test(ua) && !/opera/.test(ua),
			opera: /opera/.test(ua),
			safari: /webkit/.test(ua) && !/chrome/.test(ua),
			firefox: /firefox/.test(ua),
			chrome: /chrome/.test(ua)
		};
	})(window.navigator.userAgent.toLowerCase());

	//将其定义方法以接口方式返回给外界引用
	return {
		init: klm.init,
		browser: klm.browser
	}

})();
```

&nbsp;&nbsp;&nbsp;&nbsp;接下来这种js封装写法是我自己比较喜欢的

``` javascript

var myOpinion = myOpinion || {};
myOpinion.prototype = {
	init: function(obj, i) {
		alert('hello');
	},
	closeWindow: function(obj, d) {
		obj.click(function() {
			d.hide();
		});
	}
}
$(function() {
	var my = myOpinion.prototype;
	my.init($(".z-sidebar li em"), $("#contact"));
	$("#contact").add(my.closeWindow($(".z-sidebar li em"), $("#contact")));

});

```

&nbsp;&nbsp;&nbsp;&nbsp;这种方式先通过prototype继承方式把每一个小的操作封装成属性，init和closeWindow，然后可以进行初始化加载如my.init();也可以绑定到某个操作事件上如$("#contact").add(my.closeWindow());这些封装一气而成。

还有定义单个属性封装

``` javascript

WinShow.create = function(c, body) {
	var _head = '<div class="+ c.heacss +"><span class="+ c.concss +">' + c.title + '</span></div>';
	this.container.innerHTML = _head;
	return this.container;
	this.container.onclick = function(e) {

		alert('hello');

	}
}

```

&nbsp;&nbsp;&nbsp;&nbsp;在这里我创建一个create属性以匿名函数形式封装一段HTML代码，并给这个 HTML代码绑定点击事件。

&nbsp;&nbsp;&nbsp;&nbsp;列举以上几种js封装形式，但是小生还在研究中，这几种都能实现相同操作，可是写法有些区别，对于性能方面谁有更好的见解可以点评我，进行交流。
