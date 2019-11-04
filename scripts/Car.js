'use strict'

function Car(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 200 
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

Car.prototype.draw = function() {
    this.ctx.fillStyle = '#e74c3c';

    this.ctx.fillRect(this.x, this.y, this.size / 2, this.size);

};

Car.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

Car.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};

Car.prototype.renderingCollision = function() {
    var carBottom = this.y + this.size;
    var carTop = this.y


    var cross = carBottom >= carTop;


    if (cross === true) {
        return true;
    }
    return false;
}