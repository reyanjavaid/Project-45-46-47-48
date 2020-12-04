var gameState = "serve";
var backgroundImage;
var bg2, bg;
var boy,boyimg;
var trackimg;

function preload(){
  backgroundImage1 = loadImage("loadingimage.png");
  backgroundImage2 = loadImage("backgroungimage.png");

  boyimg = loadImage(/*"boy1.png","boy2.png""b1.png"*/"b2.png");
  trackimg = loadImage("track.png");
}


function setup() {
  createCanvas(600,750);
 

  background = createSprite(300, 375, 600, 750);
  
  
  
}

function draw() {
  if(gameState === "serve"){
    background.addImage(backgroundImage1);
    gameState = "play";
  }
  if(gameState ==="play"){
    background.addImage("bg2",backgroundImage2);
    background.changeImage("bg2",backgroundImage2);
    
    textSize(30);
    fill("black");
    text("Press Space To Start",100,50);
    
    if(keyCode === 32){
      gameState ="start";
      background.addImage("bg2",trackimg);
      background.changeImage("bg2",trackimg);

      boy = createSprite(300,400);
      boy.shapeColor = "black";
      //boy.addImage("Boy Running",boyimg);
      if(keyCode === 8){
        console.log("right");
        boy.x = boy.x + 3; 
      }

      if(keyCode === LEFT_ARROW){
        console.log("left");
        boy.x = boy.x - 3; 
      }
      
      background.velocityX = 4;
      //boy.visible=false;
    }
  }
     
     
  drawSprites()
}














