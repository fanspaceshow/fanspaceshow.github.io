
```javascript
(function() {
	if (!window.project) {
		window.project = {};
	}
	window.project = {
		init: function() {
			alert("test");
		},
		show: function() {
			alert("test2");
		}

	};　　
})();
```

　　调用：project.init();  
自己的修改  

```javascript
(function() {
	if (!window.project) {
		window.project = {};
	}
	window.project = {
		init: function() {
			alert("test");
		},
		show: function() {
			alert("test2");
		}

	};　　
})(jQuery);
```

elfinder插件就是这么封装的。地址：  
<https://github.com/Studio-42/elFinder>
/////////////////////////////////////////////////////////////////////////////

```javascript
function Range() {}
Range.prototype = {
	init: function() {
		alert("XXX");
	},
	show: function() {
		alert("YYY");
	}
};

function RangeChildren() {}
RangeChildren.prototype = Range.prototype;
RangeChildren.prototype.add = function() {
	alert("ADD");
};
```

调用：  

```javascript
var rc = new RangeChildren();
rc.add();
rc.show();
```

``` javascript
//工厂方式:封装函数
function test(name) {
    var obj = new Object();
        obj.name = name;
        obj.sayName = function () {
            alert(this.name);
        };
        //抛出
    return obj;
}
var p1 = test('小明');
p1.sayName();
var p2 = test('小王');
p2.sayName()
```
---

> 可参考其它的封装方法

原文地址：<a href="http://zm603380946.iteye.com/blog/1834010" target="_blank">封装属于自己的JS</a>  
<a href="https://blog.csdn.net/yanlzhl/article/details/54136724" target="_blank">封装自己的js库(一)---仿照JQuery</a>
