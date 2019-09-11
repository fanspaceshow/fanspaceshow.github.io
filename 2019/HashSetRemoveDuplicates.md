``` Java
package com.circle.dcc.common.util;

import java.util.Arrays;
import java.util.HashSet;

public class CommonUtil {
	/**
	 * @param addValue 新增字符串，如：E,F,G
	 * @param oldValue 原数组字符串，如：A,B,C,D,E,F
	 * @return A,B,C,D,E,F,G
	 */
	public static String deduplicatePromote(String addValue, String oldValue) {
		addValue = addValue.trim();
		String[] dpArr = oldValue.split(",");
		for (int i = 0; i < dpArr.length; i++) {
			String string = dpArr[i];
			dpArr[i] = string.trim();
		}
		HashSet<String> set = new HashSet<String>();
		set.addAll(Arrays.asList(dpArr));
		set.add(addValue);
		String newValue = set.toString();
		newValue = newValue.replace("[", "");
		newValue = newValue.replace("]", "");
		return newValue;
	}
}
```
