function setup() {
  createCanvas (500,500);
  background (200,100,0,100);
  
}

function draw() {
  fill (random(255),random (10,100),random (0,100));
  strokeWeight(2);
  ellipse (mouseX,mouseY,60,60);
  
}