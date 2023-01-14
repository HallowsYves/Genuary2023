let theta;
let weight;

let r;
let b;
let g;
let num_of_branch;

function setup() {
  createCanvas(900, 900);
  weight = random(1, 24);
  r = random(100, 255);
  b = random(100, 255);
  g = random(100, 255);
  num_of_branch = random(200, 300);
  
}

function draw() {
  background(0);
  frameRate(60);
  stroke(r, b ,g);
  strokeWeight(2);
  
  // Angle based on mouse pos
  let a = (mouseX / height) * 90;
  theta = radians(a);
  translate(width / 2, height);
  line(1000,100,100, 120);
  translate(0, -420);
  branch(num_of_branch);
}

function branch(h) {
  // Each branch smaller than the previous one
  h *= 0.66;
  
  if (h > 2) {
    push();
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    
    push();
    rotate(-theta);
    line(0,0,0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}
  function keyPressed() {
    if (key === 's') {
      saveGif('Jan_13', 5);
    }
  }
