class Blower {
    constructor(x, y, w, h){
        var blowerOptions = {
            isStatic : true 


        }
        this.body = Bodies.rectangle(x, y, w, h, blowerOptions);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push ()
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("gold");
        rect (0,0,this.w,this.h);
        pop()

    }


}