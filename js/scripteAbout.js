function sound(src)
{
    this.sound = document.createElement("embed");
    this.sound.src = "Tune.mp3";
    this.sound.setAttribute("loop","true");
    this.sound.setAttribute("hidden","true  ");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

addEventListener("load",sound("Tune.mp3"));

function soundBg(src)
{
    this.sound = document.createElement("bgsound");
    this.sound.src = "Tune.mp3";
    this.sound.setAttribute("infinite","loop");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}


function sounde(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    // this.stop = function(){
    //   this.sound.pause();
    // }
  }

  addEventListener("load",sounde("Tune.mp3"));

var x = true;
  function muteS()
  {
    //   alert("ss");
    var imagex = document.getElementById("sound");
    
      if(x == true)
      {
          imagex.style.cssText="background: url(img/mute.png) repeat 0 0; background-size: 50px 50px; background-repeat: no-repeat;  border: 0px;width: 50px;height: 50px; position: absolute; margin-left: -1060px;   margin-top: -90px;";
          x = false;
      }
      else{
        imagex.style.cssText="background: url(img/on.png) repeat 0 0; background-size: 50px 50px; background-repeat: no-repeat;  border: 0px;width: 50px;height: 50px; position: absolute; margin-left: -1060px;   margin-top: -90px;";
        x = true;
      }
  }

  ///////////////////////////////////////////////////////CHARACTERS SCRIPT//////////////////////////////////////////////

function character()
{

}

  var canvas = document.getElementById("charCanvas");
  var ctx = canvas.getContext("2d");
  var jerryImage = new Image();
  jerryImage.src = "img/spike.png";

  function draw()
  {
      ctx.drawImage(jerryImage,50,100,200,200);
  }
  setInterval(draw,10);

///////////////////////////////////////////////////////HELP//////////////////////////////////
function goBack()
{
  window.history.back();
}