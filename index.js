// DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show time to update every second
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;

    // output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    // call time in milliseconds
    setTimeout(showTime, 1000);
}

// add zeros to time as when hrs,mins,sec click to a single digit you need to add a zero
// otherwise time would say 12:1:1 instead of 12:01:01 and so on
//wrap it in output time function - only doing on mins & secs
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBackGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/beachMorn.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('../img/anoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //evening
        document.body.style.backgroundImage = "url('./img/night1.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }  
}

// run
showTime();
setBackGreet();

