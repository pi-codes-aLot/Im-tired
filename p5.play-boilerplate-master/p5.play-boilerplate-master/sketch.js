var ball;
var pad;
var r;
var g;
var b;


function reroll(){
  r = Math.round(random(0,255));
  g = Math.round(random(0,255));
  b = Math.round(random(0,255));
}
function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  pad = createSprite(400, 400, 50, 50);
  ball.shapeColor = "white";
  pad.shapeColor = "cyan";
  ball.velocityY = 5;
  pad.velocityY = -5;
}

function draw() {
  background(0,0,0);
  if (ball.y - pad.y < ball.height/2 + pad.height/2
  && pad.y - ball.y < ball.height/2 + pad.height/2){
    ball.velocityY = ball.velocityY * (-1);
    ball.shapeColor = "red";
  }
  if (ball.x - pad.x < ball.width/2 + pad.width/2
    && pad.x - ball.x < ball.width/2 + pad.width/2){
      pad.velocityX = pad.velocityX * (-1);
      pad.shapeColor = "green";
    }
  drawSprites();
}
