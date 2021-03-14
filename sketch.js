
var baloon
var database
var baloonimg
var backgroundimg,bg

function preload(){
  backroundimg=loadImage("Images/bg1.png")
  baloonimg=loadAnimation("Images/baloon2.png","Images/baloon3.png","Images/baloon4.png")


}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 50, 50);
 // bg.addImage(backgroundimg)
 baloon=createSprite(990,80)
 baloon.addAnimation("baloon",baloonimg)
}

function draw() {
  background(0); 
  if(keyDown(LEFT_ARROW)){
baloon.x=baloon.x-10

  } 
  if(keyDown(RIGHT_ARROW)){
    baloon.x=baloon.x+10
    
      } if(keyDown(UP_ARROW)){
        baloon.y=baloon.y-10
        
          } if(keyDown(DOWN_ARROW)){
            baloon.y=baloon.y+10
            
              } 
  drawSprites();
}