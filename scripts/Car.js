'use strict'

function Car(canvas, x, speed, random) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 190; 
    this.y = 0;
    this.x = x;
    this.speed = speed;
    this.randomCar = random;

}

Car.prototype.draw = function(car) {
    var carImage = new Image();

    var carArray = ['./images/car/car1.png', './images/car/car2.png', './images/car/car3.png', './images/car/car4.png', './images/car/car5.png', './images/car/car6.png', './images/car/car7.png', './images/car/car8.png', './images/car/car9.png', './images/car/car10.png', './images/car/car11.png']


    carImage.src = carArray[this.randomCar];

    carImage.width = this.size / 2
    carImage.height = this.size


    this.ctx.drawImage(carImage, this.x, this.y, this.size / 2, this.size)



    return this.randomCar
};

Car.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
};

Car.prototype.isInsideScreen = function() {

    return this.y < this.canvas.height && this.x < this.canvas.width;
};

// Car.prototype.renderingCollision = function() {
//     var carBottom = this.y + this.size;
//     var carTop = this.y


//     var cross = carBottom >= carTop;


//     if (cross === true) {
//         return true;
//     }
//     return false;
// }