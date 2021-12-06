var monster1, monster1img;
var background, backgroungimg;
var enemy1, enemy1img;
var enemy2, enemy2img;
var fruit1, fruit1img, fruit2, fruit2img;
var fruit3, fruit3img, monster2, monster2img;
var score=0;

function preload(){
  monster1img=loadImage("Assets/monster1.png");
backgroundimg=loadImage("Assets/background.png");
enemy1img=loadImage("Assets/enemy1.png");
enemy2img=loadImage("Assets/enemy2.png");
fruit1img=loadImage("Assets/fruit1.png");
fruit2img=loadImage("Assets/fruit2.png");
fruit3img=loadImage("Assets/fruit3.png");
monster2img=loadImage("Assets/monster2.png");


}

function setup(){
  createCanvas(windowWidth, windowHeight);

  monster1=createSprite(600, 600, 30, 30);
  monster1.addImage(monster1img);
  monster1.scale=0.4;
  fruitGroup=new Group();
  enemyGroup=new Group();
}

function draw(){
  background(backgroundimg);

if(keyDown(RIGHT_ARROW)){
  monster1.x=monster1.x+10;
}

if(keyDown(LEFT_ARROW)){
  monster1.x=monster1.x-10;
}



   spawnEnemy();
   spawnFruit();
   if(monster1.isTouching(fruitGroup)){
    score=score+10;
    fruitGroup.destroyEach();
  }
  if(monster1.isTouching(enemyGroup)){
    score=score-20;
    enemyGroup.destroyEach();
  }
  
  drawSprites();
  if(score<0){
    monster1.destroy();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
  }
  textSize(20);
  text("Score: "+ score, 1100,50);

}

function spawnEnemy(){
  if(frameCount%70===0){
enemy=createSprite(200, 20, 20, 20);
enemy.velocityY=7;
enemy.x=Math.round(random(10, width-10));
enemy.scale=0.3;
var rand = Math.round(random(1,3));
switch(rand){
  case 1: enemy.addImage(enemy1img);
  break;
  case 2: enemy.addImage(enemy2img);
  break;
  case 3: enemy.addImage(monster2img);
  break;
}
enemyGroup.add(enemy);
  }
  }

function spawnFruit(){
  if(frameCount%70===0){
    fruit=createSprite(200, 20, 20, 20);
    fruit.velocityY=7;
    fruit.x=Math.round(random(10, width-10));
    fruit.scale=0.3;
    
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: fruit.addImage(fruit1img);
      break;
      case 2: fruit.addImage(fruit2img);
      break;
      case 3: fruit.addImage(fruit3img);
      break;
}
fruitGroup.add(fruit);
  }
}