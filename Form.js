class Form{
  constructor(){
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h3");
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
   var title = createElement("h2");
   title.html("car racing game");
   title.position(460,90);

   this.input.position(450,170);
   this.button.position(450,200);

   this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount = playerCount + 1;
       player.updateCount(playerCount);
    //   player.updateName(player.name);
       this.greeting.html("hello " + player.name);
       this.greeting.position(450,170);
   })

  }
}