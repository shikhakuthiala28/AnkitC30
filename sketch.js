const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var world,engine;

function setup(){
    
    // creating the canvas
    createCanvas(800,600);

    // creating the engine and adding world to the engine
    engine=Engine.create();
    world=engine.world;
    ground1=new GROUND(600,400);
    // creating the top layer of the pyramid 
    box1=new BOX(500,360);
    box2=new BOX(550,360);
    box3=new BOX(600,360);
    box4=new BOX(650,360);
    box5=new BOX(700,360);

    // creating the 
    box6=new BOX(525,310);
    box7=new BOX(575,310);
    box8=new BOX(625,310);
    box9=new BOX(675,310);

    box10=new BOX(550,260);
    box11=new BOX(600,260);
    box12=new BOX(650,260);

    box13=new BOX(575,210);
    box14=new BOX(625,210);

    box15=new BOX(600,160);


    
    polygon=new POLYGON(400,800);
    
    slingshot = new ROPE(polygon.body,{x:200, y:200});

    Engine.run(engine);

}

function draw(){

    background("red");
    ground1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();


    polygon.display();

    slingshot.display();

    detectcollision(polygon,box1);
    detectcollision(polygon,box2);
    detectcollision(polygon,box3);
    detectcollision(polygon,box4);
    detectcollision(polygon,box5);
    detectcollision(polygon,box6);
    detectcollision(polygon,box7);
    detectcollision(polygon,box8);
    detectcollision(polygon,box9);
    detectcollision(polygon,box10);
    detectcollision(polygon,box11);
    detectcollision(polygon,box12);
    detectcollision(polygon,box13);
    detectcollision(polygon,box14);
    detectcollision(polygon,box15);   

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){

    slingshot.fly();

}

function detectcollision(polygons,boxes){
    polygona=polygons.body.position;
	boxa=boxes.body.position;

	var distance=dist(polygona.x,polygona.y,boxa.x,boxa.y);
	if(distance<=100){
        Matter.Body.setStatic(boxes.body,false);
        
	}
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}
