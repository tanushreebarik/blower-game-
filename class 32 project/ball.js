class Ball {
        constructor(x, y, w, h){
            var ballOptions = {
                restitution : 0.8


            }
            this.body = Bodies.rectangle(x, y, w,h ,ballOptions);
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
            ellipseMode(CENTER);
            fill("grey");
            ellipse (0,0,this.w,this.h);
            pop()

        }


}