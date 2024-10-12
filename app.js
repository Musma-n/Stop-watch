let startTime, updatedTime, difference;
let interval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function start() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateDisplay, 1000);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop() {
    if (running) {
        clearInterval(interval);
        difference = new Date().getTime() - startTime;
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function reset() {
    clearInterval(interval);
    display.textContent = "00:00:00";
    running = false;
    difference = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateDisplay() {
    updatedTime = new Date().getTime() - startTime;
    
    let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((updatedTime / 1000) % 60);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);