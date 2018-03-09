/**
 * Created by luwen on 2017/12/26.
 */
var enemyArr=[];//敌人坐标数组
var bulletArr=[];//子弹坐标数组
var pX,pY;
var score=0;
function playGame(){//启动游戏循环，每50毫秒刷新一次
    setInterval(mainLoop,50);
}
function mainLoop(){//游戏主循环，调用各函数
    addEnemy();//添加敌人
    addBullet(pX,pY);//添加子弹
    rollBack();//背景滚动
   drawEnemy();//绘制敌人，敌人移动
   drawBullet();//绘制子弹及移动
    drawPlayer();
   collid();//碰撞检测
}
var playerImg=new Image();
onmousemove=function(e){
    pX= e.clientX;
    pY= e.clientY;

}
function drawPlayer(){
    playerImg.onload=function(){
        ctx.drawImage(playerImg,pX-27,pY-27)
    }
    playerImg.src="img/image 123.png";
}
function addEnemy(){
    var y=-90;
    var x=Math.random()*700+40;//随机获取x坐标值，取值范围：40--740.
    var pos=[x,y];
    if(enemyArr.length<10){
        enemyArr.push(pos);
    }
}

function addBullet(pX,pY){
    var x=pX-15,y=pY-27;
    var pos=[x,y];
    if(bulletArr.length<20){
        bulletArr.push(pos);
    }
}
var backImg=new Image();//背景图片对象
var backImgArr=[backImg,backImg]; //背景图片数组用于滚动个地图。
var backY=0;
var i= 0,j= 1,isEnd=false;
function rollBack(){
    backY-=4;//设定屏幕移动步距为4像素每帧。
     if(backY<-602){
         backY=0;
         isEnd=true;
     }else{
         isEnd=false;
     }
    if(isEnd){
        i=1;
        j=0;
    }else{
        j=1;
        i=0;
    }
    backImg.onload=function(){

        ctx.drawImage(backImgArr[i],0,backY,800,600);
        ctx.drawImage(backImgArr[j],0,backY+602,800,600);

    }
    backImg.src="img/backgrond.jpg";
     drawEnemy();
}
var enemyImg=new Image();
function drawEnemy(){
    enemyImg.onload=function(){
    for(var i=0;i<enemyArr.length;i++){
        var pos=enemyArr[i];
        pos[1]+=5;
        ctx.drawImage(enemyImg,pos[0],pos[1]);
        if(pos[1]>680)
        enemyArr.splice(i,1);
       }
    }
    enemyImg.src="img/image 385.png";
}
var bulletImg=new Image();
function drawBullet(){
    bulletImg.onload=function(){
    for(var i=0;i<bulletArr.length;i++){
        var pos=bulletArr[i];
        pos[1]-=8;
        ctx.drawImage(bulletImg,pos[0],pos[1]);
        if(pos[1]<-30)bulletArr.splice(i,1);
         }
    }
    bulletImg.src="img/image 755.png"
}
function collid(){
     for(var i=0;i<enemyArr.length;i++){
         var enePos=enemyArr[i];
          for(var j=0;j<bulletArr.length;j++){
              var bulletPos=bulletArr[j];
              if(!(bulletPos[0]>enePos[0]+68||bulletPos[0]+30<enePos[0]
                  ||bulletPos[1]>enePos[1]+64||bulletPos[1]+26<enePos[1])){
                   enemyArr.splice(i,1);
                   bulletArr.splice(j,1);
                  score+=10;
              }
          }
     }
}