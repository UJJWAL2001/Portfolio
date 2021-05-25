class Tower{

    constructor(x){
        this.x = x;
        this.y = 320;
        this.w = 200;
        this.h = 25;
        this.l = 170;
        this.t = 14;
        this.plates = [];
        this.total = 0;
    }
  
    drawTower(){
        fill(165,42,42);
        noStroke();
        rect(this.x,this.y,this.w,this.h);
        fill(165,42,42);
        noStroke();
        rect(this.x,this.y - this.h/2 - this.l/2,this.t,this.l);
    }

    enterPlate(plate){
        if(this.total === 0)
        {
            plate.x = this.x;
            plate.y = this.y - plate.h/2 - this.h/2;
            this.plates.push(plate);
            this.total ++ ;
            return 1;
        } 
        else if(this.plates[this.total - 1].w > plate.w)
        {
            plate.x = this.x;
            plate.y = this.plates[this.total - 1].y - plate.h;
            this.plates.push(plate);
            this.total ++ ;
            return 1;
        }

        return 0;
    }

    exitPlate(){
        this.plates.pop();
        this.total--;
    }

    emptyTower(){
        if(this.total!=0)
        {
            do
            {
                this.plates.pop();
                this.total --;
            }while(this.total!=0);
        }
    }

};