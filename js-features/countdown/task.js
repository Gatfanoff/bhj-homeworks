let seconds = parseInt(document.getElementById('timer').innerHTML);
let timer = setInterval(() => {
    seconds--;

    let hours = Math.floor(seconds / 3600).toString();
    let minutes = Math.floor((seconds - (hours * 3600)) / 60).toString();
    let secondsLeft = (seconds - (hours * 3600) - (minutes * 60)).toString();
    
    let timeString = hours.padStart(2, "0") + ":" + minutes.padStart(2, "0") + ":" + secondsLeft.padStart(2, "0");


    document.getElementById("timer").innerHTML = timeString;
    if(seconds == 0) {
        clearInterval(timer)
        alert("Вы победили в конкурсе!")
    }
}, 1000); 