
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400, 550, 800, 10);
	paper = new Paper (200, 545, 20);
	dustbinl = new Dustbin(600, 500, 20, 60);
	dustbinm = new Dustbin(650, 545, 80, 20);
	dustbinr = new Dustbin(700, 500, 20, 60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbinl.display();
  dustbinm.display();
  dustbinr.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 53, y : -53})
	}
}

