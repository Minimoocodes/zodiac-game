'use strict'

let userYearEl = document.querySelector('#userYear');

function zodiacCalc(e) {
    e.preventDefault();

    let yearInputEl = document.querySelector('#userYear');
    let userYearEl = Number(yearInputEl.value);

    let zodiac = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    let zodiacIndex = userYearEl % 12;

    const userZodiacResult = document.querySelector('#userZodiacResult');
    // For Q2.1. How do I push the result out to HTML here for now? userZodiacResult.textContent?
    // Yes we using the userZodiacResult.textContent
    // since you already have the remainder `zodiacIndex`,
    // we only need to use this `zodiacIndex` to get that exact element in the `zodiac` array
    // and assign the result zodiac[zodiacIndex] to `userZodiacResult.textContent`
    userZodiacResult.textContent = zodiac[zodiacIndex];

    // For Q2.2. My ultimate goal here is to push it out as Modal.
    // here is an example https://www.w3schools.com/howto/howto_css_modals.asp
}

// For Q1. Do I need to connect the button to the input? if so, how do I do it??
// No, it is a form you playing with
// when we click or hit the Enter on the type="submit" button
// this form will be submitted, more info https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit
// All we need to do is bind your `zodiacCalc` function with that form's submit event like the glue code below.
// TIP: we should use id to reference these html elements in html, see the reason here: https://chat.openai.com/share/55cf4d93-063e-458d-9a8b-222187007079
let zodiacForm = document.querySelector('#zodiacForm');
zodiacForm.addEventListener('submit', zodiacCalc);
