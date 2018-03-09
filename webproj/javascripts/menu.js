/**
 * Created by luwen on 2017/12/26.
 */
var ctx;
var MENU=0;
var RUN=1;
var state=MENU;
$(function(){
    var canvas=document.getElementById("gamecanvas");
    ctx=canvas.getContext("2d");
    drawMenu(ctx);
    canvas.onmousedown=function(e){
        var mX= e.clientX;
        var mY= e.clientY;
        switch (state){
            case MENU:
                if(mX>500&mX<650&&mY>400&&mY<430){
                    playGame(canvas,ctx);
                }
                state=RUN;
                break;
            case RUN:
                //游戏中点击鼠标调用技能。
                break;
        }

    }
})

function drawMenu(ctx){
    var coverImg=new Image();
    coverImg.onload=function(){
       ctx.drawImage(coverImg,0,0,800,600);
    }
    coverImg.src="img/cover.jpg";
    var menuImg=new Image();
    menuImg.onload=function(){
        ctx.drawImage(menuImg,500,400);
    }
    menuImg.src="img/menu_new1.png"

}
