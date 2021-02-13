//NAMESPACING
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//VARIABLES
var engine, world;
var box1, pig1;
var bg;
var log6;
var chain;
var tank;
var c1;
var cannon;
var comets= [];
var score= 0;
var gameState ="start";
var comet;
var count =0;
var exp;
var expSound;
function preload(){
  bg = loadImage("sprites/bg.png");
  exp=loadImage('sprites/exp.png')
  expSound = loadSound("sprites/expSound.mp3")
}
function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    //CREATING BODIES   
    ground = new Ground(500,height-10,1000,20)
    cannon = new Cannon(130,580,50);
    tank = new Tank(200,600,30,20);   
}

function draw(){
  background(bg);
  //background("lightblue")
  stroke("white");
  fill("black")
  strokeWeight(2);
  textSize(20)
  text("COMETS DESTROYED: "+score, 50,50)

  Engine.update(engine);
  if(gameState==="start"){
  stroke("white")
  strokeWeight(2);
  textSize(30)
  text(" KABOOM  ", 450,100)
  stroke("white")
  fill("white")
  strokeWeight(2);
  textSize(25)
  text(" NASA has discovered that a bunch of comets are heading towards Earth. \n And we have a mission to stop them. \n Blast the comets before they reach Earth  ", 50,200)
  stroke("red")
  strokeWeight(3);
  textSize(25)
  fill("white")
  text(" Follow the instructions to reach Kaboom!!\n SPACE BAR:RELOADING THE CANNON, \n UP ARROW: SHOOTS THE CANNON, \n MOUSE CLICK: SHOOTS THE COMET \n DOWN ARROW: TO SEE THE KEYS IN THE MIDDLE OF THE GAME",50,300)
  fill("red")
  stroke("black")
  text(" Press Down Arrow Key to begin",50,460)

  //gameState="play";
}
  //DISPLAYING
  ground.display();
  cannon.display();
  tank.display();
  if(comet!=null && gameState==="play"){
  { 
    if(detectCollision(cannon,comet)){
      comet.kaboom();
      comet=null;
      score=score+1;
      tint(255,255);
      image(exp,400, 400, 300, 200);
      expSound.play()
   
   }
    else{
      comet.display();
    }
  
  }
  }
  if ( gameState =="end") {
    textSize(100);
    text("GameOver", width/2-250, height/2);
  }
}  

function keyPressed(){
  if(keyCode === LEFT_ARROW && gameState==="play"){
    tank.body.position.x = tank.body.position.x-10;
    cannon.body.position.x = cannon.body.position.x-10;

  }
  if(keyCode === RIGHT_ARROW && gameState==="play"){
    tank.body.position.x = tank.body.position.x+10;
    cannon.body.position.x = cannon.body.position.x+10;
  }
  if(keyCode === UP_ARROW && gameState==="play"){
    Matter.Body.setStatic(cannon.body,false)
    //make the velocity value random
    Matter.Body.applyForce(cannon.body,cannon.body.position, {x:150,y:-250})
  }
  if(keyCode === 32 && gameState==="play"){
    count++;
    if(count>5){
      gameState="end"
    }
    else{
    Matter.Body.setStatic(cannon.body,true)
    Matter.Body.setPosition(tank.body, {x:200,y:600})
    Matter.Body.setPosition(cannon.body, {x:170,y:620})
    }
  }
  if(keyCode === DOWN_ARROW){
    alert("SPACE BAR:RELOADING THE CANNON, \n UP ARROW: SHOOTS THE CANNON, \n MOUSE CLICK: SHOOTS THE COMET ")
    gameState="play";
  } 
}

function detectCollision(lcannon,lcomet){

  cometBodyPosition=lcomet.body.position
  cannonBodyPosition=lcannon.body.position
  
  var distance=dist(cannonBodyPosition.x, cannonBodyPosition.y, cometBodyPosition.x, cometBodyPosition.y)
 
  	if(distance<=lcomet.r+lcannon.r)
    {    
      return true;
    }
 }

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    if ( count> 5) {
      gameState ="end";}
    else{
      comet=new Comet(random(100,900),random(10,50),20); 
    }
  }   
}




/*
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY })
}
function mouseReleased(){
chain.fly();
}
*/


//c1.display();
   
   
        //  if(detectCollision(cannon,comets[j] )){
          //    World.remove(world,comets[j]);
          //}
          
         // comets[j].explosion();
         /*
          if(detectCollision(cannon,comets[j] )){
             World.remove(world, comets[j].body);
          }
             
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();}
           else{
           
           }
           */



             /*
  if(detectCollision(cannon,c1 )){
    c1.kaboom();
  }
  else{
    c1.display();
  }
  */
  //COMETS CREATION AND FUNCTIONING
  /*
  if(frameCount%80===0){
    comets.push(new Comet(random(100,900),random(10,50), 10) )
 }
 
 for (var j = 0; j < comets.length; j++) {
   if(detectCollision(cannon,comets[j] )){
      comets[j].kaboom();
      //score = score+1;
      comets[j].myscore();
    }
    else{
      comets[j].display();
    }
  } 
*/