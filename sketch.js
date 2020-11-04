var PLAY = 0;
var END = 1;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("ground2.png")
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(30, 350, 50, 50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(200, 360, 400, 10);
  ground.addImage("ground", groundImage);
  ground.velocityX = -5
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("lightBlue");
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space")){
    
    monkey.velocityY = -18;
    monkey.velocityY = monkey.velocityY+2
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  

  
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}

function food() {
  if (frameCount%60 === 0){
    banana = createSprite(400, 150, 50, 50);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    var rand = Math.round(random(120, 200));
    
    banana.y = rand;
    foodGroup.add(banana);
  }
  
}

function obstacles(){
  if (frameCount%60 === 0){
    obstacle = createSprite(400, 340, 50, 50);
    obstacle.addImage("obstacles", obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -5;
  }
}






