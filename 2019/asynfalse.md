``` javascript
$.ajax({
      async : false,
      cache : false,
      type : 'POST',
      url : '',// 请求的action路径
      data : formData,
      error : function() {// 请求失败处理函数
      },
      success : function(data) {
	  }
	  )
```