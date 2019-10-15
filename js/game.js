

/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas1.getContext("2d");
canvas1.style.display="none";

var canvas2=document.getElementById("myCanvas2");
var ctx2=canvas2.getContext("2d");
canvas2.style.display="none";*/

var canvasObject =function(canvaID)
{
    this.canvas=null;
    this.context=null;
    this.create=function()
    {
        this.canvas=document.getElementById(canvaID);
        this.context=this.canvas.getContext("2d");
        return this.context;
    }
}

var canvas1=new canvasObject('myCanvas');
canvas1.create();
canvas1.canvas.style.display="none";

var canvas2=new canvasObject('myCanvas2');
canvas2.create();
canvas2.canvas.style.display="none";

var xcoorBackground=0;
var spacePressed=false;
var xCharacter=90;
var yCharacter=180;
var score = 0;
var tomX=0;
var tomY=160;
var m=0;
var x= canvas1.canvas.width;
var y= canvas1.canvas.height;
//--------------------------------------------------
var start=0;
 var xcar=canvas1.canvas.width - 140;
 var ycar=canvas1.canvas.height -180;

var level1=true;
var level2=false;
var level3=false;

var bb=new Image();
bb.src='cartoon.jpg';


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
var coordinateCheese =[];

for (var i=0; i<50; i++){
    var cx=Math.floor(Math.random() * canvas1.canvas.width)+100;
    var cy=Math.floor(Math.random() * canvas1.canvas.height)-100;
    coordinateCheese.push([cx,cy]);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function beginLevel2(){
    x = canvas1.canvas.width;
    y = canvas1.canvas.height;
    
    xcoorBackground=0;
    spacePressed=false;
    xCharacter=90;
    yCharacter=180;
    tomX=0;
    tomY=160;
    m=0;
    start=0;
    level2=true;
    checkGameOver=false;
    // coordinateCheese =[];
    // for (var i=0; i<30; i++){
    //     var cx=Math.floor(Math.random() * canvas1.canvas.width+100);
    //     var cy=Math.floor(Math.random() * canvas1.canvas.height-100);
    //     coordinateCheese.push([cx,cy]);
    // }
}


function beginLevel3(){
    x = canvas1.canvas.width;
    y = canvas1.canvas.height;
    
    xcoorBackground=0;
    spacePressed=false;
    xCharacter=90;
    yCharacter=180;
    tomX=0;
    tomY=160;
    m=0;
    level3=true;
    start=0;
    checkGameOver=false;
    coordinateCheese =[];
    for (var i=0; i<30; i++){
        var cx=Math.floor(Math.random() * canvas1.canvas.width+100);
        var cy=Math.floor(Math.random() * canvas1.canvas.height-100);
        coordinateCheese.push([cx,cy]);
    }
}




 

  function drawbarrier1()
  {
      var img1=new Image();
      img1.src="img/barrier1.jpg";
      canvas1.context.beginPath();
      canvas1.context.drawImage(img1,x/2,y/2,300,260);
      canvas1.context.closePath();
  }
  function drawbarrier2()
  {
      var img1=new Image();
      img1.src="img/barrier2.jpg";
      canvas1.context.beginPath();
      canvas1.context.drawImage(img1,x/4,y/2,300,260);
      canvas1.context.closePath();
  }






  //-------------------------------------------------------
  //---------------------------------------------------
    function begin(){
        canvas1.context.font = "100px bold Arial";
        canvas1.context.fillStyle="black";
        //canvas1.context.fillText("Click Enter To Start",x/6,y/2);
    }

//-------------------------------------------
//----------------------------------------

  function draw() {
   canvas1.context.clearRect(0, 0, canvas1.canvas.width, canvas1.canvas.height);
   drawCharacter();
   drawCheese();
   drawCars();
   drawScore();
   drawBackGround2();
   drawTom();
   collisionDetection();
   if(spacePressed ==true) {
  
    if(yCharacter<20) {
        yCharacter +=20;
        tomY +=20;
    }
    else{
        yCharacter -=20;
        tomY -=20;
    }
}


if(spacePressed==false){
    yCharacter +=20;
    tomY +=20;
}

  if(xcoorBackground< -2560){
      xcoorBackground=0;
  }

  if(xCharacter == canvas1.canvas.width-50){
    
    if(level3 == true){
        if (score >= 90){
            alert ('very good'); 
        }else {
            window.location.href='game2.html';
        }
    }else if(level2 == true){
        if (score >= 60){
             beginLevel3(); 
        }else{
            window.location.href='game2.html';
        }
    }else{
        if (score >= 30){
            beginLevel2(); 
        }else{
            window.location.href='game2.html';
        }
    }
  }
  // xCharacter +=5;
   
   canvas2.canvas.width -=3;
   //tomX+=5;

   if (yCharacter >= canvas1.canvas.height-70){
    yCharacter=y-100;
    tomY=y-100;
    }
    // move the car 
    xcar-=3;

  }
  var play = setInterval(draw,70);
  setTimeout(() => {
      begin();
      clearInterval(play);
  }, 150);

  


        

