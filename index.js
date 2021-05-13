// DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    userName = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAMPM = true;

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
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
        ${showAMPM ? amPm : ''}`;

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

// get Name
function getName() {
   if(localStorage.getItem('name') === null) {
    userName.textContent = '[Enter your Name]';
   }else {
    userName.textContent = localStorage.getItem('name');
   }
}

// set Name
function setName(e) {
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            userName.blur(); //takes you out of state so extra lines dont appear
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Add a Focus to Inspire you today!]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set Focus
function setFocus(e) {
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); //takes you out of state so extra lines dont appear
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName); //blur is for when user leaves input field
// clear username box on click if you wish to change to a different name
userName.addEventListener('click', () => {
    userName.innerHTML = '';
})
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// clean focus text on click if you wish to change text
focus.addEventListener('click', () => {
    focus.innerHTML = '';
})

// run
showTime();
setBackGreet();
getName();
getFocus();



