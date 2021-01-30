class GROUND{

    constructor(x,y){

        var options={
            isStatic:true,
            restituition:0.5,
            friction:0.5,
            density:0.7
        }
        this.body=Bodies.rectangle(x,y,300,20,options);
        //this.image=loadImage("wood1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;	
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		rect(0,0,300,20);
		pop();
    }
}