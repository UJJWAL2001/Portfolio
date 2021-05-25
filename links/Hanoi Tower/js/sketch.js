
let t1,t2,t3;
let p1,p2,p3,p4,p5;
let plate;
let tower;
let lev1,lev2,lev3;
let level =3;

function setup(){
  createCanvas(800, 400);
  rectMode(CENTER);
  t1 = new Tower(150);
  t2 = new Tower(400);
  t3 = new Tower(650);
  var T = [t1,t2,t3];

  p1 = new Plate(170, 255, 102, 204);
  p2 = new Plate(140, 153, 102, 255);
  p3 = new Plate(110, 0, 153, 204);
  p4 = new Plate(80, 0, 204, 102);
  p5 = new Plate(50, 255, 204, 0);

  var P = [p1,p2,p3];

  level1();

  lev1 = createButton('Level 1');
  lev1.mousePressed(level1);

  lev2 = createButton('Level 2');
  lev2.mousePressed(level2);

  lev3 = createButton('Level 3');
  lev3.mousePressed(level3);

}

function draw(){
  background(255);
  var T = [t1,t2,t3];
  var P = [p5,p4,p3,p2,p1];

  T.forEach(function(t){
    t.drawTower();
  });
  
  for(let i=0 ; i<level ; ++i)
  {
    P[i].drawPlate();
  }

  textSize(28);
  fill(0);
  text('A', 140, 360);

  textSize(28);
  fill(0);
  text('B', 390, 360);

  textSize(28);
  fill(0);
  text('C', 640, 360);

  positionButtons();
  winCheck();

}

function mousePressed(){
  var T = [t1,t2,t3];
  for(let i=0 ; i < 3 ; ++i)
  {
    var t = T[i];
    if( mouseX > t.x - t.w/2 && 
      mouseX < t.x + t.w/2 &&
      mouseY < t.y && mouseY > t.y - t.l - t.h/2 )
    {
      t.plates[t.total -1].move();
      plate = t.plates[t.total -1];
      tower  = t;
    }
  }
}

function mouseReleased(){
  var T = [t1,t2,t3];
  for(let i=0 ; i < 3 ; ++i)
  {
    var t = T[i];
    if( mouseX > t.x - t.w/2 && 
      mouseX < t.x + t.w/2 &&
      mouseY < t.y && mouseY > t.y - t.l - t.h/2 )
    {
      if( t === tower )
      {
        plate.still();
      }
      else if( t.enterPlate(plate) )
      {
        tower.exitPlate();
      } 
      else 
      {
        plate.still();
      }
    } 
    else
    {
      if(typeof(plate)!=="undefined")
        plate.still();
    }
  }
}

function winCheck(){
  if (t3.total === level)
  { 
    textSize(32);
    fill(10, 142, 100);
    text('You Won !!', 330, 100);
  }
}

function level1()
{
    var T = [t1,t2,t3];
    var P = [p3,p4,p5];

    level = 3;

    T.forEach(function(t){
      t.emptyTower();
    });

    for(let i=0 ; i<3 ; ++i)
    {
      t1.enterPlate(P[i]);
    }
}

function level2()
{
    var T = [t1,t2,t3];
    var P = [p2,p3,p4,p5];

    level = 4;

    T.forEach(function(t){
      t.emptyTower();
    });

    for(let i=0 ; i<4 ; ++i)
    {
      t1.enterPlate(P[i]);
    }
}

function level3()
{
    var T = [t1,t2,t3];
    var P = [p1,p2,p3,p4,p5];

    level = 5;

    T.forEach(function(t){
      t.emptyTower();
    });

    for(let i=0 ; i<5 ; ++i)
    {
      t1.enterPlate(P[i]);
    }
}

function positionButtons()
{
  lev1.position(windowWidth/2 - 180, 113);
  lev2.position(windowWidth/2 -55, 113);
  lev3.position(windowWidth/2 +70, 113);
}