var zombie, zombieImage;
var zombieGroup;
var dragon, dragonImage;
var fireball, fireballImage, fireball_shooting, fireballGroup;
var obstaclesGroup;
var background;
var leaderboard;
var ground, invisibleGround, groundImage;
var star, starImage;
var score;

function setup() {
   createCanvas(800, 400);

   ground = createSprite(200,1050,400,20);
   ground.addImage("ground",groundImage);
   ground.x = ground.width /2;

   zombieGroup = createGroup();
   fireballGroup = createGroup();
    
}

function preload() {
   dragonImage = loadImage("dragon2.png");
   groundImage = loadImage("ground2.png");
   fireballImage = loadImage("fireball.png");
   zombieImage = loadImage("zombie.png");
}

function draw() {
   background(180);
   score = 0;
   score = score + Math.round(frameCount/30);
   text("Score: "+ score, 700,50);

   dragon = createSprite(200, 100);
   dragon.addImage("dragon", dragonImage);
   dragon.scale = 0.6;
   
   for(var i=0;i<fireballGroup.length;i++)
   if(keyWentDown("space")){
      fireball = createSprite(250, 100);
      fireball.addImage("fireball", fireballImage);
      fireball.scale = 0.25;
      fireball.velocityX = 7;
      fireball.velocityY = 7;
    }

    for(var i=0;i<zombieGroup.length;i++){     
      
      if(zombieGroup[i].isTouching(fireballGroup[i])){
           zombieGroup[i].destroy()
           } 
     }


   ground.velocityX = -5;
   if (ground.x < 0){
      ground.x = ground.width/2;
    }

   enemy();

   drawSprites();
   
}

function enemy(){
   if(frameCount%50===0){
 
     //giving random x and y positions for zombie to appear
     zombie = createSprite(random(500,100),random(400,200),40,40);
     zombie.addImage("zombie", zombieImage);
     zombie.scale = 0.15;
     zombie.velocityX = -3;
     zombie.debug = true;
     zombie.setCollider("rectangle",0,0,400,400);
    
     zombie.lifetime = 400;
    zombieGroup.add(zombie);

   }

}