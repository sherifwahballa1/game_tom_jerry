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