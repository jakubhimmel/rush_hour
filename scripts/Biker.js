'use strict';

function Biker(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.height = 100;
    this.width = 50;
    this.x = this.canvas.width / 2;
    this.y = (this.canvas.height - this.height) - 20;

}


Biker.prototype.moveLeft = function() {
    this.x -= 20;
}

Biker.prototype.moveRight = function() {
    this.x += 20;
}


// Biker.prototype.didCollide = function(enemy) {
//     var BikerLeft = this.x;
//     var BikerRight = this.x + this.size;
//     var BikerTop = this.y;
//     var BikerBottom = this.y + this.size;

//     var enemyLeft = enemy.x;
//     var enemyRight = enemy.x + enemy.size;
//     var enemyTop = enemy.y;
//     var enemyBottom = enemy.y + enemy.size;

//     var crossRight = enemyLeft <= playerRight && enemyLeft >= playerLeft;
//     var crossLeft = enemyRight >= playerLeft && enemyRight <= playerRight;
//     var crossTop = enemyBottom >= playerTop && enemyBottom <= playerBottom;
//     var crossBottom = enemyTop <= playerBottom && enemyTop >= playerTop;

//     if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
//         return true;
//     }
//     return false;
// };

Biker.prototype.handleScreenCollision = function() {
    var leftEdge = 0;



    // var screenTop = 0;
    // var screenBottom = this.canvas.height;

    if (this.x < leftEdge) { this.x = 0; }
    if (this.x >= 723) { this.x = 723; }
};


Biker.prototype.removeLife = function() {
    this.lives -= 1;
};

Biker.prototype.draw = function() {
    this.ctx.fillStyle = '#FF0000';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};