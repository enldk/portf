/* 팝업 스크립트*/
function Func(){
    $(".popup").show(400);
}
$(function(){
    $(".close_btn").click(function(){
        $(".popup").hide();
    });
});

/** gnb 스크립트 */

$(function(){
    $(".menu>li").hover(function(){
        $(this).children('.sub_menu').stop().slideDown(800);
    },function(){
        $(this).children('.sub_menu').slideUp(800);
    });
});



var timer = setInterval(slideAuto(),1000);
 function slideAuto()
{
    $(".slide_box>div").animate({"margin-top":"-350px"},function(){
        $(".slide_box>div>div:first-child").appendTo(".slide_box>div");
        $(".slide_box>div").css("margin-top","0");
    });
   }


$(function(){
    $(".slide_box>div").hover(function(){
        clearInterval(timer);
    },function(){
        setInterval(timer,1000);
    });
});

setInterval(()=>{
    slideAuto()
},1000);