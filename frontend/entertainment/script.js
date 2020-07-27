var map = new AMap.Map('container');
var tmp = []

var gyms = [
    new AMap.Marker({
        position: new AMap.LngLat(113.391914,23.065118),
        title: '羽毛球场',
        icon: './img/sport.png',
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>校内羽毛球场</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.390465,23.064436),
        title: '校内篮球场',
        icon: './img/sport.png',
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>校内篮球场</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.390197,23.065177),
        title: '游泳场',
        icon: './img/sport.png',
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>游泳场</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391914,23.05726),
        title: '内环公共篮球场',
        icon: './img/sport.png',
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>内环公共篮球场</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
]

var entertain = [
    new AMap.Marker({
        position: new AMap.LngLat(113.392021,23.062294),
        title: 'GoGo新天地',
        icon: "./img/entertainment.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>GoGo新天地</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.393019,23.06112),
        title: '桌球',
        icon: "./img/entertainment.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>桌球</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391935,23.06341),
        title: '电影院',
        icon: "./img/entertainment.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>电影院</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391528,23.071603),
        title: '外环骑行',
        icon: "./img/entertainment.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>外环骑行</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    })
]

var eats = [
    new AMap.Marker({
        position: new AMap.LngLat(113.391876,23.063563),
        title: '必胜客',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>必胜客</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391946,23.063346),
        title: '豪华饭堂',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>豪华饭堂</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.392118,23.061149),
        title: 'GoGo三楼',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>GoGo三楼</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.39244,23.06107),
        title: '老重庆面馆',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>老重庆面馆</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.392043,23.061297),
        title: '一点点',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>一点点</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391866,23.061258),
        title: '喜茶',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>喜茶</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.391152,23.059757),
        title: '豪华三饭堂',
        icon: "./img/restaurant.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>豪华三饭堂</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),

]

var appointment = [
    new AMap.Marker({
        position: new AMap.LngLat(113.391495,23.05882),
        title: '中心花坛',
        icon: "./img/heart.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>中心花坛</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.387241,23.062768),
        title: '工学院小树林',
        icon: "./img/heart.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>工学院小树林</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.392558,23.051228),
        title: '中心湖',
        icon: "./img/heart.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>中心湖</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
    new AMap.Marker({
        position: new AMap.LngLat(113.39179,23.072368),
        title: '珠江边',
        icon: "./img/heart.png",
        label: {
            offset: new AMap.Pixel(20,20),
            content: "<div class='info'>珠江边</div>", //设置文本标注内容
            direction: 'right' //设置文本标注方位
        }
    }),
]

function btnonclick(i){
    if(i == 0){
        map.remove(tmp)
        map.add(gyms)
        tmp = gyms
    }
    if(i == 1){
        map.remove(tmp)
        map.add(entertain)
        tmp = entertain
    }
    if(i == 2){
        map.remove(tmp)
        map.add(eats)
        tmp = eats
    }
    if(i == 3){
        map.remove(tmp)
        map.add(appointment)
        tmp = appointment
    }
}