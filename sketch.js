var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for (i=0;i<6;i++){
 var bottomGrass1  = createSprite(683,height-50-(i*400),width,grassHeight);
 if(i%2===0){
var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
 road.shapeColor="black";
 }
 bottomGrass1.shapeColor = "green"; 
}

for(var i = 0; i < 40; i++){
 cars = new Car(2);
 carGroup1.add(cars.spt);

}
for(var i = 0; i < 40; i++){
  logs = new Log(-2);
  logGroup1.add(logs.spt);
 
 }
 player = new player(width/2,height-25);
  }

function draw() {
  background("skyblue");
  translate(0,-player.spt.y+height-150);
  for(i=1;i<logGroup1.length;i++){
if(logGroup1[i].x<0){
  logGroup1[i].x=width;
}

}
for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x<0){
    carGroup1[i].x=width;
  }
  if(carGroup1[i].x>width){
    carGroup1[i].x=0;
  }
  
  }
 


  drawSprites();
 }
 function KeyPressed(){
  if(KeyCode == UP_ARROW){
  player.move(0,-2);
}else if(KeyCode == DOWN_ARROW){
player.move(0,-2);
}else if(KeyCode == LEFT_ARROW){
player.move(-2,0);
}else if(KeyCode == RIGHT_ARROW){
  player.move(2,0);
 }
 }
        