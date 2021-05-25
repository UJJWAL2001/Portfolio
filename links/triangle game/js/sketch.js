var bubbles =[];
var T;
var by = 400;
var bubble;



function setup() {
    createCanvas(550, 500);

    T = new Triangle( width/2, 100, 200);
    initiate();
    
}
  

function draw() {
    background(204, 0, 255);
    T.draw();
    
    bubbles.forEach(function(b){
        b.draw();
    })

    T.winCheck();
}




function initiate()
{
    for(let i=0 ; i<6 ; ++i)
    {
        let b = new Bubble(40, 75 + 80*i , 400, i+4);
        bubbles.push(b);
    }
}

function mousePressed()
{
    bubbles.forEach(function(b){
        let d = dist( mouseX, mouseY, b.x, b.y);

        if( d < b.d/2 )
        {
            b.motion();
            bubble = b;
        }
    })
}

function  mouseReleased()
{
    if(typeof(bubble) !== 'undefined')
    {
        let l = T.emptyCircles.length;
        for(let i=0; i<l; i+=2)
        {
            let d = dist(mouseX, mouseY, T.emptyCircles[i], T.emptyCircles[i+1]);
            if( d < T.d/2)
            {
                if(bubble.x !== bubble.ox)
                {
                    T.placeValue(bubble.pos, 0);
                }
                bubble.update(T.emptyCircles[i], T.emptyCircles[i+1]);
                bubble.pos = i/2 ;
                T.placeValue(bubble.pos, bubble.v)
                return;
            }
        }

        let d = dist(mouseX, mouseY, bubble.ox, bubble.oy)
        if( d < bubble.d/2 )
        {
            bubble.update(bubble.ox, bubble.oy);
            T.placeValue(bubble.pos, 0);
            return;   
        }


        bubble.still();

    }
}