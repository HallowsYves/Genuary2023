function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(255);

  let locX = mouseX;
  let locY = mouseY;
  
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(locX * 0.01);
  cylinder(70, 70);
  pop();
}
  
function keyPressed() {
    if (key === 's') {
      saveGif('mySketch', 6);
    }
  }
