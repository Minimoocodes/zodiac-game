'use strict'

let userYearEl = document.querySelector('#userYear');

function zodiacCalc(e) {
    e.preventDefault();

    let yearInputEl = document.querySelector('#userYear');
    let userYearEl = Number(yearInputEl.value);

    let zodiac = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    let zodiacIndex = userYearEl %12;

    
}


