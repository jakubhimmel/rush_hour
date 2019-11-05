'use strict';

function Biker(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.height = 100;
    this.width = 50;
    this.x = this.canvas.width / 2;
    this.y = (this.canvas.height - this.height) - 20;
    this.speed = 20;

}


Biker.prototype.moveLeft = function() {
    this.x -= this.speed;
}

Biker.prototype.moveRight = function() {
    this.x += this.speed;
}


Biker.prototype.didCollide = function(car) {
    var bikerLeft = this.x;
    var bikerRight = this.x + this.width;
    var bikerTop = this.y;
    var bikerBottom = this.y + this.height;

    var carLeft = car.x;
    var carRight = car.x + car.size / 2;
    var carTop = car.y;
    var carBottom = car.y + car.size;

    var crossHorizontal = carLeft <= bikerRight && carRight >= bikerLeft;
    var crossVertical = carBottom >= bikerTop && carTop <= bikerBottom;


    if (crossHorizontal && crossVertical) {
        return true;
    }
    return false;
};

Biker.prototype.getLive = function(live) {


    var bikerLeft = this.x;
    var bikerRight = this.x + this.width;
    var bikerTop = this.y;
    var bikerBottom = this.y + this.height;





    var liveBottom = live.y + live.size;
    var liveTop = live.y;
    var liveRight = live.x;
    var liveLeft = live.x + live.size;

    var crossVertical = bikerLeft <= liveRight && bikerRight >= liveLeft;
    var crossHorizontal = bikerTop <= liveBottom && bikerBottom >= liveTop;



    if (crossHorizontal && crossVertical) {
        return true;
    }
    return false;
};

Biker.prototype.AddPoints = function(point) {


    var bikerLeft = this.x;
    var bikerRight = this.x + this.width;
    var bikerTop = this.y;
    var bikerBottom = this.y + this.height;





    var pointBottom = point.y + point.size;
    var pointTop = point.y;
    var pointRight = point.x;
    var pointLeft = point.x + point.size;

    var crossVertical = bikerLeft <= pointRight && bikerRight >= pointLeft;
    var crossHorizontal = bikerTop <= pointBottom && bikerBottom >= pointTop;



    if (crossHorizontal && crossVertical) {
        return true;
    }
    return false;
};


Biker.prototype.SpeedChange = function(speed) {


    var bikerLeft = this.x;
    var bikerRight = this.x + this.width;
    var bikerTop = this.y;
    var bikerBottom = this.y + this.height;





    var speedBottom = speed.y + speed.size;
    var speedTop = speed.y;
    var speedRight = speed.x;
    var speedLeft = speed.x + speed.size;

    var crossVertical = bikerLeft <= speedRight && bikerRight >= speedLeft;
    var crossHorizontal = bikerTop <= speedBottom && bikerBottom >= speedTop;



    if (crossHorizontal && crossVertical) {
        return true;
    }
    return false;
};



Biker.prototype.handleScreenCollision = function() {
    var leftEdge = 0;
    var rightEdge = this.canvas.width;



    if (this.x < leftEdge) { this.x = 0; }
    if (this.x >= 723) { this.x = 718; }
};


Biker.prototype.removeLife = function() {
    this.lives -= 1;
};

Biker.prototype.addLife = function() {
    this.lives += 1;
};

Biker.prototype.addLife = function() {
    this.lives += 1;
};


Biker.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
3