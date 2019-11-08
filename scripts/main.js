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
        removeGameOverScreen();
        splashScreen = buildDom(`
    <main class = splash-screen>
      <h1>Rush Hour:</h1>
      <h2>Taco time</h2>
      <img class="arrows" src="../images/arrowKeys.png" alt="arrow keys"> <br>
      <section class ='icons'>
      <div>
      <img src="../images/car/car2.png" alt="arrow keys">
      <p>dodge</p>
      </div>
      <div>
      <img src="../images/taco.png" alt="arrow keys">
      <p>collect</p>
      </div>
      <div>
      <img src="../images/bomb.png" alt="arrow keys">
      <p>removes all cars</p>
      </div>
      <div>
      <img src="../images/pepper.png" alt="arrow keys">
      <p>adds life</p>
      </div>
      </section>
      <nav>
      <button>Start the Game</button>
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
          <span class="label">Taco Counter:</span>
          <span class="value display">0</span>
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
      <main class="gameover-screen">
        <h1>Game Over</h1>
        <p>Your score: <span class="display">0</span></p>
        <button class="restart">Restart</button>
        <button class="back-to-main">Back to main menu</button>
    </main>
    `);
        var scoreElement = gameOverScreen.querySelector('.display');
        scoreElement.innerHTML = game.pointArray;


        console.log(game.pointArray);
        var button = gameOverScreen.querySelector('.restart');
        button.addEventListener('click', startGame);

        var button = gameOverScreen.querySelector('.back-to-main');
        button.addEventListener('click', createSplashScreen);

        // var span = gameOverScreen.querySelector('span');
        // span.innerText = score.toFixed(0);

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