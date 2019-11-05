'use strict';

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.cars = [];
    this.livesArr = [];
    this.biker = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
}


Game.prototype.start = function() {

    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = this.gameScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.livesElement = this.gameScreen.querySelector('.lives .value');
    this.scoreElement = this.gameScreen.querySelector('.score .value');


    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);


    this.biker = new Biker(this.canvas, 3);

    this.keyPress = function(event) {
        if (event.keyCode === 37) {
            this.biker.moveLeft();
        } else if (event.keyCode === 39) {
            this.biker.moveRight();
        }
    };


    document.body.addEventListener('keydown', this.keyPress.bind(this));

    this.startLoop();
};

Game.prototype.startLoop = function() {
    var loop = function() {

        if (Math.random() > 0.98) {


            var randomX = [109, 218, 327, 436, 545, 654];
            var randomValue = randomX[Math.floor(randomX.length * Math.random())];

            var newCar = new Car(this.canvas, randomValue, 5);



            this.cars.push(newCar)
        };

        if (Math.random() > 0.99) {


            var randomX = [109, 118, 155, 170, 200, 218, 256, 278, 303, 314, 327, 344, 377, 398, 410, 436, 460, 476, 500, 515, 535, 580, 545, 569, 580, 620, 654];
            var randomValue = randomX[Math.floor(randomX.length * Math.random())];



            var newLives = new Lives(this.canvas, randomValue, 5);



            this.livesArr.push(newLives)
        };





        this.biker.handleScreenCollision();


        this.checkCollisions();


        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.biker.draw();

        this.cars.forEach(function(item) {
            item.updatePosition();
            item.draw();
        });

        this.livesArr.forEach(function(item) {
            item.updatePosition();
            item.draw();
        });

        this.cars = this.cars.filter(function(car) {

            return car.isInsideScreen();
        })

        this.livesArr = this.livesArr.filter(function(live) {

            return live.isInsideScreen();
        })



        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }
        this.updateGameStats();
    }.bind(this);


    window.requestAnimationFrame(loop);
}


Game.prototype.checkCollisions = function() {
    this.cars.forEach(function(car) {
        if (this.biker.didCollide(car)) {
            this.biker.removeLife();

            car.y = 0 - car.size;

            if (this.biker.lives === 0) {
                this.gameOver();
            }
        }

    }, this);

    this.livesArr.forEach(function(live, index) {
        if (this.biker.getLive(live)) {
            this.biker.lives++;
            live.y = 0 - live.size;
            this.livesArr.splice(index, 1)
        }

    }, this)



};

Game.prototype.passGameOverCallback = function(callback) {
    this.onGameOverCallback = callback;
};

Game.prototype.gameOver = function() {
    // flag `gameIsOver = true` stops the loop
    this.gameIsOver = true;

    // Call the gameOver function from `main` to show the Game Over Screen
    this.onGameOverCallback();
};

Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();
};

Game.prototype.updateGameStats = function() {
    this.score += 1;
    this.livesElement.innerHTML = this.biker.lives;
    this.scoreElement.innerHTML = this.score;
}