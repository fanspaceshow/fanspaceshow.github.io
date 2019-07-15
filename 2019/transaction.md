### sqlserver禁止management studio的自动提交事务

默认management studio是自动提交事务，即一个语句就一个事务，那么如何禁止其自动提交呢？下面有个不错的方法，大家可以参考下

自动提交事务 

默认management studio是自动提交事务，即一个语句就一个事务。 

隐式事务 

打开Sql Server Managerment Studio，登陆到实例当中。 
Tools -> Options 
Query Execution -> SQL Server -> ANSI 

将SET IMPLICIT_TRANSACTIONS前打上勾 
这样，当一个事务结束，新的语句会自动开启一个新的事务。此为隐式事务。事务最终也是通过我们的commit或rollback来结束。 

显式事务 

``` sql
begin transaction 
delete from erpdb.dbo.mtl_categories_b 
rollback transaction 
--commit transaction 
```