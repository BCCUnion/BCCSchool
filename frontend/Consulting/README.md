# NO.0 Consulting Page

> Author:：张云青
>
> Sid：17343157 



## 完成时间

2020.7.24



## 功能描述

新闻资讯页，有中大新闻、科研专栏、媒体中大、学术预告、重要通知等模块，点击新闻可跳转到具体内容页面，点击更多跳转到中大新闻页

## 界面展示

![](./images/index.png)

## 技术开发笔记

页面主要采用html+css进行页面构建，只在选择新闻的时候引入部分JavaScript.

**相关参数：**

- 新闻部分总宽度1000px
- 每个模块宽度490px,margin为5px 5px 0px 0px
- 模块标题14px，新闻标题12px

**主要技术**

- 采用js实现鼠标移动到不同标题切换页面：

	新闻模块有两个部分，分别是中大新闻和 NEWS & EVENTS，在span的onMouseOver属性调用js函数switchNews进行页面转换，switchNews函数如下：

	```css
	function switchNews(sysunews,newslist)
	{
		for(i=1; i <3; i++)
		{
			if ("sysunews0"+i==sysunews)
			{
				document.getElementById("sysunews0"+i).className="";
				
			}else{
				document.getElementById("sysunews0"+i).className="newsdown";
				
			}
			if ("newslist0"+i==newslist)
			{
				document.getElementById(newslist).className="";
			}else{
				document.getElementById("newslist0"+i).className="hidecontent";
			}
		}
	}
	```

- 阴影分隔线的实现

	阴影分割线是在css中设置背景图为阴影图，并设置属性为no-repeat bottom center，然后把这个属性作为父元素的属性。

	```css
	.channel_shadow{
	padding:0px 0px 5px 0px;
	background:url(../images/bo-shadow.jpg) no-repeat bottom center;
	}
	```

- 切换模块内容只修改内部元素

	切换新闻和媒体的另一个模块时采用的是iframe标签，可以在不改变外框架的情况下修改内部元素：

	```css
	<iframe id="ifmtzd" src="" frameborder="0" scrolling="no" height="196" width="356" noresize="noresize"></iframe> 
	```