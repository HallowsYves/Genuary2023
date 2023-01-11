function main() {
   const canvas = document.getElementById('myCanvas');
   const ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   
   class Bar {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(micInput){
        this.x++;

    }
    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

const microphone = new Microphone();
let bars = [];
function createBars() {
    for (let i = 0; i < 256; i++) {
        bars.push(new Bar(i, 0, 10, 100, 'gold'));
    }
}
createBars();
console.log(bars);

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    bars.forEach(function(bar){
        bar.draw(ctx);
    });
    requestAnimationFrame(animate);
}
animate();
}
