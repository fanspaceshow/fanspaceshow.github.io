## java写入文件的几种方法分享

<a href="https://www.cnblogs.com/x_wukong/p/4679116.html" target="_blank">java写入文件的几种方法分享</a>

``` java

package com.yiibai.io;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteFileExample {
 public static void main(String[] args) {

  File file = new File("c:/newfile.txt");
  String content = "This is the text content";

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

   System.out.println("Done");

  } catch (IOException e) {
   e.printStackTrace();
  }
 }
}

```
