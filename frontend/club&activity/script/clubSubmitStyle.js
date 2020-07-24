window.onload=function(){
    document.getElementById('submit').onclick = function(){
        console.log(document.getElementById('number').value);
        number = document.getElementById('number').value
        name = document.getElementById('name').value
        clubname = document.getElementById('clubname').value
        ps = document.getElementById('ps').value
        if(document.getElementById('number').value!="" && 
        document.getElementById('name').value!=""&&
        document.getElementById('ps').value!=""&&
        document.getElementById('clubname').value!=""){

            var httpRequest = new XMLHttpRequest();
            httpRequest.open('POST', 'http://127.0.0.1:5010', true); 
            httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            httpRequest.send('number='+number+'&name='+name+'&clubname='+clubname+'&ps='+ps);
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    var json = httpRequest.responseText;
                    console.log(json);
                }
            };


            alert('报名成功');
        }
        else{
            alert('信息不完整');
        }
    }
}