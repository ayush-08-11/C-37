class Game{
  constructor(){

  }
  getState(){
     var gameStateRef =  database.ref('gameState');
     gameStateRef.on("value", (data)=>{
       gameState = data.val();
     }); 
  }
  
  update(state){
    //we are writing '/' because it is root node
    database.ref('/').update({
        gameState : state 
    });
  }

  async start(){
      if(gameState === 0){
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
         }
         form = new Form(); 
         form.display();
      }
  }

  play(){
    form.hide();
    console.log("gameStart")
    textSize(30);
    text("Game start",150,170);
  }

}
