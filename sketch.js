const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var plane,planeimg,bgimg;
var obstacleGrp,obstacle1,obstacle2,obstacle3;

var gameState = "serve";
var bullet;
var engine,world;



function preload(){

  
  obstacle1 = loadImage("meteor-26460.png");
  obstacle2 = loadImage("meteor-26464.png");
  obstacle3 = loadImage("meteor-26481.png");
  bgimg = loadImage("724743.jpg");
  planeimg = loadImage("plane.png");
  


}

function setup() {
  createCanvas(displayWidth,displayHeight);
 plane =  createSprite(displayWidth/2, 500, 50, 50);
 plane.addImage(planeimg);
 score = 0;
 engine = Engine.create();
 world = engine.world;
 obstacleGrp = new Group ();
 
}

function draw() {
  background(bgimg);  

  Engine.update(engine);

  button = createButton("Fire");
 button.position(displayWidth/2,displayHeight/2+250);
 
 button.mousePressed(()=>{

  bullet = new Bullet();

 })

 if(keyWentDown(RIGHT_ARROW)){
   plane.velocityX = 3;
 }
 if(keyWentUp(RIGHT_ARROW)){
  plane.velocityX = 0;
}
if(keyWentDown(LEFT_ARROW)){
  plane.velocityX = -3;
}
  if(keyWentUp(LEFT_ARROW)){
    plane.velocityX = 0;
  }

  
  
   spawnAsteroids();
   gameState = "serve";
  drawSprites();
}
function spawnAsteroids(){

  if(frameCount%60===0){
    var obstacle = createSprite(width/2,height,50,50);
    obstacle.velocityY = 5;
    var rand = Math.round(random(1,3));
    switch(rand){

      case 1:obstacle.addImage(obstacle1);
             break;
      
      case 2:obstacle.addImage(obstacle2);
             break;
      
      case 3:obstacle.addImage(obstacle3);
             break;
             default : break;
    }
    obstacleGrp.add(obstacle);


  }

}

