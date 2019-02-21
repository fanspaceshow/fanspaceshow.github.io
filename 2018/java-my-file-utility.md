``` Java
package com.circle.core.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.apache.xml.serializer.ToSAXHandler;
import org.jeecgframework.core.util.FileUtils;
import org.jeecgframework.core.util.ResourceUtil;
import org.jeecgframework.core.util.UUIDGenerator;

import com.google.common.base.Ticker;

public class FileUtil {
	
	public static void renameFile(List<String> filepathList,List<String> fileRenameList) {
		
		for (int i=0;i<filepathList.size();i++) {
			File oldFile = new File(ResourceUtil.getConfigByName("workware")+
					filepathList.get(i));
			File newFile = new File(ResourceUtil.getConfigByName("workware")+
					fileRenameList.get(i));
			oldFile.renameTo(newFile);
		}
		
	}
	
	/**
	 * 复制文件夹
	 * @param sourcePath
	 * @param newPath
	 * @throws IOException
	 */
	public static void copyDir(String sourcePath, String newPath) throws IOException {
        File file = new File(sourcePath);
        String[] filePath = file.list();
        
        if (!(new File(newPath)).exists()) {
            (new File(newPath)).mkdir();
        }
        
        for (int i = 0; i < filePath.length; i++) {
            if ((new File(sourcePath + file.separator + filePath[i])).isDirectory()) {
                FileUtils.copyFile(sourcePath  + file.separator  + filePath[i], newPath  + file.separator + filePath[i]);
            }
            
            if (new File(sourcePath  + file.separator + filePath[i]).isFile()) {
            	FileUtils.copyFile(sourcePath + file.separator + filePath[i], newPath + file.separator + filePath[i]);
            }
            
        }
    }
	
	/**
	 * 判定文件或文件夹是否存在
	 * @param path
	 * @return
	 */
	public static boolean isExit(String path) {
		File obj = new File(path);
		return obj.exists();
	}

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
	 * 从文件路径中截取文件名，含后缀
	 * 
	 * @param path
	 * @return
	 */
	public static String getFileNameAndExtend(String path) {
		int splitStart = path.lastIndexOf(File.separator) + 1;
		return path.substring(splitStart);
	}

	/**
	 * 从文件路径中替换后缀
	 * 
	 * @param path
	 * @return
	 */
	public static String replaceExtend(String path, String extend) {
		int splitEnd = path.lastIndexOf(".") + 1;
		StringBuilder sBuilder = new StringBuilder();
		sBuilder.append(path.substring(0, splitEnd));
		sBuilder.append(extend);
		return sBuilder.toString();
	}

	/**
	 * 从文件路径中替换文件名，不含后缀
	 * 
	 * @param path
	 * @return
	 */
	public static String replaceFileName(String path, String str) {
		int splitEnd = path.lastIndexOf(".");
		String extend = path.substring(splitEnd);
		StringBuilder sBuilder = new StringBuilder();
		sBuilder.append(path.substring(0, splitEnd));
		sBuilder.append("-");
		sBuilder.append(str);
		sBuilder.append(extend);
		return sBuilder.toString();
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

	public static boolean writeFile(String outputPath, String content) {

		File file = new File(outputPath);

		try (OutputStreamWriter oStreamWriter = new OutputStreamWriter(new FileOutputStream(file), "utf-8")) {

			// if file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			// get the content in bytes
			// byte[] contentInBytes = content.getBytes();

			oStreamWriter.append(content);
			oStreamWriter.flush();
			oStreamWriter.close();

		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	public static boolean writeFile(InputStream input, String outputPath) {

		File file = new File(outputPath);
		if (!createDirectory(file.getParent())) {
			return false;
		}

		try (PrintStream pStream = new PrintStream(file)) {

			// if file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			int temp = 0;
			byte[] buf = new byte[524288];
			try {
				while ((temp = input.read(buf)) != -1) {
					pStream.write(temp);
				}
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					pStream.flush();
					input.close();
					pStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return false;
	}

	public static boolean writeFile(InputStream input, String outputPath, boolean append) {

		File file = new File(outputPath);
		if (!createDirectory(file.getParent())) {
			return false;
		}

		try (FileOutputStream fos = new FileOutputStream(file, append)) {

			// if file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			int temp = 0;
			byte[] buf = new byte[524288];
			try {
				while ((temp = input.read(buf)) != -1) {
					fos.write(temp);
				}
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					fos.flush();
					input.close();
					fos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return false;
	}

	public static boolean writeFile(byte[] buf, String outputPath) {

		File file = new File(outputPath);
		if (!createDirectory(file.getParent())) {
			return false;
		}

		try (PrintStream pStream = new PrintStream(file)) {

			// if file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			try {
				pStream.write(buf);

			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					pStream.flush();
					pStream.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return false;
	}
}
```