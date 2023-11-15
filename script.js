'use strict'

let userYearEl = document.querySelector('#userYear');
// let submitBtn = document.querySelector('#button');

function zodiacCalc(e) {
    e.preventDefault();

    let yearInputEl = document.querySelector('#userYear');
    let userYearEl = Number(yearInputEl.value);

    let zodiac = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    let zodiacIndex = userYearEl %12;

    
}


// let year = Number(userYearEl.value);

// let buttonEl = document.querySelector('#button');
// buttonEl.addEventListener('submit', function(e){
//     e.preventDefault();
// });


// let zodiac = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
// let zodiacIndex = userYear % 12;

// console.log(`Your Oriental Zodiac is ${zodiac[zodiacIndex]}`);
