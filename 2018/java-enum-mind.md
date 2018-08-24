``` java

package com.circle.elfinder.constant;

public enum OfficeType {

	word03("application/msword","odt"),
	ppt03("application/vnd.ms-powerpoint","odp"),
	excel03("application/vnd.ms-excel","ods");

	private String mime,suffix;

	private OfficeType(String mime,String suffix) {
		this.mime=mime;
		this.suffix = suffix;
	}

	public String getMime() {
		return mime;
	}

	public void setMime(String mime) {
		this.mime = mime;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public static String getSuffix(String mime) {
		for (OfficeType officeType : OfficeType.values()) {
			if (officeType.mime.equals(mime)) {
				return officeType.suffix;
			}
		}
		return null;
	}

}


```
