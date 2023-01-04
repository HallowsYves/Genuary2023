
function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  let r = random(0, 180);
  let g = random(0, 240);
  let b = random(0, 240);
  stroke(r, g, b);
  strokeWeight(0.2);
 
  
}

function draw() {
  randomChord();
  randomChord();  
  
  if (mouseIsPressed) {
  let r = random(0, 180);
  let g = random(0, 240);
  let b = random(0, 240);
  stroke(r, g, b);
  }
}

function randomChord() {
  // find first random point
  let angle1 = random(0, 2 * PI);
  let xpos1 = 200 + 200 * cos(angle1);
  let ypos1 = 200 + 200 * sin(angle1);

  // find second random point
  let angle2 = random(0, 2 * PI);
  let xpos2 = 200 + 200 * cos(angle2);
  let ypos2 = 200 + 200 * sin(angle2);

  line(xpos1, ypos1, xpos2, ypos2);
}

  function keyPressed() {
    if (key === 's') {
      saveGif('mySketch', 5);
    }
  }
