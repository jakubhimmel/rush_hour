'use strict'

function AddPoints(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 60;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

AddPoints.prototype.draw = function() {
    var carImage = new Image();
    carImage.src = './images/taco.png'

    carImage.width = 60;
    carImage.height = 60;


    this.ctx.drawImage(carImage, this.x, this.y, 60, 60)

};

AddPoints.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

AddPoints.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};