var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
boy=loadImage("boywithopenmouth.png")


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(250,700,600,20);
ground2= new Ground(1350,700,600,20);
  //ground3 = new Ground(width/2-100,650,500,20);

  //create division objects
 // for (var k = 0; k <=1450; k = k + 80) {
  //  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 // }

 // create 1st row of plinko objects
//for (var j = 75; j <=width; j=j+50) { 
 // plinkos.push(new Plinko(j,75));
 // }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
  plinkos.push(new Plinko(j,175));
 }

  //create 3rd row of plinko objects
  
  for (var j = 25; j <=width-10; j=j+50) 
 {
  plinkos.push(new Plinko(j,275));
 }
  //create 4th row of plinko objects
  for (var j = 0; j <=width-10; j=j+50) 
  {
  plinkos.push(new Plinko(j,375));
 }

 for (var j = 25; j <=650; j=j+50) 
  {
  plinkos.push(new Plinko(j,475));
 }

 
 for (var j = 25; j <=600; j=j+50) 
  {
  plinkos.push(new Plinko(j,575));
 }

 
 for (var j = 25; j <=600; j=j+50) 
  {
  plinkos.push(new Plinko(j,675));
 }

 
 for (var j = 950; j <=1800; j=j+50) 
  {
  plinkos.push(new Plinko(j,475));
 }

 for (var j = 1050; j <=1800; j=j+50) 
 {
 plinkos.push(new Plinko(j,575));
}

for (var j = 1050; j <=1800; j=j+50) 
{
plinkos.push(new Plinko(j,675));
}
    
}
 


function draw() {
  background("black");
  textSize(90)



 
  image(boy,400,200,800,800)
ground.display();
  ground2.display();
 //ground3.display();

  Engine.update(engine);
 // ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();   
  }
   
  //display the divisions
  //for (var k = 0; k < divisions.length; k++) {
  //  divisions[k].display();
 // }

  //create the particles using frameCount

//if(keyDown("SPACE")){
 // spacepressed()
//}

if(frameCount%60===0){
  particles.push(new Particles(random(800,0),0))
}
  //display the particles 
for(var k=0;k<particles.length;k++){
  particles[k].display()
}

textSize(90)
fill("red")
textFont("Algerian")
stroke("blue")
text("give me laddoo",400,100)

}

function spacepressed(){








}