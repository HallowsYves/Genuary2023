let fontFantasy;
function preload() {
  fontFantasy = loadFont('Fonts/rune.TTF');
}

function setup() {
  // Setup
  createCanvas(800, 760);
  background(4);
  fill(255)
  .strokeWeight(0)
  .textSize(60);
  textFont(fontFantasy);
  noLoop();
}

function draw(string) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    return result;
} 
  text(generateString(15), 40, 130);
  text(generateString(15), 40, 200);
  text(generateString(15), 40, 270);
  text(generateString(15), 40, 340);
  text(generateString(15), 40, 410);
  text(generateString(15), 40, 480);
  text(generateString(15), 40, 550);
  text(generateString(15), 40, 620);
  text(generateString(15), 40, 690);
}
function mousePressed() {
  createCanvas(800, 760);
  background(4);
  redraw();
}
