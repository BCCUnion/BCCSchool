var imgs = ['url(./imgs/img1.jpg)', 'url(./imgs/img2.jpg)']


window.onload=function(){

    # 实现搜索功能，按照关键词进行搜索
    
    function t(){
        textvalue = document.getElementsByName('clubSearch')[0].value;
        answer = '为您推荐的社团有：';
        if(textvalue.includes('诗')||textvalue.includes('文学')){
            answer = answer + '岭南诗词研习社，紫荆诗社,';
        }

        if(textvalue.includes('志愿')){
            answer = answer + '青年志愿者协会,'
        }

        if(textvalue.includes('职业') || textvalue.includes('规划')){
            answer = answer + '职业发展协会,'
        }

        if(textvalue.includes('音乐')||textvalue.includes('钢琴')){
            answer = answer + '澄心琴社,'
        }

        if(textvalue.includes('学习') || textvalue.includes('思想')){
            answer = answer + '金字塔学社,'
        }

        if(answer=='为您推荐的社团有：'){
            answer='抱歉，没有合适的社团';
        }

        alert(answer);
    }

    document.getElementsByName('clubSearch')[0].onkeypress = function(e){
        if(e.keyCode==13){
            t();
        }
    }

    document.getElementById('clubbutton').onclick = function(){
        window.open("clubPage.html")
    }

    document.getElementById('activbutton').onclick = function(){
        window.open("activPage.html")
    }
    
    # 根据屏幕宽度定位搜索框
    document.getElementById('forInput').style.width='460px';
    document.getElementById('forInput').style.left=(parseInt(window.screen.width)-460)/2+'px';

    # moving用来判断图片是否在移动，一开始为false
    moving=false;
    myLeft = -parseInt(window.screen.width);
    
    # 由于图片列表左边额外有一个图片，所以一开始图片的left是负一倍屏幕宽度
    document.getElementById("imgList").style.left=myLeft+'px';

    # 把图片列表中所有的图片都按顺序排好
    var imgs = document.getElementsByClassName("imgs");
    document.getElementById("imgList").style.width=imgs.length*window.screen.width+'px';
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.width=window.screen.width+'px';
    }
    
    # 图片列表移动函数，distance为移动的距离，可正可负
    function move(distance){

        # moving置为true，并计算出移动终点
        moving=true;
        list = document.getElementById("imgList");
        var endPoint = parseInt(list.style.left) + distance;

        # 设定一个函数，用来图片切换
        function switchImg(){
            
            # 打印图片位置和单次移动距离（总距离的五十分之一）
            console.log(parseInt(list.style.left));
            console.log(distance/50);
            
            # 如果没有移动到终点，则继续移动
            if((parseInt(list.style.left)<endPoint&&distance>0)||(parseInt(list.style.left) >endPoint&&distance<0)){
                
                # 设定单次移动后的位置
                myLeft=parseInt(list.style.left)+distance/10;
                myLeft = myLeft + 'px';
                list.style.left = myLeft;
                
                # 50ms之后进行下一次单次移动
                setTimeout(switchImg, 50);
            }
            else{
                
                # 如果移动到终点即moving置false
                moving=false;
                
                # 如果图片列表到最左端图片，则将其瞬间移动到倒数第二张图片的位置，以实现轮转的效果
                if(parseInt(list.style.left)>=0){
                    myLeft=-window.screen.width*(imgs.length-2);
                    myLeft = myLeft + 'px';
                    console.log('hh'+myLeft)
                    console.log(imgs.length)
                    list.style.left = myLeft;
                }
                
                # 如果列表到最右端图片，则将其瞬间移动到第二张图片的位置，以实现轮转的效果
                bound = -parseInt(window.screen.width)*(imgs.length-1)
                console.log('bound'+bound)
                if(parseInt(list.style.left)<=bound){
                    myLeft=-window.screen.width;
                    myLeft = myLeft + 'px';
                    list.style.left = myLeft;
                }

                # 将所有小圆点的状态更新，只有当前显示图片的小圆点状态为light
                dots = document.getElementsByClassName('dot');
                myWidth = parseInt(window.screen.width)
                if(parseInt(list.style.left)==-1*myWidth){
                    for(var i=0;i<dots.length;i++){
                        if(i==0){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-2*myWidth){
                    for(var i=0;i<dots.length;i++){
                        if(i==1){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-3*myWidth){
                    for(var i=0;i<dots.length;i++){
                        if(i==2){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-4*myWidth){
                    for(var i=0;i<dots.length;i++){
                        if(i==3){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-5*myWidth){
                    for(var i=0;i<dots.length;i++){
                        if(i==4){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                }

            }
        }

        # 调用切换图片函数
        switchImg();

    }

    # 为左箭头点击绑定函数
    document.getElementById('left').onclick=function(){
        if(!moving){
            move(parseInt(window.screen.width));
        }
    }

    # 为右箭头点击绑定函数
    document.getElementById('right').onclick=function(){
        if(!moving){
            move(-parseInt(window.screen.width));
        }
    }

    # 所有圆点要根据屏幕宽度定位
    targets = new Array();
    for(var i=0;i<imgs.length-2;i++){
        targets[i]=-parseInt(window.screen.width)*(i+1); 
    }
    console.log(targets);

    dots = document.getElementsByClassName('dot');

    dots[0].style.left = window.screen.width/2-200 +'px';;
    dots[0].onclick = function(){
        list = document.getElementById("imgList");
        console.log('cloick dot');
        var distance = parseInt(targets[0]) - parseInt(list.style.left);
        console.log(targets[0]);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    dots[1].style.left = window.screen.width/2-100 +'px';;
    dots[1].onclick = function(){
        list = document.getElementById("imgList");
        console.log('cloick dot');
        var distance = parseInt(targets[1]) - parseInt(list.style.left);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    dots[2].style.left = window.screen.width/2 +'px';;
    dots[2].onclick = function(){
        list = document.getElementById("imgList");
        console.log('cloick dot');
        var distance = parseInt(targets[2]) - parseInt(list.style.left);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    dots[3].style.left = window.screen.width/2+100 +'px';
    dots[3].onclick = function(){
        list = document.getElementById("imgList");
        console.log('cloick dot');
        var distance = parseInt(targets[3]) - parseInt(list.style.left);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    dots[4].style.left = window.screen.width/2+200 +'px';;
    dots[4].onclick = function(){
        list = document.getElementById("imgList");
        console.log('cloick dot');
        var distance = parseInt(targets[4]) - parseInt(list.style.left);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    # 2秒自动点击一次右箭头，实现自动播放的效果
    setInterval(function(){
        document.getElementById('right').onclick();
    },2000);

}
