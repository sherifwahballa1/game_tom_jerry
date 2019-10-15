
var spacePressed=false;
var sc=0;
var level1Timer=30;
var level2Timer=20;
var level3Timer= 10;
 var level1=true;
 var level2=false;
 var level3=false;




 function setCoordinate(size){
      var coordinate=[];
      for (var i=0; i<size; i++){
        var cx=Math.floor(Math.random() * canvas1.canvas.width-30)+200;
        var cy=Math.floor(Math.random() * canvas1.canvas.height-100)+100;
        coordinate.push([cx,cy]);
    }
    return coordinate;
 }

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key === ' ' || e.key === 'Spacebar') {
        spacePressed = true;
        document.getElementById("audio").play();
    }

    if(e.keyCode === '13' || e.key==='Enter'){
        spacePressed=true;
    }
}
 
function keyUpHandler(e) {
    if(e.key === ' ' || e.key === 'Spacebar') {
        spacePressed = false;
    }
}

var img =new Image();
img.src='img/scene3.png';

var background=new drawBackGround(img);

var url = new URL(window.location.href);
var choosedCharacter = url.searchParams.get("ch");

if(choosedCharacter=='tom'){
    var mainCharacter=new character('img/oo.png',70,200,90,40);
}else if(choosedCharacter == 'jerry'){
    var mainCharacter=new character('img/2.png',70,200,90,40);
}else if(choosedCharacter == 'spike'){
    var mainCharacter=new character('img/l.png',70,200,90,40);
}
else{
    window.location.href="start_page.html";
}


var canvas1=new canvasObject('myCanvas');
canvas1.create();

var canvas2=new canvasObject('myCanvas2');
canvas2.create();

var coordinateCheese =setCoordinate(50);
var coordinateStone=setCoordinate(10);


var cheese=[];
var stones=[];


function setCheese(){
    for(var i=0; i<coordinateCheese.length; i++)
    {
        if(choosedCharacter=='tom'){
            cheese[i]=new character('img/meat.png',coordinateCheese[i][0],coordinateCheese[i][1],40,20);
        }else if(choosedCharacter == 'jerry'){
            cheese[i]=new character('img/cheese.png',coordinateCheese[i][0],coordinateCheese[i][1],40,20);
        }else if(choosedCharacter == 'spike'){
            cheese[i]=new character('img/chichen.png',coordinateCheese[i][0],coordinateCheese[i][1],40,20);
        }
          
    }
}
function setStones(){
    for(var i=0; i<coordinateStone.length; i++)
    {
        stones[i]=new character('img/stone.png',coordinateStone[i][0],coordinateStone[i][1],40,20);
    }
}
setCheese();
setStones();



 
 var cars=new character('img/900.png',canvas1.canvas.width-140,canvas1.canvas.height-180,120,70);

 var scoree=new score('Score',8,20);
 var timer=new score('Time',canvas1.canvas.width-150, 20);
var level=new score("Level",canvas1.canvas.width/2,20)

 
 function collisionDetection() {

    var hCheese=20;
    var wCheese=40;
    for(var i=0;i<cheese.length;i++)
    {
       // console.log(stones[i].posY);
      if(mainCharacter.posY < cheese[i].posY+mainCharacter.heightCh && 
        mainCharacter.posY > cheese[i].posY-hCheese
        && mainCharacter.posX < cheese[i].posX  && 
         mainCharacter.posX > cheese[i].posX-50 )
        {
           sc++;
            cheese.splice(i,1);
       }
        
       
    }
    for(var i=0; i<stones.length; i++){
        if(mainCharacter.posY < stones[i].posY+mainCharacter.heightCh && 
            mainCharacter.posY > stones[i].posY-20
            && mainCharacter.posX < stones[i].posX  && 
             mainCharacter.posX > stones[i].posX-50 )
            {
               sc--;
                stones.splice(i,1);
           }
    }
    if(mainCharacter.posX > cars.posX-70 && mainCharacter.posX < cars.posX+120 && mainCharacter.posY == cars.posY+20){
        window.location.href="game2.html";
    }
 
}
 


function gameLoop()
{
    background.draw(canvas1.context);
    mainCharacter.draw(canvas1.context);
    scoree.draw(canvas1.context,sc);
    
    cars.draw(canvas1.context);
    cars.posX-=3;
    if(level3== true){
        timer.draw(canvas1.context,level3Timer);
        level.draw(canvas1.context,3);
        //clearInterval(interval2);
    
        if(level3Timer==0){
            if(sc >= 30){
                alert('good end game');
            }else{
                window.location.href="game2.html";
            }
        }
    }else if(level2 == true){
        //console.log(level2Timer);
        timer.draw(canvas1.context,level2Timer);
        level.draw(canvas1.context,2);
        if(level2Timer==0){
            if(sc >= 30){
                level3=true;
                setCheese();
                setStones();
                sc=0;
            }else{
                window.location.href="game2.html";
            }
        }
    }else{
        
        timer.draw(canvas1.context,level1Timer);
        level.draw(canvas1.context,1);
        if(level1Timer==0){
            if(sc >= 30){
                level2=true;
                setCheese();
                setStones();
                sc=0;
            }else{
                window.location.href="game2.html";
            }
        }
    }
    
    
    collisionDetection();
    for(var i=0; i<cheese.length; i++)
    {
        
        cheese[i].draw(canvas1.context);
        if(level2==true){
            cheese[i].posX-=4;
        }else if(level3==true)
        {
            cheese[i].posX-=3;
        }
        else
        {cheese[i].posX-=2;}
        

        if(cheese[i].posX < 20){
            cheese[i].posX=canvas1.canvas.width-40;
        }
    }

    for(var i=0; i<stones.length; i++)
    {
        
        stones[i].draw(canvas1.context);
        if(level2==true){
            stones[i].posX-=4;
        }else if(level3==true)
        {
            stones[i].posX-=3;
        }
        else
        {stones[i].posX-=2;}
        

        if(stones[i].posX < 20){
            stones[i].posX=canvas1.canvas.width-40;
        }
    }
  
    if(spacePressed ==true) {
  
        mainCharacter.posY -=4;
        if(mainCharacter.posY<1)
        {
            mainCharacter.posY=4;
        }
        
    }  
    
    
    if(spacePressed==false){
        
        mainCharacter.posY +=4;
        if(mainCharacter.posY>canvas1.canvas.height-40)
        {
            mainCharacter.posY=canvas1.canvas.height-40;
        }
    }    


    if(cars.posX<10)
    {
        cars.posX=canvas1.canvas.width-50;
    }


    requestAnimationFrame(gameLoop)
}





var interval1=0,interval2=0,interval3=0;
interval1=setInterval(()=>{
    level1Timer--;
},1000);
setTimeout(()=>{
    clearInterval(interval1);
},30000);
////////
setTimeout(()=>{
     interval2 = setInterval(()=>{
        level2Timer--;
    },1000);
},30000);

setTimeout(()=>{
    clearInterval(interval2);
},51000);
////
setTimeout(()=>{
    interval3 = setInterval(()=>{
       level3Timer--;
   },1000);
},51000);

setTimeout(()=>{
   clearInterval(interval3);
},62000);
//
gameLoop();

