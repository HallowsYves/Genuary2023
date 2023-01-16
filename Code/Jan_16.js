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
  rotateZ(QUARTER_PI * frameCount * 0.01);
  texture(cam);
  plane(400, 400);
  pop();
  
  push();
  rotateZ(-QUARTER_PI * frameCount * 0.01);
  texture(cam);
  plane(300, 300);
  pop();
  
  push();
  rotateZ(QUARTER_PI * frameCount * 0.01);
  texture(cam);
  plane(200, 200);
  pop();
  
  push();
  rotateZ(-QUARTER_PI * frameCount * 0.01);
  texture(cam);
  plane(100, 100);
  pop();
  
  push();
  rotateZ(QUARTER_PI * frameCount * 0.01);
  texture(cam);
  plane(30, 30);
  pop();
}

  function keyPressed() {
    if (key === 's') {
      saveGif('Jan_16', 5);
    }
  }
