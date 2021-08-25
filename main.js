
//richtung 
let direction = 'right';

// geschwindigkeit entlang der x Achse +rechts -Links
let speed = 5;  





//preloading before setup 
function preload() {
}



//setup a canvas
function setup() {
    // make it fullscreen (windowWidth, windowHeight)
    createCanvas(1000, 600);
    // position of my Snake randomly
    snakeX = random(50,950);
    snakeY = random(50,550);
    // position of my Obstacle randomly
    obstacleX = random(0,950);
    obstacleY = random(0,550);
}



// check if snake have the same position as obstacle
 function colision() {
  if (snakeX === obstacleX && snakeY === obstacleY) {
    console.log('hello')
     obstacleX = random(0,950);
     obstacleY = random(0,550);
  } else { 
    console.log('no')
  }
}



// moves to the direction
function move () {
  if (direction === 'right'){
  snakeX = snakeX + speed;
  } else if (direction === 'left'){
    snakeX = snakeX - speed;
  } else if (direction === 'up'){
    snakeY = snakeY - speed;
  } else if (direction === 'down'){
    snakeY = snakeY + speed;
  }
}


// draw´s  
function draw() {
  move();
  colision();

//keyPressed()
//snakeY = snakeY + speed
// cleared Background
  clear();
  stroke('green');
  fill('green');
  //draws a Obstacle
  rect(obstacleX, obstacleY,50,50)  
  stroke('red');
  fill('red');
  //draws a snake
  rect(snakeX,snakeY,50,50)
   // Was passiert wenn ich den Bildschirmrand erreiche
   //wenn x das rechte Ende berührt snakeX erscheint am linken Rand 
   if (snakeX>1000) {
   snakeX = -50;
   } else if (snakeX<=-50) {
   snakeX = 1000;
   }
   // wenn y untere Ende berührt snakeY erscheint am oberen Rand 
  else if (snakeY<-50){
  snakeY = 600;
  } else if (snakeY>600){
  snakeY = -50;
  }
}  





function keyPressed() {
  // by pressing arrow-up key rect change direction to arrow up
  // need to change direction
  
  //up
  if (keyCode === 38){
    direction = 'up';
  //down
  } else if (keyCode === 40){
    direction = 'down';
  //left
  } else if (keyCode === 37){
    direction = 'left';
  //right
  } else if (keyCode === 39){
    direction = 'right';

    // space for stoping 
  } else if (keyCode === 32){
    speed = 0;
    // enter for starting 
  } else if (keyCode === 13){
    speed = 5;
  }
} 
hadgiagidgabgdi