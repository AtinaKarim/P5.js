'use strict'

var mySoldier = [];

var img;
var img2;
var img3;
var st = 1;
var x1;
var y1;
var x2;
var y2;
var song;


function preload() {
  img = loadImage("asset/salvadordali.jpg");
  img2 = loadImage("asset/must.png");
  img3 = loadImage ("asset/sd.jpg");
  song = loadSound ("asset/tada.mp3");
}

function setup() {

  createCanvas(500, 470);
  textFont ("Lato");

  frameRate(2);
  var soldierQty = 1;

  for (var soldierNumber = 0; soldierNumber < soldierQty; soldierNumber++) {
    var x = int(random(50, 50));
    var y = int(random(0, 800));
    mySoldier.push(new SuperSoldier(x, y));
  }
}

function draw() {
  background(img);
  
  var soldierQty = mySoldier.length;

  for (var soldierNumber = 0; soldierNumber < soldierQty; soldierNumber++) {
    mySoldier[soldierNumber].showSoldier();
  }

    if (st === 1) {
    x1 = random(height);
    y1 = random(width);
    x2 = x1;
    y2 = y1;
  }
  if (st === 0) {
    if (x2>= 40 && x2<= 250 && y2>=180 && y2 <=350){
	st = 2;
    }

     }
     if (st=== 2) {
       
       background (img3);
       song.play ();
	     textSize (50);
	     textStyle(BOLD);
	     fill(0,100,100);
       text ("YOU WIN!",150,350);
       fill (0);
       rect (150,380,230,50);
       textSize (30);
       fill (255);
       text ("Play Again",190,415);
      
      image (img2,mouseX,mouseY,250,150);
      
      
      if (mouseIsPressed&&mouseX>150&&mouseX<370&&mouseY>380&&mouseY<430){
        st=1;
        song.stop();
      }
       
      
     }
        
     }

function keyPressed() {
  if (keyCode == UP_ARROW) {
    st = 0;
  }
  if (keyCode == DOWN_ARROW) {
    st = 1;
    
  }
}

class SuperSoldier {
  constructor(_X, _Y) {
    var _ID = mySoldier.length;
    this.X = _X;
    this.Y = _Y;
    this.ID = _ID;
  }

  showSoldier() {

    ellipseMode(CORNER);
    fill(255);
    noStroke();

    image(img2, x2, y2, 300, 100);
   
  }
  moveSoldier() {}
}