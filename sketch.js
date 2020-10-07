var database;
var gameState, playerCount;
var game, player, form;
var allPlayers;
var runner1, runner2, runners;

function setup(){
  createCanvas(displayWidth - 30, displayHeight - 100);

  database = firebase.database();
  console.log(database);

  game = new Game();
  game.getGameState();

  resetButton = createButton('reset');
}

function draw(){
  background('lightblue');

  if(playerCount == 2){
    gameState = 1;
    game.updateGameState(1);
  }

  if(gameState==1){
    game.play();
  }

  resetButton.mousePressed(function(){
    game.updateGameState(0);
    player.updatePlayerCount(0);

    database.ref('players').remove();
  })

  drawSprites();
}