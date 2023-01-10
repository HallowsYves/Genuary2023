const contanier = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;

contanier.addEventListener('click', function(){
    const audio1 = document.getElementById('audio1');
    // audio1.src
    const audioCtx = new AudioContext();
    audio1.play();
    audioSource = audioCtx.createMediaElementSource(audio1);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination)
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount; // half of fftSize
    const dataArray = new Uint8Array(bufferLength); // convert 

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x;

    function animate() {
        x=0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        for(let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i]; // adjust for height of bar
            ctx.fillStyle = 'white';
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
        }
        requestAnimationFrame(animate);
    }
    animate();
});