window.onload = function(){

    // 根据屏幕宽度定位所有信息框
    windoWidth = parseInt(window.screen.width)
    blocks = document.getElementsByClassName('clubInfo');
    for(var i =0;i<blocks.length;i++){
        blocks[i].style.left = ((windoWidth-350*3)/4+350)*(i%3) + (windoWidth-350*3)/4 + 'px';
        // blocks[i].style.left = (windoWidth-450)/2*(i%3) + 50 + 'px';
        blocks[i].style.top = parseInt(i/3) * 400 + 120 +'px';
    }
    
    // 为所有按钮绑定点击函数
    buttons = document.getElementsByClassName('clubbutton');
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick = function(){
            window.open("clubSubmit.html")
        }
    }
}
