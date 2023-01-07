let noiseScale = 100;
let particles = [];
let numOfPart = 500;

function setup() {
  createCanvas(500, 500);
  noiseDetail(1, 0);
  genNoiseImg();
  image(noiseImg, 0, 0);
  
  for (let i = 0; i < numOfPart; i++) {
    let particle = new Object();
    particle.pos = createVector(random(width), random(height));
    particles.push(particle);
    frameRate(60);
  }
}

function curl(x, y) {
  let EPSILON = 0.001; // sample time
  let n1 = noise(x + EPSILON, y);
  let n2 = noise(x - EPSILON, y);
  
  let cx = (n1 - n2) / (2 * EPSILON);
  
  // rate
  n1 = noise(x, y + EPSILON);
  n2 = noise(x, y - EPSILON);
  
  // average
  let cy = (n1 - n2) / (2 * EPSILON);
  
  return new createVector (cy, -cx); // rotate 90 
}

function draw() {
  tint(-40, 4);
  image(noiseImg, 0, 0);
  strokeWeight(6); // particle size
  stroke(200, 0, 0); // dot color
  
  for(let i = 0; i <particles.length; i++) {
    let p = particles[i]; // pick a particle
    p.pos.add(curl(p.pos.x / noiseScale, p.pos.y / noiseScale));
    point(p.pos.x, p.pos.y);
  }
  
  
  
}

function genNoiseImg() {
  noiseImg = createGraphics(width, height);
  noiseImg.loadPixels();
  let widthX = width*pixelDensity();
  let heightY = height*pixelDensity();
  for (let i = 0; i < widthX; i++){
    for (let j = 0; j < heightY; j++){
      let x = i / pixelDensity();
      let y = j / pixelDensity();
      let brightness = pow(noise(x / noiseScale, y / noiseScale) -0.3, 1/2.0) * 400;
      noiseImg.pixels[ (i+j*widthX) * 4] = brightness;
      noiseImg.pixels[ (i+j*widthX) * 4 + 1] = brightness;
      noiseImg.pixels[ (i+j*widthX) * 4 + 2] = brightness;
      noiseImg.pixels[ (i+j*widthX) * 4 + 3] = 255;
    }
  }
  noiseImg.updatePixels();
}

function keyPressed() {
    if (key === 's') {
      saveGif('Jan_07', 10);
    }
  }
