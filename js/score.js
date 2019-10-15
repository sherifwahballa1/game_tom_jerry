var score=function(text,posX,posY)
{
    this.posX=posX;
    this.posY=posY;
    this.text=text;
    this.sc=0;
    this.font="25px Arial";
    this.fillStyle="yellow";
     this.draw=function(ctx,sc){
         this.sc=sc;
        ctx.beginPath();
        ctx.font="25px Arial";
        ctx.fillStyle="yellow";
        ctx.fillText(this.text+": "+this.sc,this.posX,this.posY);
    }
}