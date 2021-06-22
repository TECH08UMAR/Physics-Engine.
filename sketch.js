const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var ball2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = world.create();

  var  ball_option = {
   restitution = 0.95,
   frictionAir = 0.1
  }

  var ball2_option = {
    restitution = 0.90,
    frictionAir = 0.2
  }
 var ground_option = {
  isStatic:true
 };


 var ops = {
   isStatic: true
 };

 ground = Bodies.rectangle(200,390,400,20,ground_option)
  World.add(world,ground);

 ball = Bodies.circle(100,200,100,20,ball_option)
  World.add(world,ball);

  ball2 = Bodies.circle(200,450,300,20,ball2_option)
   World.add(world,ball2);

  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ball.position.y,20);
 ellipse(ball2.position.x,ball2.position.y,30);

drawSprites()

}

