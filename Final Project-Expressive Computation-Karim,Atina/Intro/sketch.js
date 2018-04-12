'use strict'
var img2;
var song2;
var st =1;


function preload () {
  
  img2 = loadImage ("asset/must.png");
  song2 = loadSound ("asset/destino.mp3");
}

function setup() {
  createCanvas (500,470);
  background (255);
  song2.play();
  song2.setVolume (0.4);
  }


function draw() {
  
  var x = random (width);
  var y = random (height);
  var r = random (100,100);
  fill (random (255), random (255));
  image (img2,x,y,r);
  fill (255);
  rect ()
  fill (80,100,80);
  textFont ("Dali");
  textStyle (BOLD);
  textSize (70);
  text ("Dali's Mustache",20,200);
  fill (0);
  rect (20,300,410,100)
  
  textSize (20);
  fill(255);
  text ("UP-Pauses Mustache  DOWN-Restarts Mustache ",30,350);
  text ("Press ENTER to Play",150,375);
  
  
  
}

function hexagon (x,y,radius) {
  noStroke ();
  push ();
    translate (x,y);
    beginShape ();
  for (var i=0; i<6; i++){
    var r = radians (i*60);
    var x = sin(r)*radius;
    var y = cos (r) * radius;
    vertex (x,y);
   
  }
  endShape (CLOSE);
  pop ();
}


function keyPressed() {
  if (keyCode == ENTER) {
    st = 1;
}
}

