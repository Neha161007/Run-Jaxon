var path,pathImg;
var boy;

function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boy_running=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  boy=creatSprite(200,350);
  boy.addAnimation(boy_running)


  path=creatSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  if(path.y>400){
    path.y=height/2;
  }

}

function draw() {
  background(0);

  drawSprites();


}
