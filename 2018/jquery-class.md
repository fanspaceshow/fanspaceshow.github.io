[封装属于自己的JS](http://zm603380946.iteye.com/blog/1834010)

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
