let a, b, c, d, e;
let r;
let b2;
let g;
function setup() {
  createCanvas(310, 200);
  noStroke(10);
  r = random(1, 256);
  b2 = random(1, 256);
  g = random(1, 256);
  
  a = color(r, b2, g);
  b = color(r, b2, g);
  c = color(r, b2, g);
  d = color(r, b2, g);
  e = color(r, b2, g);
}

function draw() {
  drawBand(a, b, c, d, e, 100, width / 128);
  drawBand(c, a, d, b, e, height / 2, width / 128);
}

function drawBand(v, w, x, y, z, ypos, rectWidth) {
  let num = 5;
  let colorOrder = [v, w, x, y, z];
  for (let i = 0; i < width; i += rectWidth * num) {
    for (let j = 0; j < num; j++) {
      fill(colorOrder[j]);
      push();
      ellipse(i + j * rectWidth, ypos, rectWidth, height / 1);
      rect(i + j * rectWidth, ypos, rectWidth, height / 100);
      pop();
    }
  }
}

