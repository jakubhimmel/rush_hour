'use strict'

function AddPoints(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 10;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

AddPoints.prototype.draw = function() {
    this.ctx.fillStyle = 'yellow';

    this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

AddPoints.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

AddPoints.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};