const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball
var ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();   


world = engine.world;
var options = {
  isStatic:true
}

ball = Bodies.circle (200,200,20,{restitution:1});
World.add(world,ball)

ground  = Bodies.rectangle(200,350,400,20,options);
World.add(world,ground)
//console.log(ground)

}

function draw() {
  background(0,0,0);  


Engine.update(engine);

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
}