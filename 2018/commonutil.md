``` java
package com.circle.core.util;

import java.util.HashMap;
import java.util.Map;

public class CommonUtil {

	/**
	 * queryString = session.getQueryString()
	 * queryString是通过session自己的方法获取Get请求的参数字符串，不是URL
	 * @param queryString
	 * @return
	 */
	// 自己写的@QueryParam方法
	public static Map<String, String> getQueryParametersMap(String queryString) {
		Map<String, String> queryParam = new HashMap<String, String>();
		String[] str1 = queryString.split("&");
		String[] str2;
		for (String string : str1) {
			str2 = string.split("=");
			queryParam.put(str2[0], str2[1]);
		}
		str1 = null;
		str2 = null;
		System.gc();
		return queryParam;
	}
}

```
