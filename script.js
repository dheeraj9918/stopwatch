const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const milisecondElement = document.getElementById("milisecond");

const startbutton = document.getElementById("startbtn");
const stopbutton = document.getElementById("stopbtn");
const pausebutton = document.getElementById("pausebtn");
const resetbutton = document.getElementById("resetbtn");

const Laplist = document.getElementById("laplist");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startbutton.addEventListener('click', startTimer);
stopbutton.addEventListener('click', stopTimer);
pausebutton.addEventListener('click', pauseTimer);
resetbutton.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startbutton.disabled = true;
};

function stopTimer() {
    clearInterval(interval);
    addtoLplist();
    startbutton.disabled = false;
};

function pauseTimer() {
    clearInterval(interval);
    pausebutton.disabled = false;
    startbutton.disabled = false;
};
function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    resetbutton.disabled = false;
    startbutton.disabled = false;
};

function resetTimerData() {
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    displayTimer();
}



function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

    }

    displayTimer();
}

function displayTimer() {
    milisecondElement.textContent = padTime(milliseconds);
    secondsElement.textContent = padTime(seconds);
    minutesElement.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, '0')
}

function addtoLplist() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${Laplist.childElementCount + 1} :</span> ${lapTime}`;
    Laplist.appendChild(listItem);
}