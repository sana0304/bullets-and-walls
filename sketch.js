var bullet,wall;
var speed ,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed =random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

bullet=createSprite(50,200,60,20)
bullet.shapeColor=color(255)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)

bullet.velocityX=speed;

}

function draw() {
  background(0);  

  

  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage<10 ){
    wall.shapeColor="green";
    }
    else{
      wall.shapeColor="red";
    }
   
    
  }



  drawSprites();
}