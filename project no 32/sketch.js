const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  recty1 = new recty(500,600,20,150)
  recty2 = new recty(590,670,200,20)   
  recty3 = new recty(680,600,20,150)
  ball1= new Ball(500,400,10,10,)
  rope1 = new Rope(ball1.body,{x:230,y:130})




}

function draw() {
  background(80,100,50); 
  text(mouseX+","+mouseY,200,50)
  drawSprites();
  recty1.display();
  recty2.display();
  recty3.display();
   ball1.display();
  rope1.display();


}
function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}

function mouseRealsed(){
rope.fly();




}
function mousePressed(){
if(keyCode===32){
  Matter.Body.setPosition(ball1.body,{x:230,Y:130})
  rope.attach(ball1.body)



}



}


