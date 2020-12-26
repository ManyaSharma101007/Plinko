const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = []
var pegs = []

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(200,790,400,10);

  for(var i = 0; i <= 400; i = i + 50) {
    divisions.push(new Division(i,height - 150,3,300))
  }

  for(var p = 0; p <= 400; p = p + 50) {
    pegs.push(new Peg(p,50,10))
  }
}

function draw() {
  background(0); 

  ground.display()
  
  for(var i = 0; i <= divisions.length; i++) {
    divisions[i].display();
  }
  
  for(var p = 0; p <= pegs.length; p++) {
    pegs[p].display();
  }

}