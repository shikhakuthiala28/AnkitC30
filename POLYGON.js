class POLYGON{

    constructor(x,y){

        var options={
            isStatic:false,
            restituition:0.5,
            friction:0.5,
            density:0.7
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;	
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image, 0,0,50,50);
		pop();
    }
}