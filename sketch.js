var snow, snowImg,bg;

function preload(){
  snowImg = loadImage("snow4.webp");
  bg = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  if(frameCount%70==0){
    spawnSnow();
  } 
  drawSprites();
}

function spawnSnow(){
  snow = createSprite(Math.round(random(50,750)),-10,50,50);
  snow.addImage(snowImg);
  snow.scale = 0.05;
  snow.velocityY = 2;
  snow.lifetime = 200;
}