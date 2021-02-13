class Comet {
    constructor(x, y, r) {
      var options = {
        restitution :0,
        friction :1,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: this.image=loadImage("sprites/c1.png");
        break;
        case 2: this.image=loadImage("sprites/c2.png");
        break; 
        case 3: this.image=loadImage("sprites/c3.png");
        break;
        case 4: this.image=loadImage("sprites/c4.png");
        break;
        default: break;
      }
      this.Visibility= 255;  
      this.exp=loadImage('sprites/exp.png')
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);  
      strokeWeight(4);
      stroke("green");
      fill("pink");
      //ellipseMode(RADIUS)
      //ellipse(0, 0, this.r, this.r);
      imageMode(RADIUS);
      // image(this.image, random(10,900),random(10,50),this.r,this.r)
      image(this.image, 0,0,this.r*5,this.r*5)
      pop();
      
    }
    kaboom(){
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-1;
      //tint(255,255);
      //image(this.exp,400, 400, 300, 200);
      pop();
    }
    myscore(){
      score= score+1;
     
    }
  }