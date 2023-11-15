'use strict'

let userYearEl = document.querySelector('#userYear');

let zodiacForm = document.querySelector('#zodiacForm');
zodiacForm.addEventListener('submit', zodiacCalc);

function zodiacCalc(e) {
    e.preventDefault();

    let yearInputEl = document.querySelector('#userYear');
    let userYearEl = Number(yearInputEl.value);

    let zodiac = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    let zodiacIndex = userYearEl % 12;

    const userZodiacResult = document.querySelector('#userZodiacResult');
    userZodiacResult.textContent = `Your Oriental Zodiac is ${zodiac[zodiacIndex]}`
}




