'use strict'

function Lives(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 60;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

Lives.prototype.draw = function() {
    var carImage = new Image();
    carImage.src = '../images/pepper.png'

    carImage.width = 60;
    carImage.height = 60;


    this.ctx.drawImage(carImage, this.x, this.y, 60, 60)

};

Lives.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

Lives.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};