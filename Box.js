class Box{
    constructor(x,y,width,height){
        var ops={
            friction:0.5,
            restitution:0.01,
            density:1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,ops);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill("red");
         stroke("white");
         strokeWeight(2);
         rect(0,0,this.width,this.height);
        pop();
    }
}