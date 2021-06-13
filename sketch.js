const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var G;
var boy,boyimg;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var rope;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 550);

	engine = Engine.create();
	world = engine.world;

	G = new ground(600,520,1200,10);

	boy = createSprite(200,460,50,50);
	boy.addImage(boyimg);
	boy.scale = 0.1

	tree = new CLASStree(900,260);

	stone = new Stone(0,0,30);

	mango1=new mango(1100,100,30);
  mango2=new mango(770,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1120,200,40);
	mango9=new mango(875,75,40);
	mango10=new mango(775,250,40);

	rope = new launcher(stone.body,{x:150,y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  textSize(25);
  fill("yellow");
  text("PRESS THE 'SPACE' BUTTON TO PLAY AGAIN!!!",50 ,50);

  G.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

  rope.display();

  drawSprites();

  stone.display();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  rope.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }