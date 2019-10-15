var character=function(src,posX,posY,widthCh,heightCh)
{
    this.posX=posX;
    this.posY=posY;
    this.widthCh=widthCh;
    this.heightCh=heightCh;
    
    this.img =new Image();
   this.img.src=src;
    this.draw=function(ctx)
        {
            ctx.beginPath();
            ctx.drawImage(this.img,this.posX,this.posY,widthCh,heightCh);
            ctx.closePath();
            
        }
    
}
