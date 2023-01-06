let e3;

function setup() {
  createCanvas(720, 600);
  noStroke();
  e3 = new Eye(350, 230, 220);
}

function draw() {
  background(255);
  push();
  translate(340, 300);
  rotate(frameCount / 50.0);
  polygon(0, 0, 250, 50);

  fill(23);  
  polygon(0, 0, 300, 30);
  fill(255);  
  polygon(0, 0, 290, 30);
  fill(23);  
  polygon(0, 0, 280, 30);
  fill(255);  
  polygon(0, 0, 270, 30);
  fill(23);  
  polygon(0, 0, 260, 30);
  fill(255);  
  polygon(0, 0, 250, 30);
  fill(23);  
  polygon(0, 0, 240, 30);
  fill(255);  
  polygon(0, 0, 230, 30);
  fill(23);  
  polygon(0, 0, 220, 30);
  fill(255);  
  polygon(0, 0, 210, 30);
  fill(23);  
  polygon(0, 0, 200, 30);
  fill(255);  
  polygon(0, 0, 190, 30);
  fill(23);  
  polygon(0, 0, 180, 30);
  fill(255);  
  polygon(0, 0, 170, 30);
  fill(23);  
  polygon(0, 0, 160, 30);
  
  
  
  
  
  
  
  pop();
  
  translate(-13, 70);
  e3.update(mouseX, mouseY);
  e3.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    // white part
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    // pupil
    fill(10, 10,0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);    
    pop();
  };
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed() {
    if (key === 's') {
      saveGif('Jan_06', 6);
    }
  }
