var boy_running , boy ;


function preload(){
    boy_running=loadAnimation("boy1.jpg","boy2.jpg","boy3.jpg","boy4.jpg");

   

    fire1 = loadImage("fire1.png");
   fire2 = loadImage("fire2.png");
    fire3 = loadImage("fire3.png");
    fire4 = loadImage("fire4.png");
}

function setup(){
    createCanvas(400,400);

    boy= createSprite(250,180,50,50);
    boy.addAnimation("running",boy_running);

    ground = createSprite(200,350,400,20);

  ground.x = ground.width /2;

    fireGroup = new Group();

   
   
       

}

function draw(){
background("white");
   
if(keyDown("space")&& boy.y >= 100) {
        boy.velocityY = -13;
        
      }
      
      boy.velocityY = boy.velocityY + 0.8

      if (ground.x < 0){
        ground.x = ground.width/2;
      }

      boy.collide(ground);



spawnFire();
  
  drawSprites();
}

function spawnFire(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,300,10,40);
   obstacle.velocityX = -6;

   
    // //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(fire1);
              break;
      case 2: obstacle.addImage(fire2);
              break;
      case 3: obstacle.addImage(fire3);
              break;
      case 4: obstacle.addImage(fire4);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
 
   fireGroup.add(obstacle);
 
 }
  
}

