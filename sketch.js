var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
 	World.add(world, ground);

	 boxleftSprite=createSprite(width/2-100,610,20,100)
	 boxleftSprite.shapeColor = "red"
	 boxleftBody = Bodies.rectangle(width/2-100,610,20,100, {isStatic:true})
	 World.add(world, boxleftBody)
	 	 
	 boxBase=createSprite(width/2,650,200,20)
	 boxBase.shapeColor = "red"
	 boxBottomBody = Bodies.rectangle(width/2,635,200,20, {isStatic:true})
	 World.add(world, boxBottomBody)
	 
	 boxrightSprite=createSprite(width/2+100,610,20,100)
	 boxrightSprite.shapeColor = "red"
	 boxRightBody = Bodies.rectangle(width+120,610,20,100, {isStatic:true})
	 World.add(world, boxRightBody)
}


function draw() {
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 1
		packageSprite.x = helicopterSprite.x
	}
	else{
    packageSprite.x = helicopterSprite.x
	} 
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 1
		packageSprite.x = helicopterSprite.x
	}
	else{
    packageSprite.x = helicopterSprite.x
	} 
	
	

	if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
	packageBody.restitution = 0.5

  }
}