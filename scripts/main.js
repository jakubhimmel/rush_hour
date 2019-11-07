'use strict';

function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

function main() {
    var game;
    var splashScreen;
    var gameOverScreen;


    function createSplashScreen() {
        splashScreen = buildDom(`
    <main class = splash-screen>
      <h1>Rush Hour:</h1>
      <h2>____ time</h2>
      <nav>
      <button>Start the Game</button>
      <button>How to play</button>
      <button>Scoreboard</button>
     <nav>
    </main>
  `);

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function() {
            startGame();
        });
    }

    function removeSplashScreen() {
        splashScreen.remove();
    }


    function createGameScreen() {
        var gameScreen = buildDom(`
    <main class="game container">
      <header>
        <div class="lives">
        <img class="image" src="../styles/pixel-heart-2779422_1280.png" alt="heart-image">
          <span class="value"></span>
        </div>

        <div class="paella-counter">
          <span class="label">Paella Counter:</span>
          <span class="value">0</span>
        </div>
      </header>
      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </main>
  `);

        document.body.appendChild(gameScreen);
        return gameScreen;
    }

    function removeGameScreen() {
        game.removeGameScreen();
    }



    function createGameOverScreen(score) {
        gameOverScreen = buildDom(`
      <main class=gameover-screen>
        <h1>Game Over</h1>
        <p>Your score: <span>0</span></p>
        <button>Restart</button>
    </main>
    `);

        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);

        var span = gameOverScreen.querySelector('span');
        span.innerText = score.toFixed(0);

        document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen() {
        if (gameOverScreen) {
            gameOverScreen.remove();
        }
    }



    function startGame() {
        removeSplashScreen();

        removeGameOverScreen();

        game = new Game();
        game.gameScreen = createGameScreen();

        game.start();

        game.passGameOverCallback(function() {
            gameOver(game.score);
        });
    }

    function gameOver(score) {
        removeGameScreen();
        createGameOverScreen(score);
    }


    createSplashScreen();
}

window.addEventListener('load', main);