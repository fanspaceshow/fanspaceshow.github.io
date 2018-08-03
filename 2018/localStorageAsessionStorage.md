## localStorage和sessionStorage操作
setItem存储value
用途：将value存储到key字段
用法：.setItem( key, value)
代码示例：

	sessionStorage.setItem("key", "value"); 	localStorage.setItem("site", "js8.in");
getItem获取value
用途：获取指定key本地存储的值
用法：.getItem(key)
代码示例：

	var value = sessionStorage.getItem("key"); 	var site = localStorage.getItem("site");
removeItem删除key
用途：删除指定key本地存储的值
用法：.removeItem(key)
代码示例：

	sessionStorage.removeItem("key"); 	localStorage.removeItem("site");
clear清除所有的key/value
用途：清除所有的key/value
用法：.clear()
代码示例：

	sessionStorage.clear(); 	localStorage.clear();
