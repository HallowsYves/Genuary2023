const radius = 200;

function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  fill(255);
}

function draw() {
  noStroke();
  background(0);
  const dirY = (mouseY / height - 0.5) * 4;
  const dirX = (mouseX / width - 0.5) * 4;
  directionalLight(304, 504, 504, dirX, dirY, 0.7);
  sphere(100, 100, 100);
  translate(3 * radius, 0, 0);
}

function keyPressed() {
  if (key === 's') {
    saveGif('Jan_22', 5);
  }
}
