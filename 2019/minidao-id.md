### MiniDao 插入insert一条数据，返回自增列ID  

- <a href="https://blog.csdn.net/zhangdaiscott/article/details/79388885" target="_blank">MiniDao支持ID自增主键策略，使用讲解</a>   

``` java

	@IdAutoGenerator(generator="native")
	@Arguments({"entity"})
	int insertSpec(SpecEntity entity);

```