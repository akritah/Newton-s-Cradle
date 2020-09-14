
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,600,20);
bob1=new Bob(400,300,40);
bob2=new Bob(320,300,40);
bob3=new Bob(480,300,40);
bob4=new Bob(560,300,40);
bob5=new Bob(240,300,40);
rope=new Rope(bob1.body,roof.body,2,0);
rope2=new Rope(bob2.body,roof.body,4,2);
rope3=new Rope(bob3.body,roof.body,2,0);
rope4=new Rope(bob4.body,roof.body,2,0);
rope5=new Rope(bob5.body,roof.body,2,0);


var options={
	stiffness:0.04,
	lenght: 10
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position, {x:10,y:-80} );
	}
	}


