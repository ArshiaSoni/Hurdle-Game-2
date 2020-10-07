class Game{
  constructor(){

  }

  getGameState(){
    database.ref('gameState').on('value', function(data){
      gameState = data.val();
      console.log(gameState);
      if(gameState == 0){
        player = new Player();
        player.getPlayerCount();

        form = new Form();
        form.display();
      }
    })

    runner1 = createSprite(50, 100);
    runner2 = createSprite(50, 300);
    runners= [runner1, runner2];
  }

  updateGameState(state){
    database.ref('/').update({gameState: state})
  }
  
  play(){
    form.hide();
    Player.getPlayerInfo();

    var index = 0;
    var x= 50;
    var y = 100;
    var ySpacing = 200; 
    for(var plr in allPlayers){
       runners[index].x = x
       runners[index].y = y
       if(index + 1 == player.index){
         runners[index].shapeColor = 'red';
       }
       index++
       y = y + 200
       text(allPlayers[plr].Name + " : " + allPlayers[plr].Distance, 200, ySpacing);
       ySpacing += 50 
    }

    if(keyWentDown(RIGHT_ARROW)){
      player.Distance += 10
      player.updatePlayerInfo();
    }
  }
}