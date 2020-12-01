class Rope{
    constructor(BA,PB){
        var ops={
            bodyA:BA,
            pointB:PB,
            length:400,
            stiffness:0.03
        }
        this.body = Constraint.create(ops);
        World.add(world,this.body);
    }
    display(){
        var PA = this.body.bodyA.position;
        var PB = this.body.pointB;
        push();
        stroke("white");
        strokeWeight(4);
        line(PA.x,PA.y,PB.x,PB.y);
        pop();
    }
    
}

