package com.circle.core.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileUtil {

	/**
	 * 从文件路径中截取文件名，不含后缀
	 *
	 * @param path
	 * @return
	 */
	public static String getFileName(String path) {
		int splitIndex = path.lastIndexOf(".");
		int splitStart = path.lastIndexOf(File.separator) + 1;
		return path.substring(splitStart, splitIndex);
	}

	/**
	 * 创建文件夹
	 *
	 * @param path
	 * @return
	 */
	public static boolean createDirectory(String path) {

		File directory = new File(path);
		if (!directory.exists()) {
			directory.mkdirs();
			return true;
		}

		return false;
	}

	/***
	 * 删除文件夹
	 *
	 * @param folderPath
	 */
	// param folderPath 文件夹完整绝对路径
	public static void delFolder(String folderPath) {
		try {
			delAllFile(folderPath); // 删除完里面所有内容
			String filePath = folderPath;
			filePath = filePath.toString();
			java.io.File myFilePath = new java.io.File(filePath);
			myFilePath.delete(); // 删除空文件夹
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/***
	 * 删除指定文件夹下所有文件
	 *
	 * @param path
	 * @return
	 */
	// param path 文件夹完整绝对路径
	public static boolean delAllFile(String path) {
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
			return flag;
		}
		if (!file.isDirectory()) {
			return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		for (int i = 0; i < tempList.length; i++) {
			if (path.endsWith(File.separator)) {
				temp = new File(path + tempList[i]);
			} else {
				temp = new File(path + File.separator + tempList[i]);
			}
			if (temp.isFile()) {
				temp.delete();
			}
			if (temp.isDirectory()) {
				delAllFile(path + "/" + tempList[i]);// 先删除文件夹里面的文件
				delFolder(path + "/" + tempList[i]);// 再删除空文件夹
				flag = true;
			}
		}
		return flag;
	}

	public static boolean writeFile(String fileName, String content) {

		File file = new File(fileName);

		try (FileOutputStream fop = new FileOutputStream(file)) {

			// if file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			// get the content in bytes
			byte[] contentInBytes = content.getBytes();

			fop.write(contentInBytes);
			fop.flush();
			fop.close();


		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

}
