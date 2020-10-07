class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = 0;
        this.rank = 0;
    }

    getPlayerCount(){
        database.ref('playerCount').on('value', function(data){
            playerCount = data.val();
            console.log(playerCount);
        })
    }

    updatePlayerCount(count){
        database.ref('/').update({playerCount: count})
    }

    updatePlayerInfo(){
        database.ref('players/player' + this.index).update({
            Name: this.name, 
            Distance: this.distance,
            Index: this.index,
            Rank: this.rank
        })
    }

    static getPlayerInfo(){
        database.ref('players').on('value', function(data){
            allPlayers = data.val();
            console.log(allPlayers);
        })
    }
}