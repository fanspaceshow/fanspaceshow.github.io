```java
// 获得全球唯一性的id
public static String getUUID() {
	String id = UUID.randomUUID().toString();
	// 生成的id942cd30b-16c8-449e-8dc5-028f38495bb5中间含有横杠
	// 用来生成数据库的主键id是很实用的。
	id = id.replace("-", "");// 替换掉中间的那个斜杠
	return id;
}
    
```