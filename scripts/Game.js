'use strict';

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
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
        // 1. UPDATE THE STATE OF biker AND ENEMIES

        // 0. Our biker was already created - via `game.start()`

        // 1. Create new enemies randomly
        // if (Math.random() > 0.98) {
        //     var randomX = this.canvas.width * Math.random();
        //     this.car.push(new Car(this.canvas, randomX, 5));
        // }

        // 2. Check if biker had hit any enemy (check all enemies)
        this.checkCollisions();

        // 3. Check if biker is going off the screen
        this.biker.handleScreenCollision();

        // 4. Move existing enemies
        // 5. Check if any enemy is going of the screen
        // this.enemies = this.enemies.filter(function(enemy) {
        //     enemy.updatePosition();
        //     return enemy.isInsideScreen();
        // });

        // 2. CLEAR THE CANVAS
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 3. UPDATE THE CANVAS
        // Draw the biker
        this.biker.draw();

        // Draw the enemies
        this.enemies.forEach(function(item) {
            item.draw();
        });

        // 4. TERMINATE LOOP IF GAME IS OVER
        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }

        //  5. Update Game data/stats
        this.updateGameStats();
    }.bind(this);

    // As loop function will be continuously invoked by
    // the `window` object- `window.requestAnimationFrame(loop)`
    // we have to bind the function so that value of `this` is
    // pointing to the `game` object, like this:
    // var loop = (function(){}).bind(this);

    window.requestAnimationFrame(loop);
};

Game.prototype.checkCollisions = function() {
    this.enemies.forEach(function(enemy) {
        if (this.biker.didCollide(enemy)) {
            this.biker.removeLife();
            // Move the enemy off screen to the left
            enemy.x = 0 - enemy.size;

            if (this.biker.lives === 0) {
                this.gameOver();
            }
        }
    }, this);
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

// Game.prototype.updateGameStats = function() {
//     this.score += 1;
//     this.livesElement.innerHTML = this.biker.lives;
//     this.scoreElement.innerHTML = this.score;
// };