const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var blowerObject, blowerMouthObject,ballObject;
var world, engine
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ballObject = new Ball(width/2 + 60,height/2 - 60, 80, 80);
  blowerObject = new Blower(width/2 + 60, height/2, 100,100);
  blowerMouthObject = new BlowerMouth(width/2 - 60, height/2 + 45, 150, 10);


  button = createButton("click to blow");
  button.position(width/2, height - 100);
  button.mousePressed(blow);

}
function blow(){
  Matter.Body.applyForce(ballObject.body, {x: 0, y: 0}, {x: 0, y: - 0.05} );

}

function draw() {

  background("black"); 
  Engine.update(engine); 
  ballObject.display();
  blowerObject.display();
  blowerMouthObject.display();
}