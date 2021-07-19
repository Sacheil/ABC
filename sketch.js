function preload(){
  //pre-load images
  pathImg=loadimage("path.png")
  pathImg.loadAnimation("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.VelocityY=4;
  path.scale=1.2;
}

function draw() {
  background(black);
if(path.y>400){
  path.y=height/2;
}
drawSprite();
}
