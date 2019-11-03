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

// Append canvas to the DOM, create a biker and start the Canvas loop
Game.prototype.start = function() {
    // Save reference to canvas and its container. Create ctx
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = this.gameScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Save reference to the score and lives elements
    this.livesElement = this.gameScreen.querySelector('.lives .value');
    this.scoreElement = this.gameScreen.querySelector('.score .value');

    // Set the canvas dimensions to match the parent `.canvas-container`
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    // Create a new biker for the current game
    this.biker = new Biker(this.canvas, 3);

    // Add event listener for moving the biker
    this.handleKeyDown = function(event) {
        if (event.keyCode === 38) {
            this.biker.setDirection('up');
        } else if (event.keyCode === 40) {
            this.biker.setDirection('down');
        }
    };

    // Any function provided to eventListener
    // is always called by window (this === window)!
    // So, we have to bind `this` to the `game` object,
    // to prevent it from pointing to the `window` object
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));

    // Start the canvas requestAnimationFrame loop
    this.startLoop();
};

Game.prototype.startLoop = function() {
    var loop = function() {
        // 1. UPDATE THE STATE OF biker AND ENEMIES

        // 0. Our biker was already created - via `game.start()`

        // 1. Create new enemies randomly
        // if (Math.random() > 0.98) {
        //     var randomY = this.canvas.height * Math.random();
        //     this.enemies.push(new Enemy(this.canvas, randomY, 5));
        // }

        // 2. Check if biker had hit any enemy (check all enemies)
        this.checkCollisions();

        // 3. Check if biker is going off the screen
        this.biker.handleScreenCollision();

        // 4. Move existing enemies
        // 5. Check if any enemy is going of the screen
        this.enemies = this.enemies.filter(function(enemy) {
            enemy.updatePosition();
            return enemy.isInsideScreen();
        });

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

Game.prototype.updateGameStats = function() {
    this.score += 1;
    this.livesElement.innerHTML = this.biker.lives;
    this.scoreElement.innerHTML = this.score;
};