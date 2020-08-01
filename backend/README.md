# 后端部署技术文档
## aliyun部署
### 阿里云镜像建立
- 采用了`centos` +  `apache2`
- 安装`apache`,`yum install httpd`
- 查看是否安装 `service httpd start`
```
[root@izwz94f8hx4nyd6cwu32yaz BCCSchool]# service httpd start
Redirecting to /bin/systemctl start  httpd.service
```
- 部署到指定的文件夹下
- `cd /home/www/htdocs`
- `git clone https://github.com/BCCUnion/BCCSchool.git`
- 设置防火墙并且开启80端口
```
[root@izwz94f8hx4nyd6cwu32yaz BCCSchool]# sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
[root@izwz94f8hx4nyd6cwu32yaz BCCSchool]# sudo ufw allow 80
Rule added
Rule added (v6)
```

### git pull 部署更新
```
[root@izwz94f8hx4nyd6cwu32yaz BCCSchool]# git pull
remote: Enumerating objects: 22, done.
remote: Counting objects: 100% (22/22), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 13 (delta 8), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (13/13), done.
From https://github.com/BCCUnion/BCCSchool
   fb098bb..f2f67cd  master     -> origin/master
Updating fb098bb..f2f67cd
Fast-forward
 ...274\200\345\217\221\347\254\224\350\256\260.md" | 48 +++++++++++++++++++++
 1 file changed, 48 insertions(+)
 create mode 100644 "frontend/Website/\346\212\200\346\234\257\345\274\200\345\217\221\347\254\224\350\256\260.md"
```

### 
