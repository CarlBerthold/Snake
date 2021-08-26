window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

//richtung 
let direction = 'right';

// geschwindigkeit entlang der x Achse +rechts -Links
let speed = 5;  

// counter 
document.querySelector('h2')
let counter = 0;


//preloading before setup 
function preload() {
}



//setup a canvas
function setup() { 
    // make it fullscreen (windowWidth, windowHeight)
    createCanvas(windowWidth, windowHeight);

    // position of my Snake randomly
   //snakeX = random(50,windowWidth-50);;
   //snakeY = random(50,windowHeight-50);
    snakeWidth = 50;
    snakeHeight = 50;
    snakeX = 500;
    snakeY = 450; 


    
    
    // position of my Obstacle randomly
   //obstacleX = random(50,windowWidth-50);
   //obstacleY = random(50,windowHeight-50);
    obstacleWidth = 50;
    obstacleHeight = 50;
    obstacleX = 500;
    obstacleY = 500;

    
    
       
}



// check if snake have the same position as obstacle
 function colision() {
   //if (snakeY + snakeHeight < obstacleHeight && snakeX+ snakeWidth < obstacleWidth){
  
if (snakeX <= obstacleX && snakeY <= obstacleY || snakeX >= obstacleX && snakeY >= obstacleY) {
  console.log('links')
obstacleX = random(0,950);
obstacleY = random(0,550);
snakeWidth
//snakeHeight
counter++
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

function drawGrid(){
  for (let i = 0; i <= windowWidth ; i += 50) {
    strokeWeight(1);
    line(0, i, windowWidth, i) // horizontal lines - y changes 
    line(i, 0, i, windowHeight) //vertical lines - x changes   
}

  //line(50,0,50,600)
  //line(0,50,1000 ,50)
  
  
  
 
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
  rect(snakeX,snakeY,snakeHeight,snakeWidth)
   // Was passiert wenn ich den Bildschirmrand erreiche
   //wenn x das rechte Ende berührt snakeX erscheint am linken Rand 
   if (snakeX>windowWidth) {
   snakeX = -50;
   } else if (snakeX<=-50) {
   snakeX = windowWidth;
   }
   // wenn y untere Ende berührt snakeY erscheint am oberen Rand 
  else if (snakeY<-50){
  snakeY = windowHeight;
  } else if (snakeY>windowHeight){
  snakeY = -50;
  }
  //drawGrid()
  
  
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
