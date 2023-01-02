let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let logo;

function preload() {
  logo = loadImage('images/small_logo.png');

}

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  
  logo.loadPixels();
  for (let x = 0; x < logo.width; x++) {
    for (let y = 0; y < logo.height; y++) {
      let a = map(y, 0, logo.height, 255, 0);
    }
  }
  logo.updatePixels();
  
}

function draw() {
  background(250);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  image(logo, xpos, ypos);
  
}

  function keyPressed() {
    // this will download the first 5 seconds of the animation!
    if (key === 's') {
      saveGif('mySketch', 5);
    }
  }