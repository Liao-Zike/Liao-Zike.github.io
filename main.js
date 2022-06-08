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
        var t = null;
        var string="<h1>目前時間：" + year + "年";
        if(month<10) string += "0" + month + "月";
        else string += month + "月";
        if(day<10) string += "0" + day + "日";
        else string += day + "日";
        if(hour>12){
            if((hour-12)>10)string+= "下午" + (hour-12) +"時";
            else string+= "下午0" + (hour-12) +"時"
        }
        else{
            if((hour)>10)string+= "下午" + hour +"時";
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
            if(hour>10){
                $('.block_hourOK').css('width',hour/12*100+"%");
                $('.block_hour_circle').css('left','calc(' + (hour/12*100) + '%' + ' - 10px)');
            }
            else{
                $('.block_hourOK').css('width',hour/12*100+"%");
                $('.block_hour_circle').css('left','calc(' + (hour/12*100) + '%' + ' - 10px)');
            }
        }
        $('.block_minuteOK').css('width',minute/60*100+"%");
        $('.block_minute_circle').css('left','calc(' + (minute/60*100) + '%' + ' - 10px)')
        $('.block_secOK').css('width',sec/60*100+"%");
        $('.block_sec_circle').css('left','calc(' + (sec/60*100) + '%' + ' - 10px)')
        t = setTimeout (time,500);
        }
    time();
});
$(document).ready(function(){
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