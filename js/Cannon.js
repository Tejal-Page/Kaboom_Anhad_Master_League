class Cannon {
  constructor(x, y, r) {
    var options = {
      isStatic:true,
      restitution:0.8,
      friction:1,
      density:0.5
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.image=loadImage("sprites/cannon.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //strokeWeight(4);
    //stroke("green");
    //fill("red");
    //ellipseMode(RADIUS)
    //ellipse(0, 0, this.r, this.r);
    imageMode(RADIUS);
    image(this.image, 0,0,this.r,this.r)
    pop();
  }
}