var R=255,G=0,B=0;
var start=0,stop=0;
var id=0;
var val=5;
$(document).ready(function(){
    var burgerchk=0;
    $('#menu_control').click(function(){
        if(burgerchk){
            burgerchk=0;
            $('.content1-button').css("left","50%");
        }else{
            burgerchk=1;
            $('.content1-button').css("left","-100%");
        }
    });
});

/*根據time設定*/
id = setInterval(function() {
    changRGB();
},val);
// console.log(id);
/*速度*/
$(document).ready(function(){
    $('#slider').slider({
        min: 0,
        max: 100,
        step: 0.1,
        value: 50,
        slide: function(e, ui) {
            clearInterval(id);
            val=Math.round(ui.value/10);
            console.log(val);
            id = setInterval(function(){
                changRGB();
            },val);
        },
    });
});

/*RGB模式開關*/
$(document).ready(function(){
    $('.crazybox').click(function(){
        if(start==0){
            start=1;
            R=255,G=0,B=0;
            /*RGB模式打開*/
            $('.crazy p').css('color','#000');
            $('.menu a').css('color','#000');
            $('.crazyplay-content p').css('color','#000');
            $('.crazyplay-icon p').css('color','#000');
            $('.speed p').css('color','#000');
            $('.crazyplay-icon p').css('cursor','pointer');
            $('.crazyplay-icon p').text('||');
            $('.crazyplay-content p').text('暫停');
            $('.crazyplay-icon p').css( 'padding-left','1px');
            $('.crazyplay').css('opacity','100%');
        }else{
            /*RGB模式關閉*/
            start=0;
            $('.crazy p').css('color','#fff');
            $('.menu a').css('color','#fff');
            $('.crazyplay-content p').css('color','#fff');
            $('.crazyplay-icon p').css('color','#fff');
            $('.crazyplay-icon p').css('cursor','default');
            $('.speed p').css('color','#fff');
            $('.crazyplay-icon p').text('▶')
            $('.crazyplay-content p').text('播放')
            $('.crazyplay').css('opacity','25%');
        }
    });
    $('.crazyplay-icon').click(function(){
        if(start==1){
            /*暫停*/
            if(stop==0){
                stop=1;
                $('.crazyplay-icon p').text('▶')
                $('.crazyplay-content p').text('播放')
                $('.crazyplay-icon p').css( 'padding-left','3px')
            }else{
                /*開始*/
                stop=0;
                $('.crazyplay-icon p').text('||')
                $('.crazyplay-icon p').css( 'padding-left','1px')
                $('.crazyplay-content p').text('暫停')
            }
        }
    });
});

/*改變RGB數值*/
function changRGB () {
    if(start==1){
        if(stop==1){
            $('.header').css('background-color' ,'rgb('+R+','+G+','+B+')');
        }
        else if(R==255 && G!=255 && B==0){
            G++;
        }else if(R!=0 && G==255 && B==0){
            R--;
        }else if(R==0 && G==255 && B!=255){
            B++;
        }else if(R==0 && G!=0 && B==255){
            G--;
        }else if(R!=255 && G==0 && B==255){
            R++;
        }else if(R==255 && G==0 && B!=0){
            B--;
        }
        changColor();
    }else if(start==0){
        $('.header').css('background-color' ,'#444');
    }
}

/*更換背景RGB函式*/
function changColor(){
    $(document).ready(function(){
        $('.header').css('background-color' ,'rgb('+R+','+G+','+B+')');
        
        // $('.header').css('background' ,'linear-gradient(360deg,#bbb,'+'rgb('+R+','+G+','+B+')');
        $('.OK').text(R+','+G+','+B);
    });
}

var open=0;
$(document).ready(function(){
    today = Date();
    $('.nowtime').html('<h1>'+today+'</h1>');
    console.log("時間載入正常"+today);
});

/****  content4 function   ****/
//時間函式-時間函式-時間函式-時間函式-時間函式-時間函式-時間函式-時間函式-時間函式-時間函式 
var startt=0,diss=0,contin=0,rank1=0,rank2=0,rank3=0,startck=0,realck=0,bestscore=0;
var ckberopen=0,ckbeartime=120,cont4_i,cont4_j,cont4_score=0,rick=0,dola=0,stop_thread=[null,null,null,null,null,null,null,null,null],resett=0;
var cont4_arr=[[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]];
function cont4_start(){ //cont4 開始函式
    resett=0;
    if(ckberopen==0&&dola==0){
        $('.cont4_startbtn').css('background-color','rgb(158, 158, 158)');
        $('.cont4_startbtn').css('cursor','default');
        $('.cont4_startbtn').css('opacity','60%');
        $('.cont4_stopbtn').css('background-color','rgb(43, 43, 43)')
        $('.cont4_stopbtn').css('cursor','pointer');
        $('.cont4_stopbtn').css('opacity','100%');
        $('.cont4_resetbtn').css('background-color','rgb(43, 43, 43)')
        $('.cont4_resetbtn').css('cursor','pointer');
        $('.cont4_resetbtn').css('opacity','100%');
        ckberopen=1;
    }
}
function cont4_reset(){ //cont4 重置函式
    for(iiii=0;iiii<9;iiii++){
        clearTimeout(stop_thread[iiii]);
    }
    ckberopen=0;
    resett=1;
    ckbeartime=120;
    if(cont4_score>bestscore){
        bestscore=cont4_score;
        $('.cont4_best').html("🥇First: "+cont4_score+"分");
        if(bestscore>=100){
            var ww=250+((bestscore.toString().length)-2)*20;
            $('.cont4_besttxt').css('width',ww+'px');
        }
    }
    cont4_score=0;
    rick=0;
    dola = 0;
    $('.cont4_startbtn').css('background-color','rgb(43, 43, 43)');
    $('.cont4_startbtn').css('cursor','pointer');
    $('.cont4_startbtn').css('opacity','100%');
    $('.cont4_stopbtn').css('background-color','rgb(158, 158, 158)')
    $('.cont4_stopbtn').css('cursor','default');
    $('.cont4_stopbtn').css('opacity','60%');
    $('.cont4_resetbtn').css('background-color','rgb(158, 158, 158)')
    $('.cont4_resetbtn').css('cursor','default');
    $('.cont4_resetbtn').css('opacity','60%');
    $('.cont4_time').html("剩餘60s");
    $('.cont4_bk div div').html(`<img src="hole0.png" width="150">`);
    $('.content5').html("");
    $('.content6').html("");
}
function cont4_stop(){ //cont4 暫停函式
    if(ckberopen==1&&rick==0){
        $('.cont4_startbtn').css('background-color','rgb(43, 43, 43)');
        $('.cont4_startbtn').css('cursor','pointer');
        $('.cont4_startbtn').css('opacity','100%');
        $('.cont4_stopbtn').css('background-color','rgb(158, 158, 158)')
        $('.cont4_stopbtn').css('cursor','default');
        $('.cont4_stopbtn').css('opacity','60%');
        $('.cont4_resetbtn').css('background-color','rgb(43, 43, 43)')
        $('.cont4_resetbtn').css('cursor','pointer');
        $('.cont4_resetbtn').css('opacity','100%');
        ckberopen=0;
    }
}
function cont4_dolaAnimation(){ //cont4 A夢動畫函式
    $('.content6').css('left','50%');
    $('.content6').css('opacity','100%');
    $('.cont4_startbtn').css('background-color','rgb(158, 158, 158)');
    $('.cont4_startbtn').css('cursor','default');
    $('.cont4_startbtn').css('opacity','60%');
    var randomnum=Math.floor(Math.random()*6);
    stop_thread[0]=setTimeout(function() {
        $('.content6').html(`<img src="dolaA1.png" width="801" height="676">`);
    }, 0);
    stop_thread[1]=setTimeout(function() {
        $('.content6').html(`<img src="dolaA2.png" width="801" height="676">`);
    }, 400);
    stop_thread[2]=setTimeout(function() {
        $('.content6').html(`<img src="dolaA1.png" width="801" height="676">`);
    }, 800);
    stop_thread[3]=setTimeout(function() {
    $('.content6').html(`<img src="dolaA2.png"  width="801" height="676">`);
    }, 1200);
    stop_thread[4]=setTimeout(function() {
        $('.content6').html(`<img src="dolaA1.png" width="801" height="676">`);
    }, 1600);
    stop_thread[5]=setTimeout(function() {
        $('.content6').html(`<img src="dolaA2.png" width="801" height="676">`);
    }, 2000);
    stop_thread[6]=setTimeout(function() { //抽獎結果
        if(randomnum==0){
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">分數+200分</div>`);
        }else if(randomnum==1){
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">分數-100分</div>`);
        }else if(randomnum==2){
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">重置分數</div>`);
        }else if(randomnum==3){
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">秒數+30秒</div>`);
        }else if(randomnum==4){
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">秒數-20秒</div>`);
        }else{
            $('.content6').html(`<img src="dolaA3.png"  width="801" height="676"><div class="cont6_txt">冰冰姐泡湯</div>`);
            }
    }, 2500);
    //實施結果
    stop_thread[7]=setTimeout(function() {
        $('.content6').html("");
        if(randomnum==0){//+200分
            cont4_score+=200;
            $('.cont4_score').html(cont4_score+"分");
        }else if(randomnum==1){//-100分
            cont4_score-=100;
            $('.cont4_score').html(cont4_score+"分");
        }else if(randomnum==2){//重置分數
            cont4_score=0;
            $('.cont4_score').html(cont4_score+"分");
        }else if(randomnum==3){//+30s
            ckbeartime+=60;
            $('.cont4_time').html("剩餘" + (Math.trunc(ckbeartime/2-0.5)) + "s");
        }else if(randomnum==4){//-20s
            ckbeartime-=40;
            if(ckbeartime<=0){//到計數時間到reset
                $('.cont4_time').html("剩餘" + 0 + "s");
                cont4_reset();
            }
        }else{//冰冰姐泡湯
            $('.content6').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/uoqJy_AEt-E?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        }
        if((ckbeartime>0)&&(resett==0)){//繼續
            if(randomnum==5){
                stop_thread[8]=setTimeout(function(){
                    $('.content6').html("");
                    dola=0;
                    cont4_start();
                },10000);
            }
            else if(ckberopen==0&&resett==0){
                dola=0;
                cont4_start();
            }
        }
    }, 4500);
}
function probabilitySystem(pronum){//機率系統
    var cont4_test=1;
    //抽(空白位置的)狀態
    cont4_i=Math.floor(Math.random()*4);
    cont4_j=Math.floor(Math.random()*4);
    while(cont4_test==1){
        if(cont4_arr[cont4_i][cont4_j][0]==0){
            break;
        }else{
            cont4_i=Math.floor(Math.random()*4);
            cont4_j=Math.floor(Math.random()*4);
        }
    }
    //機率系統 - 參數值
    if(pronum==1)var a=0 ,b=70,c=85,d=95;
    else if(pronum==2)var a=20,b=75,c=85,d=95;
    else var a=0,b=85,c=85,d=95;
    var state=0;
    state = Math.floor((Math.random()*100)+1);
    if(state<=a)state=0;      //0 (0%)  - 20(20%)
    else if(state<=b)state=1; //70(70%) - 75(55%)
    else if(state<=c)state=2; //85(15%) - 85(10%)
    else if(state<=d)state=3; //95(10%) - 95(10%)
    else state=4;             //100(5%) - 100(5%)
    $('.row'+(cont4_i+1)+'_col'+(cont4_j+1)).html(`<img src="hole`+state+`.png" width="150">`)
    cont4_arr[cont4_i][cont4_j][0]=state;
    cont4_arr[cont4_i][cont4_j][1]=2;    
}
$(document).ready(function(){
    function time(){
        var t = null;
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var sec = d.getSeconds();
        var string="<h1>目前時間：" + year + "年";
        if(month<10) string += "0" + month + "月";
        else string += month + "月";
        if(day<10) string += "0" + day + "日";
        else string += day + "日";
        if(hour>12){
            if((hour-12)>=10)string+= "下午" + (hour-12) +"時";
            else string+= "下午0" + (hour-12) +"時"
        }
        else{
            if((hour)>=10)string+= "下午" + hour +"時";
            else string+= "下午0" + hour-12 +"時"
        }
        if(minute<10)string += "0" + minute + "分";
        else string += minute + "分";
        if(sec<10)string += "0" + sec + "秒";
        else string += sec + "秒";
        $('.nowtime').html(string + '</h1>');
        $('.block_yearOK').css('width',(year-2000)/1000*100+"%");
        $('.block_year_circle').css('left','calc(' + ((year-2000)/1000*100) + '%' + ' - 10px)')
        $('.block_monthOK').css('width',month/12*100+"%");
        $('.block_month_circle').css('left','calc(' + (month/12*100) + '%' + ' - 10px)')
        if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
            $('.block_dayOK').css('width',day/31*100+"%");
            $('.block_day_circle').css('left','calc(' + (day/31*100) + '%' + ' - 10px)');
        }
        else if(month==2){
            if((year%4==0&&year%100!=0)||year%400==0){
                $('.block_dayOK').css('width',day/29*100+"%");
                $('.block_day_circle').css('left','calc(' + (day/29*100) + '%' + ' - 10px)');
            }
            else {
                $('.block_dayOK').css('width',day/28*100+"%");
                $('.block_day_circle').css('left','calc(' + (day/28*100) + '%' + ' - 10px)');
            }
        }
        else {
            $('.block_dayOK').css('width',day/30*100+"%");
            $('.block_day_circle').css('left','calc(' + (day/30*100) + '%' + ' - 10px)');
        }
        $('.block_dayOK').css('width',day/31*100+"%");
        if(hour>12){
            $('.block_hourOK').css('width',(hour-12)/12*100+"%");
            $('.block_hour_circle').css('left','calc(' + ((hour-12)/12*100) + '%' + ' - 10px)');
        }
        else{
            $('.block_hourOK').css('width',hour/12*100+"%");
            $('.block_hour_circle').css('left','calc(' + (hour/12*100) + '%' + ' - 10px)');
        }
        $('.block_minuteOK').css('width',minute/60*100+"%");
        $('.block_minute_circle').css('left','calc(' + (minute/60*100) + '%' + ' - 10px)');
        $('.block_secOK').css('width',sec/60*100+"%");
        $('.block_sec_circle').css('left','calc(' + (sec/60*100) + '%' + ' - 10px)');
        if(contin==1){
            diss++;
            $('.startnum').html("剩餘" + Math.round(20-(diss+1)/2) + "s");
            if(diss>=40){
                contin=0;
                diss=0;
                if(rank1<realck){
                    temp=rank1;
                    rank1=realck;
                    realck=temp;
                }
                if(rank2<realck){
                    temp=rank2;
                    rank2=realck;
                    realck=temp;
                }
                if(rank3<realck){
                    temp=rank3;
                    rank3=realck;
                    realck=temp;
                }
                $('.rank1').html("🥇First : " + rank1 +" 下")
                $('.rank2').html("🥈Second: " + rank2 +" 下")
                $('.rank3').html("🥉Third : " + rank3 +" 下")
            }
        }
        //打地鼠
        if(ckberopen==1){
            $('.cont4_time').html("剩餘" + (Math.trunc(ckbeartime/2-0.5)) + "s");
            //圖片到計數秒數行為
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                    if(cont4_arr[i][j][0]!=0){
                        cont4_arr[i][j][1]-=1;
                        if(cont4_arr[i][j][1]<=0){//初始化
                            cont4_arr[i][j][0]=0;
                            $('.row'+(i+1)+'_col'+(j+1)).html(`<img src="hole0.png" width="150">`)
                        }
                    }
                }
            }
            if((ckbeartime%2)==0){
                probabilitySystem(1);//機率系統一
            }else if((ckbeartime%2)==1){
                probabilitySystem(2);//機率系統二
            }
            if(ckbeartime%3==0){
                probabilitySystem(3);//機率系統三
            }
            ckbeartime-=1;
            if(ckbeartime<= 0){//時間結束reset
                cont4_reset();
            }
        }
        t = setTimeout (time,500);
        }
    time();
    $('.startbtn').click(function(){
        realck=0;
        contin = 1;
        diss=0;
        startck=0;
    });
    var t;
    $('.cont3img').click(function(){
        if(contin==1){
            realck++;
        }
        startck++;
        clearTimeout(t);
        $('.cont3img').html('<img src="OMG2.png" width="444" height="790">');
        const audio = document.createElement("audio");
        audio.src = "music.mp3";
        audio.play();
        $('.content3').css('cursor','grabbing')
        $('.cont3txt').html("<h1>"+startck+"</h1>");
        $('.cont3txt').css('transform','rotate(10deg)');
        t=setTimeout(function(){
            $('.content3').css('cursor','grab')
            $('.cont3img').html('<img src="OMG1.png" width="444" height="790">');
            $('.cont3txt').css('transform','rotate(0deg)');
        },125);
    });
});

$(document).ready(function(){
    /* 打地鼠起點 - 打地鼠起點 - 打地鼠起點 - 打地鼠起點 - 打地鼠起點 */
    $('.cont4_startbtn').click(function(){ //開始按鈕
        cont4_start();
    });
    $('.cont4_stopbtn').click(function(){ //暫停按鈕
        cont4_stop();
    });
    $('.cont4_resetbtn').click(function(){ //reset按鈕
        cont4_reset();
    });
    $('.cont4_bk div div').click(function(){ //圖片點擊事件
        var iii=parseInt((this.className).substr(3,1))-1,jjj=parseInt((this.className).substr(8,1))-1;
        if(ckberopen==1){
            if(cont4_arr[iii][jjj][1]>0){
                cont4_arr[iii][jjj][1]=0;
                $(this).html(`<img src="hole0.png" width="150">`);
                if(cont4_arr[iii][jjj][0]==1)cont4_score+=1;
                else if(cont4_arr[iii][jjj][0]==2)cont4_score+=10;
                else if(cont4_arr[iii][jjj][0]==3){//rick搖-禁止
                    $('.content5').html(`<video src="rkrol.mp4" autoplay="autoplay" height="auto" width="1200px">ERROR</video>`);
                    rick=1;
                    $('.cont4_stopbtn').css('background-color','rgb(158, 158, 158)')
                    $('.cont4_stopbtn').css('cursor','default');
                    $('.cont4_stopbtn').css('opacity','60%');
                    stop_thread[8]=setTimeout(function(){
                        rick=0;
                        $('.content5').html("");
                        $('.cont4_stopbtn').css('background-color','rgb(43, 43, 43)');
                        $('.cont4_stopbtn').css('cursor','pointer');
                        $('.cont4_stopbtn').css('opacity','100%');
                    },6600);
                }
                else if(cont4_arr[iii][jjj][0]==4){//抽獎
                    dola=1;
                    cont4_stop();
                    /* A夢動畫*/
                    setTimeout(cont4_dolaAnimation(),0);
                }
                cont4_arr[iii][jjj][0]=0; //該狀態設為0
                $('.cont4_score').html(cont4_score+"分"); //載入分數
            }
        }
    });
    /* 打地鼠終點 - 打地鼠終點 - 打地鼠終點 - 打地鼠終點 - 打地鼠終點 */















    
    $('.content1-button').click(function(){
        if(open==0){
            open=1;
            $('.time').css("opacity" ,"100%");
            $('.time').css("top" ,"330px");
        }else{
            open=0;
            $('.time').css("opacity" ,"0%");
            $('.time').css("top" ,"-350px");

        }
    });
    $('.timeopen').click(function(){
        if(open==0){
            open=1;
            $('.time').css("opacity" ,"100%");
            $('.time').css("top" ,"330px");
            loadWeather("taiwan");
        }else{
            open=0;
            $('.time').css("opacity" ,"0%");
            $('.time').css("top" ,"-350px");
        }
    });
    $('.closebtn').click(function(){
        open=0;
        $('.time').css("opacity" ,"0%");
        $('.time').css("top" ,"-350px");
    });
});

function loadWeather(cityCoords){
    var latlng =25.0336 + "," +  121.5644;
    var forecastURL = "https://api.forecast.io/forecast/982ecb3e65ae65c6d9db9ce3dea7c90c/"+latlng;
    //備用： https://api.forecast.io/forecast/52cec5ff313a4d19b60540cfe89675a5
    console.log(forecastURL);
    $.ajax({
        url: forecastURL,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        /* 成功 */
        success: function(json){
            console.log(json);
            $('.K101temp').html("<h3>溫度：" + ((json.currently.temperature-32)*(5/9)).toFixed(2)+"&#176;C / " + json.currently.temperature + "&#176;F</h3>");
            $('.K101wet').html("<h3>濕度：" + json.currently.humidity + "</h3>");
            $(".K101des").html("<h3>天氣狀態：" + json.currently.icon + "</h3>");
        },
        /* 錯誤 */
        error: function(e){
            console.log(e.message);
        }
    });
}
$(document).ready(function(){
    $('.content1-button').click(function(){
        loadWeather("taiwan");
    });
});


var lastclick,movein=0;
$(document).ready(function(){
    $('.TaiwanIMG div').mouseover(function(){
        movein=1;
        if(lastclick!=('.' + this.className)){
            $(this).css('background-color', 'rgb(255, 251, 0)');
            $(this).css('transform', 'scale(1.6)');
        }
    })
    $('.TaiwanIMG div').mouseout(function(){
        if(movein!=2 && lastclick!=('.'+this.className)){
            $(this).css('background-color', 'rgba(255, 255, 255, 0.8)');
            $(this).css('transform', 'scale(1)');
        }
        movein=0;
    })
    $('.TaiwanIMG div').click(function(){
        movein=2;
        $('.CSweather').css('background-color','#505050');
        $(lastclick).css('transform', 'scale(1)');
        $(lastclick).css('background-color', 'rgba(255, 255, 255, 0.8)');
        $(this).css('background-color','rgb(255, 187, 0)');
        $(this).css('transform', 'scale(1.6)');
        lastclick='.' + this.className;
    });

function loadWeather(citycode){
    let api_key = 'CWB-C96B02A5-E839-4870-B96E-B529AFC22581'
    let forecastURL = `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/`+citycode+`?Authorization=${api_key}&format=JSON` 
    console.log(forecastURL);
    $(document).ready(function(){
    $('.div').html("載入中");
    $.ajax({
    url: forecastURL,
    type: "get",
    dataType:"json",
    success: function (info) {
        console.log(info);
        var abc="",num;
        for(i=0;i<40;i++){
            $('.div'+i).html("");
            $('.div'+i).css('border','none');
        }
        if(info.cwbopendata.dataset.locations.location.length%4>0){
            num=(info.cwbopendata.dataset.locations.location.length-(info.cwbopendata.dataset.locations.location.length%4))/4+1;
        }else{
            num=info.cwbopendata.dataset.locations.location.length/4;
        }
        $('.CSweather').css('height',num*194);
        if(info.cwbopendata.dataset.locations.location.length>40)alert("ERROR");
        for(i=0;i<info.cwbopendata.dataset.locations.location.length;i++){
            console.log(i);
            var temp=info.cwbopendata.dataset.locations.location[i];
            $('.div'+i).html("<h3>"+`<font color=yellow>` + temp.locationName + " " + temp.weatherElement[12].time[0].elementValue[0].value + "</font></h3>" +
                            "最高溫：" + temp.weatherElement[3].time[0].elementValue.value+ "&#176;C" + " 最低溫：" + temp.weatherElement[4].time[0].elementValue.value + "&#176;C" + "<br>"+
                            "平均溫度："+ (temp.weatherElement[0].time[0].elementValue.value) +"&#176;C"+ "<br>" +
                            "平均濕度："+ temp.weatherElement[2].time[0].elementValue.value+"%"+"<br>"+
                            `<font color=aqua>` + "降雨機率："+temp.weatherElement[9].time[0].elementValue.value+"%"+"</font><br>"+
                            `<font color="orange">`+ "紫外線：" +temp.weatherElement[13].time[0].elementValue[0].value+ "級  " +temp.weatherElement[13].time[0].elementValue[1].value + "曬傷指數</font><br>"
            );
            $('.div'+i).css('border','solid 2px black');
        }
    },
    error: function (data) {
        console.log("請求失敗");
    }
});
});
} 
$(document).ready(function(){
    $('.Keelung').click(function(){ loadWeather("F-D0047-051");});
    $('.NewTaipei').click(function(){ loadWeather("F-D0047-071");});
    $('.Taipei').click(function(){ loadWeather("F-D0047-063");});
    $('.Taoyuan').click(function(){ loadWeather("F-D0047-007");});
    $('.HsinchuC').click(function(){ loadWeather("F-D0047-011");});
    $('.HsinchuS').click(function(){ loadWeather("F-D0047-055");});
    $('.Miaoli').click(function(){ loadWeather("F-D0047-015");});
    $('.Taichung').click(function(){ loadWeather("F-D0047-075");});
    $('.Changhua').click(function(){ loadWeather("F-D0047-019");});
    $('.Nantou').click(function(){ loadWeather("F-D0047-023");});
    $('.Yunlin').click(function(){ loadWeather("F-D0047-027");});
    $('.ChiayiC').click(function(){ loadWeather("F-D0047-031");});
    $('.ChiayiS').click(function(){ loadWeather("F-D0047-059");});
    $('.Tainan').click(function(){ loadWeather("F-D0047-079");});
    $('.Kaohsiung').click(function(){ loadWeather("F-D0047-067");});
    $('.Pingtung').click(function(){ loadWeather("F-D0047-035");});
    $('.Yilan').click(function(){ loadWeather("F-D0047-003");});
    $('.Hualien').click(function(){ loadWeather("F-D0047-043");});
    $('.Taitung').click(function(){ loadWeather("F-D0047-039");});
    $('.Penghu').click(function(){ loadWeather("F-D0047-047");});
    $('.Kinmen').click(function(){ loadWeather("F-D0047-087");});
    $('.Lienchiang').click(function(){ loadWeather("F-D0047-083");});
});
//20220609
});
$(document).ready(function(){
    $('.send').click(function(){
        var choosecity=document.getElementById("city4").value;
        var choosedist=document.getElementById("dist4").value;
        if(choosecity=='基隆市')loadWeather2("F-D0047-051",choosedist);
        if(choosecity=='新北市')loadWeather2("F-D0047-071",choosedist);
        if(choosecity=='臺北市')loadWeather2("F-D0047-063",choosedist);
        if(choosecity=='桃園市')loadWeather2("F-D0047-007",choosedist);
        if(choosecity=='新竹縣')loadWeather2("F-D0047-011",choosedist);
        if(choosecity=='新竹市')loadWeather2("F-D0047-055",choosedist);
        if(choosecity=='苗栗縣')loadWeather2("F-D0047-015",choosedist);
        if(choosecity=='臺中市')loadWeather2("F-D0047-075",choosedist);
        if(choosecity=='彰化縣')loadWeather2("F-D0047-019",choosedist);
        if(choosecity=='南投縣')loadWeather2("F-D0047-023",choosedist);
        if(choosecity=='雲林縣')loadWeather2("F-D0047-027",choosedist);
        if(choosecity=='嘉義縣')loadWeather2("F-D0047-031",choosedist);
        if(choosecity=='嘉義市')loadWeather2("F-D0047-059",choosedist);
        if(choosecity=='臺南市')loadWeather2("F-D0047-079",choosedist);
        if(choosecity=='高雄市')loadWeather2("F-D0047-067",choosedist);
        if(choosecity=='屏東縣')loadWeather2("F-D0047-035",choosedist);
        if(choosecity=='宜蘭縣')loadWeather2("F-D0047-003",choosedist);
        if(choosecity=='花蓮縣')loadWeather2("F-D0047-043",choosedist);
        if(choosecity=='臺東縣')loadWeather2("F-D0047-039",choosedist);
        if(choosecity=='澎湖縣')loadWeather2("F-D0047-047",choosedist);
        if(choosecity=='金門縣')loadWeather2("F-D0047-087",choosedist);
        if(choosecity=='連江縣')loadWeather2("F-D0047-083",choosedist);
    })
})
function loadWeather2(citycode,distcode){
    let api_key = 'CWB-C96B02A5-E839-4870-B96E-B529AFC22581'
    let forecastURL = `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/`+citycode +`?Authorization=${api_key}&format=JSON` 
    console.log(forecastURL);
    $(document).ready(function(){
        $('.div').html("載入中");
        $.ajax({
            url: forecastURL,
            type: "get",
            dataType:"json",
            success: function (info) {
                for(i=0;i<info.cwbopendata.dataset.locations.location.length;i++){
                    var temps=info.cwbopendata.dataset.locations.location[i];
                    if(temps.locationName==distcode){
                        $('.ctdiv').html(document.getElementById("city4").value+ " - " +document.getElementById("dist4").value);
                        for(j=0;j<15;j++){
                            if(j==7||j==8){
                                $('.ctdiv'+j).html("<b>" + temps.weatherElement[j].description+"：</b>"+temps.weatherElement[j].time[0].elementValue[0].value+" " +temps.weatherElement[j].time[0].elementValue[1].value);
                            }else if(j==11){
                                $('.ctdiv'+j).html("<b>" + temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue[0].value+" " +temps.weatherElement[j].time[0].elementValue[0].measures + "<b> " +
                                temps.weatherElement[j].time[0].elementValue[1].measures + "：</b>" + temps.weatherElement[j].time[0].elementValue[1].value );
                            }else if(j==12){
                                $('.ctdiv'+j).html("<b>"+temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue[0].value);
                            }else if(j==13){
                                $('.ctdiv'+j).html("<b>"+temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue[0].value + "級 <b>" + temps.weatherElement[j].time[0].elementValue[1].measures+"：</b>"+
                                temps.weatherElement[j].time[0].elementValue[1].value);
                            }else if(j==2){
                                $('.ctdiv'+j).html("<b>"+temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue.value + "%");
                            }else if(j==9){
                                $('.ctdiv'+j).html(`<font color="blue"><b>`+temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue.value + "%</font>");
                            }
                            else{
                                $('.ctdiv'+j).html("<b>"+temps.weatherElement[j].description+"</b>："+temps.weatherElement[j].time[0].elementValue.value);
                            }
                        }
                        break;
                    }
                }
                console.log(info);
            },
            error: function (data) {
                console.log("請求失敗");
            }
        });
    });
}
