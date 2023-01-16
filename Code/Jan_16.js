let cam;
function setup() {
  createCanvas(800, 600, WEBGL);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(5);
  noStroke();
  
  push();
  rotateY(QUARTER_PI * frameCount * 0.01);
  rotateX(QUARTER_PI * frameCount * 0.01);
  texture(cam);
  box(300, 300, 300);
  pop();
  
  push();
  rotateY(-QUARTER_PI * frameCount * 0.01);
  rotateX(-QUARTER_PI * frameCount * 0.01);
  texture(cam);
  box(300, 300, 300);
  pop();
}

  function keyPressed() {
    if (key === 's') {
      saveGif('Jan_16', 8);
    }
  }
