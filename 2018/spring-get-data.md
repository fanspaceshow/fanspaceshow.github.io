# @QueryParam和@PathParam使用方法比较

1. 先来看@queryparam  
   先看例子: 
```java
Path("/users")  
public class UserService {  
   
    @GET  
    @Path("/query")  
    public Response getUsers(
        @QueryParam("from") int from,  
        @QueryParam("to") int to,  
        @QueryParam("orderBy") List<String> orderBy) {  
   
        return Response  
           .status(200)  
           .entity("getUsers is called, from : " + from + ", to : " + to  
            + ", orderBy" + orderBy.toString()).build();  
   
    } 
}  
```

URL输入为:users/query?from=100&to=200&orderBy=age&orderBy=name  
  此时,输出为: 
getUsers is called, from : 100, to : 200, orderBy[age, name]  
要注意的是,跟@pathparam不同,@queryparam中,  
指定的是URL中的参数是以键值对的形式出现的,而在程序中  
@QueryParam("from") int from则读出URL中from的值,  
而@pathparem中,URL中只出现参数的值,不出现键值对,比如: 
“/users/2011/06/30”  
则:

```java
@GET  
    @Path("{year}/{month}/{day}")  
    public Response getUserHistory(  
            @PathParam("year") int year,  
            @PathParam("month") int month,   
            @PathParam("day") int day) {  
   
       String date = year + "/" + month + "/" + day;  
   
       return Response.status(200)  
        .entity("getUserHistory is called, year/month/day : " + date)  
        .build();  
   
    } 

```
输出为:  
getUserHistory is called, year/month/day : 2011/6/30 

2. 以动态的方式获得: 

```java
@Path("/users")  
public class UserService {  
   
    @GET  
    @Path("/query")  
    public Response getUsers(@Context UriInfo info) {  
   
        String from = info.getQueryParameters().getFirst("from");  
        String to = info.getQueryParameters().getFirst("to");  
        List<String> orderBy = info.getQueryParameters().get("orderBy");  
   
        return Response  
           .status(200)  
           .entity("getUsers is called, from : " + from + ", to : " + to  
            + ", orderBy" + orderBy.toString()).build();  
   
    }
```

URL;users/query?from=100&to=200&orderBy=age&orderBy=name  
输出为: 
getUsers is called, from : 100, to : 200, orderBy[age, name]  
注意这里把orderby后的两个参数读入为LIST处理了. 

3. @DefaultValue,默认值

例子: 
```java
@Path("/users")  
public class UserService {  
   
    @GET  
    @Path("/query")  
    public Response getUsers(  
        @DefaultValue("1000") @QueryParam("from") int from,  
        @DefaultValue("999")@QueryParam("to") int to,  
        @DefaultValue("name") @QueryParam("orderBy") List<String> orderBy) {  
   
        return Response  
           .status(200)  
           .entity("getUsers is called, from : " + from + ", to : " + to  
            + ", orderBy" + orderBy.toString()).build();  
   
    }
```

URL:users/query  
输出:getUsers is called, from : 1000, to : 999, orderBy[name] 
  
  

