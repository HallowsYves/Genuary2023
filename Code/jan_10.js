const button1 = document.getElementById('button1');
const audioCtx = new AudioContext();
console.log(audioCtx);




const button2 = document.getElementById('button2');
button2.addEventListener('click', playSound);

function playSound() {
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination); // connect to speaker
    oscillator.type = 'sine'; // sine, square, sawtooth, triangle
    oscillator.start();
    setTimeout(function(){
        oscillator.stop();
    }, 200);
}