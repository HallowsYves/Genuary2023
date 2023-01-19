let goofy;

function setup() {
  createCanvas(800, 800);
  goofy = createVideo(['Max.mov', 'Max.webm']);
  goofy.loop();
  goofy.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  goofy.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - goofy.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      square(x, y, radius, radius);
    }
  }
}

  function keyPressed() {
    if (key === 's') {
      saveGif('Jan_17', 4);
    }
  }
