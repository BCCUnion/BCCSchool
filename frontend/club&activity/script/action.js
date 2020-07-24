var imgs = ['url(./imgs/img1.jpg)', 'url(./imgs/img2.jpg)']


window.onload=function(){

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

    document.getElementById('forInput').style.width='460px';
    document.getElementById('forInput').style.left=(parseInt(window.screen.width)-460)/2+'px';

    moving=false;
    myLeft = -parseInt(window.screen.width);
    document.getElementById("imgList").style.left=myLeft+'px';

    var imgs = document.getElementsByClassName("imgs");
    document.getElementById("imgList").style.width=imgs.length*window.screen.width+'px';
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.width=window.screen.width+'px';
    }

    function move(distance){

        moving=true;
        list = document.getElementById("imgList");
        var endPoint = parseInt(list.style.left) + distance;

        function switchImg(){
            console.log(parseInt(list.style.left));
            console.log(distance/50);
            if((parseInt(list.style.left)<endPoint&&distance>0)||(parseInt(list.style.left) >endPoint&&distance<0)){
                myLeft=parseInt(list.style.left)+distance/10;
                myLeft = myLeft + 'px';
                list.style.left = myLeft;
                setTimeout(switchImg, 50);
            }
            else{
                moving=false;
                if(parseInt(list.style.left)>=0){
                    myLeft=-window.screen.width*(imgs.length-2);
                    myLeft = myLeft + 'px';
                    console.log('hh'+myLeft)
                    console.log(imgs.length)
                    list.style.left = myLeft;
                }
                bound = -parseInt(window.screen.width)*(imgs.length-1)
                console.log('bound'+bound)
                if(parseInt(list.style.left)<=bound){
                    myLeft=-window.screen.width;
                    myLeft = myLeft + 'px';
                    list.style.left = myLeft;
                }

                dots = document.getElementsByClassName('dot');
                if(parseInt(list.style.left)==-1680){
                    for(var i=0;i<dots.length;i++){
                        if(i==0){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-1680*2){
                    for(var i=0;i<dots.length;i++){
                        if(i==1){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-1680*3){
                    for(var i=0;i<dots.length;i++){
                        if(i==2){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-1680*4){
                    for(var i=0;i<dots.length;i++){
                        if(i==3){
                            dots[i].setAttribute("name","light");
                        }
                        else{
                            dots[i].setAttribute("name","dark");
                        }
                    }
                } else if(parseInt(list.style.left)==-1680*5){
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

        switchImg();

    }

    document.getElementById('left').onclick=function(){
        if(!moving){
            move(parseInt(window.screen.width));
        }
    }

    document.getElementById('right').onclick=function(){
        if(!moving){
            move(-parseInt(window.screen.width));
        }
    }

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
        // console.log(targets);
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
        // console.log(targets);
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
        // console.log(targets);
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
        // console.log(targets);
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
        // console.log(targets);
        var distance = parseInt(targets[4]) - parseInt(list.style.left);
        if(!moving){
            console.log('moving'+distance);
            move(distance);
        }
    }

    setInterval(function(){
        document.getElementById('right').onclick();
    },2000);

}