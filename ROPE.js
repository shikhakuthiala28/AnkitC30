class ROPE{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA=bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body1){
        this.sling.bodyA=body1;
     }

    display(){
        if(this.sling.bodyA){
            var posa=this.sling.bodyA.position;
            var posb=this.pointB;
    
            strokeWeight(2);
            line (posa.x,posa.y,posb.x,posb.y);
        }
    }
    
}