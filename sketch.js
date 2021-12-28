//Escaping Gravities Grasp
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var btn1
var btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options={restitution: 0.05}
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  

  btn1 = createImg("leftArrow.png")
  btn1.position(220,77)
  btn1.size(100,100)
  btn1.mouseClicked(hForce)

  btn2 = createImg("rightArrow.png")
  btn2.position(120,77)
  btn2.size(100,100)
  btn2.mouseClicked(hForce2)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y,20)
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
function hForce2(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0})
}

function vForce(){
  Matter.Body.applForce(ball,{x:0,y:0},{x:0,y:-0.02})
}



