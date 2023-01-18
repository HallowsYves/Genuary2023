let r;
let g;
let b;
function setup() {
  createCanvas(800, 800);
  r = random(1, 256);
  g = random(1, 256);
  b = random(1, 256);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  
  
  x = 0;
  while (x < width) {
    push();
    stroke(5);
    line(x, x, x, height);
    x = x + 50;
    pop();
  }
  
  y = 50;
  while (y < height) {
    push();
    stroke(255);
    strokeWeight(4);
    fill(r,g,b);
    square(y, y, width, y);
    y = y + 50;
    pop();
  }
}
