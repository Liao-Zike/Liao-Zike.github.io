var R=255,G=0,B=0;
var start=0,stop=0;
var id=0;
var val=5;

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
        $('.OK').text(R+','+G+','+B);
    });
}




