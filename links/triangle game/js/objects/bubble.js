class Bubble{

    constructor(diameter,positionX,positionY,value)
    {
        this.d     = diameter;
        this.ox    = positionX;
        this.oy    = positionY;
        this.x     = positionX;
        this.y     = positionY;
        this.v     = value;
        this.move  = 0;
        this.pos;
    }

    draw()
    {   
        let x,y;
        if( this.move === 1 )
        {
            x = constrain(mouseX, this.d/2, width - this.d/2);
            y = constrain(mouseY, this.d/2, height - this.d/2);
        }
        else
        {
            x = this.x;
            y = this.y;
        }

        stroke(255);
        noFill();
        ellipse(this.ox, this.oy, this.d, this.d);

        noStroke();

        fill(255);
        textSize(25);
        textFont("'Lobster', cursive");
        text(this.v, this.ox - 7, this.oy + 7);

        fill (51, 204, 255);
        ellipse(x, y, this.d, this.d);

        fill(0);
        textSize(25);
        textFont("'Lobster', cursive");
        text(this.v, x - 7, y + 7);
    }

    motion()
    {
        this.move = 1;
    }

    still()
    {
        this.move = 0;
    }

    update(x,y)
    {
        this.x = x;
        this.y = y;
        this.move = 0;
    }


}