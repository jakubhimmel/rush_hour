'use strict'

function SpeedChange(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 10;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

SpeedChange.prototype.draw = function() {
    this.ctx.fillStyle = 'white';

    this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

SpeedChange.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

SpeedChange.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};