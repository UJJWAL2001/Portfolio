class Triangle
{
    constructor(positionX,positionY,length)
    {
        this.x            = positionX;
        this.y            = positionY;
        this.l            = length;
        this.space        = 10;
        this.d            = 40;
        this.emptyCircles = [];
        this.numbers      = [];
        for( let i=0 ; i<6 ; ++i ) this.numbers[i] = 0;
    }

    draw()
    {   
        let angle = radians(60);
        let lc     = this.l * cos(angle);
        let ls     = this.l * sin(angle);
        let sx     = (this.d/2 + this.space) * sin(angle);
        let sy     = (this.d/2 + this.space) * cos(angle);
        let x1     = this.x;
        let y1     = this.y;
        let x2     = this.x - lc;
        let y2     = this.y + ls;
        let x3     = this.x + lc;
        let y3     = this.y + ls;

        noStroke();

        fill(255, 255, 102);
        triangle(x1, y1, x2, y2, x3, y3);

        fill(153, 255, 102);
        ellipse( x1, y1 - this.space - this.d/2, this.d, this.d);
        ellipse(x2 - sx, y2 + sy, this.d, this.d);
        ellipse(x3 + sx , y3 + sy , this.d, this.d);
        
        fill(0);
        textSize(25);
        textFont("'Lobster', cursive");
        text('1', x1 -4, y1 - this.space - this.d/2 + 8);
        text('2', x2 - sx -7, y2 + sy + 8);
        text('3', x3 + sx -7,y3 + sy + 8);

        noFill();
        stroke(255);
        strokeWeight(1);
        sx     = (this.d/2 + this.space +15) * sin(angle);
        sy     = (this.d/2 + this.space +15) * cos(angle);
        this.emptyCircles = [
            (x1 + 2*(x2-sx))/3, (y1-this.space-this.d/2-15 + 2*(y2+sy))/3,
            (2*x1 + x2-sx)/3, (2*(y1-this.space-this.d/2-15) + y2+sy )/3,
            (2*x1 + x3 + sx)/3, (2*(y1-this.space-this.d/2-15) + y3 + sy )/3,
            (x1 + 2*(x3 + sx))/3, (y1-this.space-this.d/2-15 + 2*(y3 + sy))/3,
            (2*(x3 + sx) + x2-sx)/3, (2*(y3 + sy) + y2+sy )/3,
            (x3 + sx + 2*(x2-sx))/3, (y3 + sy + 2*(y2+sy))/3
        ];

        for(let i=0; i<this.emptyCircles.length; i+=2)
        {
            ellipse(this.emptyCircles[i],this.emptyCircles[i+1],this.d,this.d);
        }
    }

    placeValue(position,value)
    {
        this.numbers[position] = value;
    }

    winCheck()
    {
        let count =0 ;

        for(let i=0 ; i<6 ; i++)
        {
            if( this.numbers[i] === 0 ) 
            {
                text(" ", this.x-50, this.y + this.l + 50);
                return 0;
            }
        }

        for(let i=0 ; i<6 ; i+=2)
        {
            if( this.numbers[i] + this.numbers[i+1] === 14-(i/2)) count++;
        }


        textSize(25);
        textFont("'Lobster', cursive");
        stroke(255);
        strokeWeight(3);

        if(count === 3)
        {
            fill(0, 102, 0);
            text("You Won !!", this.x-50, this.y + this.l + 50);
        }
        else
        {
            fill(153, 51, 51);
            text("Try Again !!", this.x-50, this.y + this.l + 50);
        }
    }
}