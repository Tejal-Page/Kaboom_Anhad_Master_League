class Tank{
  constructor(x, y, width, height) {
    var options = {
       isStatic: true,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
   this.height = height;
   this.image = loadImage("sprites/tanknew.png");
   World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width*10, this.height*10);
    //stroke("green");
    //fill("orange");
    //rectMode(CENTER);
    //rect( 0, 0, this.width, this.height);
    pop();
  }
}
//3 steps for image...load....rectMode---image Mode....rect===image