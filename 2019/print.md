``` java
          /**
			* 实际大小
			* ACTUAL_SIZE,
			* 缩小
			* SHRINK_TO_FIT,
			* 拉伸
			* STRETCH_TO_FIT,
			* 适应
			* SCALE_TO_FIT;
			*/
			PDFPrintable ppt = new PDFPrintable(document, Scaling.ACTUAL_SIZE);
			
			/**
			注意: 这边计量单位都是在dpi 72下的尺寸.  
			如果拿到是mm, 需要转为px. 例如10mm转换
			10 * 72 * 10 / 254 = 28px
			*/
			//A4纸 210mm×297mm
			int width = 210*72*10/254;
			int height = 297*72*10/254;
			// 10mm边距, 对应 28px
			int magrinLen = 3;
	        int marginLeft = getDpi(magrinLen);
	        int marginRight = getDpi(magrinLen);
	        int marginTop = getDpi(magrinLen);
	        int marginBottom = getDpi(magrinLen);
			
			Book book = new Book();
			Paper paper = new Paper();
	        paper.setSize(width, height);
	        // 设置边距
	        paper.setImageableArea(marginLeft, marginRight, width - (marginLeft + marginRight), height - (marginTop + marginBottom));
	        // 自定义页面设置
	        PageFormat pageFormat = new PageFormat();
	        // 设置页面横纵向
	        /**
	         * LANDSCAPE 横向打印
	         * PORTRAIT 纵向
	         */
	        pageFormat.setOrientation(PageFormat.LANDSCAPE);
	        pageFormat.setPaper(paper);
			book.append(ppt, pageFormat);
			job.setPageable(book);
```