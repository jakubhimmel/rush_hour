'use strict'



function buildDom(string) {
    var newDiv = document.createElement('div')
    newDiv.innerHTML = string;
    return newDiv.children[0];
}

function main() {
    var splashScreen;

    function createSplashScreen() {
        splashScreen = buildDom(`
    <section>
    <h1>Rush Hour:</h1>
    <h2>Pallea time</h2>
    <button>Start the Game !</button>
</section>
`)
        document.body.appendChild(splashScreen)

        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function() {
            startGame();

        })
    }

    function removeSplashScreen() {
        splashScreen.remove();
    };

    function createGameScreen() {
        var gameScreen = buildDom(`
        <section>
        <span>Lives:</span>
        <span class="lives">0</span>
        <span>Score:</span>
        <span class="score">0</span>
    </section>
        `)

        document.body.appendChild(gameScreen);
        return gameScreen;
    }

    function startGame() {
        removeSplashScreen();

        var game = new Game();
        game.gameScreen = createGameScreen();

        game.start;
    }

    createSplashScreen();
}

window.onload = main();