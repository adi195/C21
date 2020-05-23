var fixedRect, movingRect;
var ball,ball1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
ball = createSprite(700,400,50,50);
ball.shapeColor = "purple";
ball1 = createSprite(1000,400,50,50);
ball1.shapeColor = "yellow";
ball.velocityX = 5;
ball1.velocityX = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounce(fixedRect,movingRect);
if(ball1.isTouching(ball)){
  ball.shapeColor = "blue";
  ball1.shapeColor = "green";
  bounce(ball,ball1);
}
else{
  ball.shapeColor = "purple";
  ball1.shapeColor = "yellow";
}
drawSprites();
}