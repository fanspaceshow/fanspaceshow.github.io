## shadowsocks搭建

知识准备：  
&nbsp;&nbsp;&nbsp;&nbsp;熟悉Linux Ubuntu 操作使用，shell命令，会写.sh文件  
&nbsp;&nbsp;&nbsp;&nbsp;熟悉Python，最好有python入门水平  

步骤：
1. &nbsp;&nbsp;&nbsp;&nbsp;查看python安装情况  
2. &nbsp;&nbsp;&nbsp;&nbsp;安装python  
3. &nbsp;&nbsp;&nbsp;&nbsp;安装shadowsocks  
4. &nbsp;&nbsp;&nbsp;&nbsp;配置shadowsocks  
5. &nbsp;&nbsp;&nbsp;&nbsp;启动shadowsocks

Ubuntu环境  
更新软件源：
```
apt-get update
```
查看是否已安装python及版本
```
python -V
```
安装python
```
sudo apt-get install python2.7
sudo apt-get install python3.5
```
安装pip环境
```
apt-get install python-pip
```
安装shadowsocks
```python
pip install shadowsocks
```

安装upgrade
```
pip install --upgrade pip
```

安装加密程序
```
apt-get install python-m2crypto
```

如果提示版本过低则按提示更新  
创建配置文件
```
vim /etc/shadowsocks.json
```
添加
```json
{
"server":"0.0.0.0",
"server_port":8388,//默认是8388，如果不行可更改
"local_address": "127.0.0.1",
"local_port":1080,
"password":"mypassword",
"timeout":300,
"method":"aes-256-cfb"
}
```

name | info
---|---
server | 服务器 IP (IPv4/IPv6)，注意这也将是服务端监听的 IP 地址
server_port | 服务器端口
local_port | 本地端端口
password | 用来加密的密码
timeout | 超时时间（秒）
method | 加密方法，可选择 “bf-cfb”, “aes-256-cfb”, “des-cfb”, “rc4″, 等等。默认是一种不安全的加密，推荐用 “aes-256-cfb”
备注：如要你需要分享SS服务给朋友或家人，可以配置多个SS账户，具体可以参考下面的代码。  
```json
{
"server":"your_server_ip",
"port_password":{
     "8381":"pass1",
     "8382":"pass2",
     "8383":"pass3",
     "8384":"pass4"
     },
"timeout":60,
"method":"rc4-md5",
"fast_open":false,
"workers":1
}
```
赋予文件权限  
```
chmod 755 /etc/shadowsocks.json
```
安装以支持这些加密方式 
```
apt–get install python–m2crypto
```
后台运行
```
ssserver -c /etc/shadowsocks.json -d start
```
停止命令:
```
ssserver -c /etc/shadowsocks.json -d stop
```
设置开机自启动
```
vim /etc/rc.local
```
加上如下命令：
```sh
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.
ssserver -c /etc/shadowsocks.json -d start
exit 0
```
Centos环境  
安装shadowsocks
```
yum install python-setuptools && easy_install pip
pip install shadowsocks
```
其他步骤大致相同