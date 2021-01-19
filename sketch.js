const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;



function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

var ball_options={
  restitution:1.5
}
var ground_options={
isStatic:true

}
ball=Bodies.circle(40,200,10,ball_options);
World.add(world,ball);
ground=Bodies.rectangle(30,290,200,10,ground_options);
World.add(world,ground);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
}