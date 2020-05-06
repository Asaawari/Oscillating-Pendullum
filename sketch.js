const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var ball, slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(600, 30, 30, 17);

    ball = new Ball(100,100);

    chain = new Chain(ball.body,platform.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    ball.display();
    platform.display();
    chain.display();    
}

function keyPressed(){
    if(keyCode === 32){
      ball.body.position.x = mouseX;
      ball.body.position.y = mouseY;
    } else if(keyCode === 13){
        ball.body.position.x = 600;
        ball.body.position.y = 100;
  }    
  } 

