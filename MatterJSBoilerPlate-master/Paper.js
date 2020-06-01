class Paper{
    constructor(x,y){
    
    
    this.body = Bodies.rectangle(x, y, 50, 50);
    this.radius = 40
    
    
    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue"); 
ellipse(0,0,this.radius);
   // rect(0, 0, this.width, this.height);
    pop();
  
  
    }
    }