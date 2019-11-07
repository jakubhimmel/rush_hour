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
    var liveRight = live.x + live.size;
    var liveLeft = live.x;

    var crossVertical = bikerLeft <= liveRight && bikerRight >= liveLeft;
    var crossHorizontal = bikerTop <= liveBottom && bikerBottom >= liveTop;
    var partialCrossLeft = liveRight >= bikerLeft && liveLeft <= bikerLeft;
    var partialCrossRight = liveRight >= bikerRight && liveLeft <= bikerRight;



    if (crossHorizontal && crossVertical || partialCrossLeft && partialCrossRight) {
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
    var pointRight = point.x + point.size;
    var pointLeft = point.x;

    var crossVertical = bikerLeft <= pointRight && bikerRight >= pointLeft;
    var crossHorizontal = bikerTop <= pointBottom && bikerBottom >= pointTop;
    var partialCrossLeft = pointRight >= bikerLeft && pointLeft <= bikerLeft;
    var partialCrossRight = pointRight >= bikerRight && pointLeft <= bikerRight;



    if (crossHorizontal && crossVertical || partialCrossLeft && partialCrossRight) {
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
    var speedRight = speed.x + speed.size;
    var speedLeft = speed.x;

    var crossVertical = bikerLeft <= speedRight && bikerRight >= speedLeft;
    var crossHorizontal = bikerTop <= speedBottom && bikerBottom >= speedTop;
    var partialCrossLeft = speedRight >= bikerLeft && speedLeft <= bikerLeft;
    var partialCrossRight = speedRight >= bikerRight && speedLeft <= bikerRight;



    if (crossHorizontal && crossVertical || partialCrossLeft && partialCrossRight) {
        return true;
    }
    return false;
};



Biker.prototype.handleScreenCollision = function() {
    var leftEdge = 45;
    var rightEdge = this.canvas.width;



    if (this.x < leftEdge) { this.x = 45; }
    if (this.x >= 685) { this.x = 685; }
};


Biker.prototype.removeLife = function() {
    this.lives -= 1;
};



Biker.prototype.addLife = function() {
    this.lives += 1;
};


Biker.prototype.draw = function() {
    var carImage = new Image();
    carImage.src = './../images/bike.png'

    carImage.width = 50
    carImage.height = 100;


    this.ctx.drawImage(carImage, this.x, this.y, 50, 100)


};