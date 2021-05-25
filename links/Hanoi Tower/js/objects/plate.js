
class Plate{
    
    constructor(w,r,g,b){
        this.w = w;
        this.h = 20;
        this.x ;
        this.y ;
        this.r = r;
        this.g = g;
        this.b = b;
        this.motion = 0
    }

    drawPlate(){
        if( this.motion === 0 )
        {   
            fill(this.r,this.g,this.b);
            noStroke();
            rect (this.x,this.y,this.w,this.h);
        }else{
            fill(this.r,this.g,this.b);
            noStroke();
            var x = constrain(mouseX,this.w/2,width-this.w/2);
            var y = constrain(mouseY,this.h/2,height-this.h/2);
            rect (x,y,this.w,this.h);
        }
    }

    move(){
        this.motion = 1;
    }

    still(){
        this.motion = 0;
    }
}