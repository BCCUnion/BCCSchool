# NO.5 Entertainment Map

> - Author: 张涵健
> - Sid: 17343147

## 完成时间

2020.7.25

## 功能描述

提供（东校园）周边娱乐健身等场所的查询服务（地图标点、标签分类）

## 注意事项

[ x ] 需要完善导航栏(地址填写)

## 技术笔记

1. 高得地图api：[api](https://lbs.amap.com/api/javascript-api/guide/abc/prepare)
2. material button css实现：[material btn](https://www.jb51.net/css/642905.html)
3. 高德地图描点：[point](https://lbs.amap.com/api/javascript-api/guide/overlays/marker)
4. 高德地图位置获取：[position](https://lbs.amap.com/api/javascript-api/example/axis/transformate-between-coordinates-of-lnglat-and-map-container)

## 测试流程

### 1. 静态代码分析

VSCode自检测，消除所有warning和error

### 2. 单元测试

1. 地图是否成功显示？（直接打开页面）
2. Sport是否成功显示？（点击Sport按钮）
3. Entertainment是否成功显示？（点击Entertainment按钮）
4. Restaurant是否成功显示？（点击Restaurant按钮）
5. Romantic spot是否成功显示？（点击Romantic spot按钮）
6. 导航栏功能是否正常？
7. 地图是否能自动聚焦返回？

### 3. 集成测试

点击其中一个Marker按钮，再点另一个按钮，其他按钮显示的地点是否会消失？

### 4. 测试用例

单元测试：

1. 进入网页，点击Sport、点击Entertainment、点击Sport
2. 进入网页，点击Restaurant、点击Entertainment、点击Romatic spot
3. 进入网页，鼠标在地图上滑动滚轮、拖动滚轮

集成测试：

1. 进入网页，点击Romatic spot，滑动滚轮缩小地图，再放大地图、拖动地图、点击Sport、滑动滚轮缩小地图，再放大地图、拖动地图