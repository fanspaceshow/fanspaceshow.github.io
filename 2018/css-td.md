单元格中的内容不换行
``` CSS
td
{
 white-space: nowrap;
}
```

超出部分显示省略号。
``` CSS
text-overflow:ellipsis;
```

内容将在边界内换行，仅用于块对象，内联对象要用的话，必须要设定height、width或display:block或position:absolute。
``` CSS
word-wrap:break-word;
```


用于处理单词折断。(注意与第一个属性的对比)
``` CSS
word-break:break-all;
```

超出边界的部分隐藏。
``` CSS
overflow:hidden;
```