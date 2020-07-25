# NO.6 Home Page

> Author:：徐肯
>
> Sid：17343130 



## 完成时间

2020.7.x



## 功能描述

网页首页，提供到其他各个页面的导航



## 注意事项

## 测试流程
1. 静态代码分析
VSCode自检测，消除所有warning和error

2. 单元测试
地图是否成功显示？（直接打开页面）
Sport是否成功显示？（点击Sport按钮）
Entertainment是否成功显示？（点击Entertainment按钮）
Restaurant是否成功显示？（点击Restaurant按钮）
Romantic spot是否成功显示？（点击Romantic spot按钮）
导航栏功能是否正常？
地图是否能自动聚焦返回？
3. 集成测试
点击其中一个Marker按钮，再点另一个按钮，其他按钮显示的地点是否会消失？

4. 测试用例
单元测试：

进入网页，点击Sport、点击Entertainment、点击Sport
进入网页，点击Restaurant、点击Entertainment、点击Romatic spot
进入网页，鼠标在地图上滑动滚轮、拖动滚轮
集成测试：

进入网页，点击Romatic spot，滑动滚轮缩小地图，再放大地图、拖动地图、点击Sport、滑动滚轮缩小地图，再放大地图、拖动地图


## 技术笔记
+ 高得地图api：api
+ material button css实现：material btn
+ 高德地图描点：point
+ 高德地图位置获取：position