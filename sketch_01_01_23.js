x = 0;
y = 0;
s = 10;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  if (random() > 0.5) {
    line (x, y, x+s, y+s);
  } else{
    line (x+s, y, x, y+s);
  }
  x += s;
  if(x >= width) {
    x = 0;
    y += s;
  }
}