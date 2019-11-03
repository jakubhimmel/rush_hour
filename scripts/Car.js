'use strict'

function Car(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = 300;
    this.width = 150;
    this.y = 0 + this.size;
    this.x = x;
    this.speed = speed;
}

Car.prototype.draw = function() {
    this.ctx.fillStyle = '#FF6F27';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
};

Car.prototype.updatePosition = function() {
    this.x = this.x - this.speed;
};

Car.prototype.isInsideScreen = function() {
    // if x plus half of its size is smaller then 0 return
    return this.x + this.size / 2 > 0;
};