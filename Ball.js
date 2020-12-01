class Ball{
    constructor(x,y,r){
        var ops={
            frictionAir:0.0005,
            density:1
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,ops);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
         translate(pos.x,pos.y);
         ellipseMode(RADIUS);
         fill("yellow");
         stroke("white");
         strokeWeight(2);
         ellipse(0,0,this.r,this.r);
        pop();
    }
}