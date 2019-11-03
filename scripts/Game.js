'use strict'

function Game() {
    this.gameScreen = null;

}

Game.prototype.startLoop = function() {
    var loop = function() {
        console.log('in loop');

        this.player.draw();

        window.requestAnimationFrame(loop);
    }.bind(this);

    window.requestAnimationFrame(loop);

    console.log('The Loooooooooop');
};