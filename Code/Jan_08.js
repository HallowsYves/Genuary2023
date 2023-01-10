let img;
function setup() {
  createCanvas(900, 700, WEBGL);
  img = loadImage('cat_eye.png');
}

function draw() {
  background(20);
  let radius = width * 1.1;

  //drag to move the world.
  orbitControl();

  normalMaterial();
  texture(img);
  translate(0, 0, 30);
  for (let i = 0; i <= 22; i++) {
    for (let j = 0; j <= 22; j++) {
      push();
      let a = (j / 26) * PI;
      let b = (i / 22) * PI;
      translate(
        sin(4 * a) * radius * sin(b),
        (cos(b) * radius) / 4,
        cos(24 * a) * radius * sin(b)
      );
      rotateY(mouseX * 0.01);
      rotateX(mouseY * 0.01);
      rotateZ(mouseY * 0.01);
      if (j % 2 === 0) {
        box(30, 30);
      } else {
        box(30, 30);
      }
      pop();
    }
  }
}
function keyPressed() {
    if (key === 's') {
      saveGif('Jan_07', 6);
    }
  }
