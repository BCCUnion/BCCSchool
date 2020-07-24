window.onload = function(){
    // console.log('123')
    windoWidth = parseInt(window.screen.width)
    blocks = document.getElementsByClassName('clubInfo');
    for(var i =0;i<blocks.length;i++){
        blocks[i].style.left = (windoWidth-450)/2*(i%3) + 50 + 'px';
        blocks[i].style.top = parseInt(i/3) * 400 + 80 +'px';
    }

    buttons = document.getElementsByClassName('clubbutton');
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick = function(){
            window.open("clubSubmit.html")
        }
    }
}