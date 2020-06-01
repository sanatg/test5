var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground;
var paper1;
var dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");
    // packageBody=createSprite(200,300)
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	paper1 = new Paper(300,200);
	dustbin1 = new Dustbin(900,600,20,120);
	dustbin2 = new Dustbin(1100,600,20,120);

	World.add(world,paper1);
	World.add(world,dustbin1);
	World.add(world,dustbin2);

	
	
//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);



	//Engine.run(engine);
  
}


function draw() {	
  Engine.run(engine);
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:85,y:-85})
	}
}



