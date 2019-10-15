var drawBackGround = function (src) {
    this.width = src.width;
    this.height = src.height;

    var scrollSpeed = 5;
    this.draw = function (ctx) {
        ctx.drawImage(src, this.width, 0, canvas1.canvas.width, canvas1.canvas.height);
        ctx.drawImage(src, this.width - canvas1.canvas.width, 0, canvas1.canvas.width, canvas1.canvas.height);
        this.width += scrollSpeed;
        if (this.width == canvas1.canvas.width) {
            this.width = 0;
        }
    }
}