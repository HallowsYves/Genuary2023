function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  push();
  // Top
  ellipse(200, 80, 100);
  // Middle
  ellipse(200, 180, 130);
  // Base
  ellipse(200, 310, 180);
  pop();
  
  // Middle and eyes
  push();
  fill(4);
  polygon(200, 180, 10, 7);
  polygon(200, 150, 10, 7);
  polygon(200, 210, 10, 7);
  
  polygon(180, 70, 10, 7);
  polygon(220, 70, 10, 7);  
  pop();
  
  push();
  fill(255, 84, 0);
  triangle(200, 100, 30, 30, 16, 5);
  pop();
  
  push();
  fill(5);
  rect(130, 20, 150, 10);
  rect(150, -30, 100, 50); 
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
