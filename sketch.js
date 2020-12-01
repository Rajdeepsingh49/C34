const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var ground,box1,box2,box3,box4,box5;
var ball;
var rope;

function setup() {
  createCanvas(1500,800);

  Eng = Engine.create();
  world = Eng.world;
  
  ground = new Ground(750,780,1500,20);
  box1 = new Box(850,700,100,100);
  box2 = new Box(850,600,100,100);
  box3 = new Box(850,500,100,100);
  box4 = new Box(850,400,100,100);
  box5 = new Box(850,300,100,100);
  ball = new Ball(450,500,50);
  rope = new Rope(ball.body,{x:450,y:100});

 
 
}

function draw() {
  
  Engine.update(Eng);
  background("black");  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  rope.display();
  
 
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});



}