var movingrect , fixedrect , distance ,gameObject1 ,gameObject2  ;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200,200,50,50);
  movingrect.shapeColor="green";
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green"; 
 
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  distance=fixedrect.x-movingrect.x;
  if (isTouching(movingrect,gameObject1)){
    movingrect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else {
    movingrect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
 
 console.log(distance);
  drawSprites();
}
