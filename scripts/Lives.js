'use strict'

function Lives(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 20;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}

Lives.prototype.draw = function() {
    this.ctx.fillStyle = 'green';

    this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

Lives.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

Lives.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};