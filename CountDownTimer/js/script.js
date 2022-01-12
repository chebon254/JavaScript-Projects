const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("mins");
const secondsCount = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCount.innerHTML = formatTime(days);
    hoursCount.innerHTML = formatTime(hours);
    minutesCount.innerHTML = formatTime(mins);
    secondsCount.innerHTML = formatTime(seconds);

    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }


// Initial Call
countDown();

setInterval(countDown, 1000)