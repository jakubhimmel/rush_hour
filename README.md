<h1>Rush Hour: Pallea time</h1>

<h3>Description</h3>
A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way. 

Your a UBER eats rider and you need to delivery the seafood pallea to IRONHACK on time. Avoid cars and pick up some extra points. 

<h3>MVP (DOM - CANVAS)</h3>
CANVAS, Manage to avoid the obstacles. 

<h3>Backlog</h3>
  <ul> 
      <li>Bonus objects (lives, points, ...)</li>
      <li>Score</li>
      <li>Highscore table</li>
</ul>



<h3>Data structure</h3>

<h4>main.js</h4>
<pre>
createSplashScreen(){
}

removeSplashScreen() {
}


createGameScreen(){
}

removeGameScreen() {
}

createGameOverScreen(){
}

removeGameOverScreen() {
}

startGame() {
}

gameOver() {
}

bildDome(){}

</pre>

<h4>game.js</h4>
<pre>
Game(){
  this.canvas;
}

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions{
}

Game.prototype.CheckIfFullLine{
}



Game.prototype.checkOverFlow = function(){
}



Game.prototype.clearCanvas = function(){
}

Game.prototype.passGameOverCallback = function() {
}

Game.prototype.gameOver = function() {
}

Player.prototype.didCollide = function(enemy) {
}

Player.prototype.handleScreenCollision = function() {
}

Player.prototype.removeLife = function() {
}

Game.prototype.removeGameScreen = function() {
}

Game.prototype.updateGameStats = function() {
}
</pre>

<h4>bicycle.js</h4>
<pre>

function Player(canvas, lives) {
}

Player.prototype.setDirection = function(direction) {
}



Player.prototype.draw = function() {
}
</pre>

<h4>car.js</h4>
<pre>

function Car(canvas, y, speed) {
}

Enemy.prototype.draw = function() {
}

Enemy.prototype.updatePosition = function() {
}

Enemy.prototype.isInsideScreen = function() {
}
</pre>


<h3>Task</h3>
<ul>
   <li>Main - constructer</li>
  <li>Main - createSplashScreen</li>
    <li>Main - removeSplashScreen</li>
  <li>Main - createGameScreen</li>
    <li>Main - removeGameScreen</li>
  <li>Main - createGameOverScreen</li>
    <li>Main - removeGameOverScreen</li>
    <li>Main - startGame</li>
    <li>Main - gameOver</li>
  <li>Main - buildDome</li>
  <li>Game - constructer</li>
  <li>Game - startLoop</li>
  <li>Game - checkCollisions</li>
  <li>Game - CheckIfFullLine</li>
  <li>Game - checkOverFlow</li>
  <li>Game - clearCanvas</li>
  <li>Game - passGameOverCallback</li>
    <li>Game - didCollide</li>
   <li>Game - handleScreenCollision</li>
   <li>Game - removeLife</li>
  <li>Game - gameOver</li>
  <li>Game - removeGameScreen</li>
  <li>Game - updateGameStats</li>
  <li>Bicycle - Player</li>
  <li>Bicycle - setDirection</li>
  <li>Bicycle - didCollide</li>
  <li>Bicycle - handleScreenCollision</li>
   <li>Bicycle - draw</li>
   <li>Bicycle - updatePosition</li>
   <li>Bicycle - isInsideScreen</li>
    <li>Car - draw</li>
    <li>Car - updatePosition</li>
    <li>Car - updatePosition</li>
    <li>Car - isInsideScreen</li>
  
</ul>


<h3>Links</h3>

<h4>Trello</h4>
<a href="https://trello.com/invite/b/vYWWWWTs/8fce0be896e4fc4c4af9a8222242bb9a/game-project">Trello</a>
<h4>Git</h4>
<a href="https://github.com/jakubhimmel/game_project">Git</a>
<h4>Slides</h4>
<a href="https://www.w3schools.com">Slides</a>

