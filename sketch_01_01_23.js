
function setup() {
    createCanvas(710, 400, WEBGL);
  }
  
  function draw() {
    background(250);
    normalMaterial();
    translate(20, 30, 10);
    push();
    rotateZ(frameCount * 0.06);
    rotateX(frameCount * 0.06);
    rotateY(frameCount * 0.06);
    torus(70, 20);
    pop();
  }
  
  function keyPressed() {
    // this will download the first 5 seconds of the animation!
    if (key === 's') {
      saveGif('mySketch', 5);
    }
  }
  