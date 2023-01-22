f = 50;  //font size
col = ["lightblue","beige","lightyellow","black","gold"]

function setup() {
  createCanvas(700, 700);
  background(0);
  textSize(f);
  for(x=0;x<width+f;x+=f*0.3){
    for (y=0;y<height+f;y+=f*1.4){
      c=random(3);
      stroke(col[floor(random(5))])
      fill(col[floor(random(5))])
      if (c<1){
        text("░",y,x)
      }
      else if (c<2){
        text("▒",x,y)
      }
     else if (c<3){
        text("▓",x,y)
      }
      else if (c<4){
        text("█",x,y)
      }
    }
  }  
}

function keyTyped() {
  if (key === "s") {
    save("Jan_21.jpg");
  }
}
