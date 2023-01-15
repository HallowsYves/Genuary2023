function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(244, 230, 200);
  
  // red part
  push();
  fill(200, 0, 0);
  triangle(30, 75, 58, 0, 200, 205);
  pop();
  
  // red part
  push();
  fill(0, 0, 0);
  triangle(30, 75, 60, 20, 200, 205);
  pop();  
  
  
  push();
  fill(250, 250, 250);
  ellipse(200, 200, 200, 200);
  pop();
  
  // black rect
  push();
  fill(0, 50, 100);
  rect(90, 120, 220, 10);
  pop();
  
  // yellow rect
  push();
  fill(255, 200, 10);
  rotate(100);
  rect(-40, 350, 260, 10);
  pop();
}
