// position of my Obstacle
let obstacleX = 700;
let obstacleY = 500;

// position of my snake
let snakeX = 100;
let snakeY = 100;

//richtung 
let direction = 'right'

// geschwindigkeit entlang der x Achse +rechts -Links
let speed = 10;  





//preloading what ???
function preload(){
}



//setup a canvas
function setup() {
    // make it fullscreen (windowWidth, windowHeight)
    createCanvas(1000, 600);
    
}


// moves to the direction
function move (){
  if (direction === 'right'){
  snakeX = snakeX + speed
  } else if (direction === 'left'){
    snakeX = snakeX - speed
  } else if (direction === 'up'){
    snakeY = snakeY -speed
  } else if (direction === 'down'){
    snakeY = snakeY + speed
  }
}



// draw´s  
function draw() {
move()
//keyPressed()
//snakeY = snakeY + speed
  // cleared Background
  clear()
  // border color
  stroke('red')
  // creating your own color with a variabel
  // let rectColor = color(0,0,0) rgb
  fill('red')
  // moves on x achse to the right (+)
  //y+=speedY

  //draws a Obstacel
  rect(obstacleX,obstacleY,50,50)    

  //draws a snake
  rect(snakeX,snakeY,50,50)
   // Was passiert wenn ich den Bildschirmrand erreiche
   //wenn x das rechte Ende berührt ändert sich die Richtung 
   if (snakeX>950) {
   speed = -10
   } else if (snakeX<=0) {
   speed = 10
   }
   // wenn y untere Ende berührt ändert sich die Richtung 
  else if (snakeY<0){
  speed = 10 
  } else if (snakeY>550){
  speed = -10
  }
}  






function keyPressed() {
  // by pressing arrow-up key rect change direction to arrow up
  // need to change direction
  
  //up
  if (keyCode === 38){
    direction = 'up'
  //down
  } else if (keyCode === 40){
    direction = 'down'
  //left
  } else if (keyCode === 37){
    direction = 'left'
  right
  } else if (keyCode === 39){
    direction = 'right'
  }
} 