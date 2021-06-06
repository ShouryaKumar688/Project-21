var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 100, 20);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  console.log(1470-25);
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = "#505050"
  bullet.velocityX=speed;
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    bullet.x=1445;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10)
    {
      wall.shapeColor="#FF0000";
      bullet.x=1470;
  
    }
    if(deformation<=10)
    {
      wall.shapeColor="rgb(0,255,0)";
    }
  }
  drawSprites();
}