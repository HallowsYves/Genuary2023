let spacing;
spacing = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(5);
  spacing = spacing + random(1);
  stroke(255);
  strokeWeight(1);
  
  x = 60;
  while (x < width) {
    line(x, 0, x, height);
    line(x, 0, x, height);
    
    x = x + spacing;
  }
  
  y = 50;
  while (y < height) {
    line(0, y, width, y);
    line(0, x, width, y);
    line(0, x, height, -y);
    line(0, y, height, -x);
    line(0, -y, height, -x); 
    y = y + spacing;
  } 
}
  function keyPressed() {
    if (key === 's') {
      saveGif('Jan_17', 5);
    }
  }
