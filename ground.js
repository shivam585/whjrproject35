class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
     // Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push()
      //rotate(50)
      rectMode(CENTER);
// rotate(angle)
      fill("brown");
  

    rect(pos.x, pos.y, this.w,this.h);
    
    pop()
    }
  };