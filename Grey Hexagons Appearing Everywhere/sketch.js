function setup() {
  createCanvas (800,800);
  hexagon (400,400,100);
  
}

function draw() {
  var x = random (width);
  var y = random (height);
  var r = random (15,30);
  fill (random (255), random (255));
  hexagon (x,y,r);
  
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
