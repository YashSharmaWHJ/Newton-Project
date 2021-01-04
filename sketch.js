
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;
var roof,roofsprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	roofsprite = createSprite(400,300,240,40)
	var options = 
	{
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}
	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.

	bob1 = Bodies.rectangle(270,height-200,15,options);
	World.add(world,bob1);	
	roof = Bodies.rectangle(400,300,240,40);
	World.add(world,roof);	
	
	rope1=new rope(bob1.body,roof.body,60,0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bob1.position.x,bob1.position.y,30);

  drawSprites();
 
}



