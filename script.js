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

    let zodiacResultEl = document.querySelector('#zodiacResult');
    zodiacResultEl.textContent = zodiac[zodiacIndex];

    let zodiacImgEl = document.querySelector('#zodiacImg');
    zodiacImgEl.src = "./img/"+ zodiacIndex + ".png";

    let zodiacTableEl= document.querySelector('#zodiacTable');
    zodiacTableEl.classList.add('image--hidden');
    // const userZodiacResult = document.querySelector('#userZodiacResult');
    // userZodiacResult.textContent = `Your Oriental Zodiac is ${zodiac[zodiacIndex]}`
}

let modalBtnEl = document.querySelector('#button');
modalBtnEl.addEventListener('click', function(){
    let modalMsg = document.querySelector('#zodiacModal');
    modalMsg.classList.toggle('modal__inner--show');
});




