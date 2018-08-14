下文摘自某网友的总结：  

```javascript
(function($){...})(jQuery)
```

(function($){...})(jQuery)实际上是匿名函数，不懂得朋友可以继续往下看。  
这里实际上是匿名函数 function(arg){...} 这就定义了一个匿名函数，参数为arg。 而调用函数时，是在函数后面写上括号和实参的，由于操作符的优先级，函数本身也需要用括号，即：  
``` javascript
 (function(arg){...})(param)  
```
这就相当于定义了一个参数为arg的匿名函数，并且将param作为参数来调用这个匿名函数，而
``` javascript
(function($){...})(jQuery)
```
则是一样的，之所以只在形参使用$，是为了不与其他库冲突，所以实参用

``` javascript
jQuery var fn = function($){....}; fn(jQuery);
```
``` javascript
(funtion(){})();
```
立即执行函数；相当于先申明一个函数，声明完后直接调用；如果参数如：  

``` javascript
(funtion(str){alert(str)})("output")；
```

相当于：

```javascript
funtion OutPutFun(str){alert(str);};OutPutFun("output");
```
