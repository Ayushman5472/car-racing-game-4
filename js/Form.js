class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
  this.greeting.hide()
  this.input.hide()
  this.button.hide()  
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-300, 0);   
    this.input.position(displayWidth/2-300, displayHeight-270);
    this.button.position(displayWidth/2-180, displayHeight-230);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount=playerCount + 1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-300, displayHeight-270)
      title.hide()
    });

  }
}
