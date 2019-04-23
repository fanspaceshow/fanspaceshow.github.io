环境：
sql server 2012
语法
```sql
select ROW_NUMBER() over(partition BY 分组字段 order by 排序字段),* as rowNums from 表名
```

- <a href="https://www.cnblogs.com/xiaojitui/p/9810512.html" target="_blank">sql server 分组排序</a>  