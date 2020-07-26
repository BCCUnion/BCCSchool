# NO.4 SchoolPlace

> Author:：左杰文
>
> Sid：17343166



## 完成时间

2020.7.26

## 功能描述
1. 对中山大学东校区建筑在地图上进行标记
2. 输入建筑名称对建筑地点进行查询，在地图上显示地点
3. 可对地图进行一般的操作（地图放大、缩小，移动地图）

## 技术笔记

使用web实现，地图使用百度地图API，通过调用百度地图提供的API构建网页上的地图。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725151435797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)
地图上建筑物的标记点需要手工标注，将所有标记的点储存在一个数组中。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725152140487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)
point表示该标记点在地图上的位置，这里的位置不是经纬度，只在百度地图上表示标记的位置。
对于建筑的搜索，使用一个input标签进行实现。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725152329397.png)
在点击搜索按钮后对输入内容进行查询，在上面的标记点数组中查询是否有输入的建筑物，这里的查询是直接找是否有输入的子字符串，所以返回结果是一个数组，返回所有包含输入的内容的地点，并将这些地点标记出来。
显示标记的方法是调用百度地图提供的API，生成一个覆盖物以表示查询的地点。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725152552781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)
为了能够让用户更好的看到所有的搜索结果，搜索之后会将地图的中心点移动到所有点的中心位置，也就是最左上的点与最右下的点连线的中点作为地图的中心点，这样基本就能看到搜索的所有点。
对于查找不到的建筑，使用弹窗进行提示。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725152821204.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200725152840520.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)

## 测试流程
### 静态代码测试
使用插件来进行相关语法监测：
1. htmlhint对html语法进行检测；
2. stylelink对css语法进行监测。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200726093212500.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020072609322623.png)

### 单元测试
1. 网页是否能够成功打开：点击index.html文件在网站中打开。
2. 网页在各个浏览器显示是否正常：分别在safari与google浏览器进行测试，能够正常显示运行。
3. 能否在搜索框中输入地点：点击搜索框，进行文本的输入。
4. 点击搜索按钮后能否进行对输入地点进行搜索：在搜索框中输入字符串，点击按钮搜索。
5. 能否搜索出匹配的所有地点：在搜索框中输入地点，如“至善园”，地图上显示至善园的所有建筑。
6. 地图能否根据搜索到的地点自动移动到该位置：输入某个地点，点击搜索，查看网站地图中心为该地点。
7. 搜索没有标注的地点显示弹窗提示。

### 测试用例
1. 输入“至善园”，显示所有至善园的建筑，并将地图中心移动到所有建筑的中心位置。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200726093957984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)

2. 输入至善园11号，没有该地点，进行弹窗提示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200726094036513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvZGlmZmVyZW50,size_16,color_FFFFFF,t_70)





