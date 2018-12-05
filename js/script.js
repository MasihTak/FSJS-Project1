/*
 * FSJS project 1 - A Random Quote Generator
 * Author: MasihTak
 * License: MIT
*/


// global variables
const background = document.querySelector('body');
const button = document.getElementById('loadQuote');


// CSS Random Color from https://github.com/masihtak/RandomCssColors
/****************************************
  CSS Random Colors by MasihTak
  Under  MIT license
*****************************************/

// Generate random color
function randomColor() {
  return Math.floor(Math.random() * 256 )
}

//RGB
function rgbColors() {
  return 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
}

//RGBA
function rgbaColors(red, green, blue, a) {
  a = Math.random().toFixed(1); //initialize alpha value with 1 decimal number
  // fix isuuse cause alpha number set to 0
  if(a == 0.0) {
    a = 0.1;
  }
  return 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ',' + a + ')';
}




//  An array of quote objects
let quotes = [
  {
    quote: "Stay hungry, stay foolish.",
    source: "Stave Jobs",
    citation: "Brainyquote",
    tags: ['Success', 'hungry']
  },
  {
    quote: "The key to efficient development is to make interesting new mistakes.",
    source: "Tom Love",
    citation: "Twitter",
    year: 2018,
    tags: ['Success', 'Life', 'Programming']
  },
  {
    quote: "The only thing that separates humans is their attitude.",
    source: "Masih Abjadi",
    citation: "Twitter",
    year: 2018,
    tags: ['Motivation', 'Mind Set']
  },
  {
    quote: "First do it, then do it right, then do it better",
    source: "Addy Osmani",
    citation: "Twitter",
    year: 2018,
    tags: ['Motivation']
  },
  {
    quote: "Programming is not about typing, it's about thinking",
    source: "Rich Hickey",
    citation: "Twitter",
    year: 2017,
    tags: ['Motivation', 'Programming']
  },
  {
    quote: "Set your goals high, and don't stop till you get there.",
    source: "Bo Jackson",
    citation: "Brainyquote",
    tags:['Motivation', ['Goals']]
  },
  {
    quote: "The game of life is a game of boomerangs. Our thoughts, deeds and words return to us sooner or later with astounding accuracy.",
    source: "Florence Scovel Shinn",
    citation: "Brainyquote",
    tags: ['Life', 'Mind Set']
  }
]


// generate a random quote
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
   calling the `getRandomQuote` function and assign it to randomQuote variable.
***/
const printQuote = () => {
    const randomQuote = getRandomQuote();
    let printHTML = '';
    const quoteBox = document.getElementById('quote-box');
    // Use the properties of the quote object stored in the randomQuote variable to create HTML string.
    printHTML += `<p class="quote"> ${randomQuote.quote} </p>
                  <p class="source"> ${randomQuote.source}`;

    // Use conditionals to make sure the optional properties exist before they are added to the HTML string.
    if (randomQuote.citation) {
      printHTML += `<span class="citation"> ${randomQuote.citation} </span>`;
    }

    if (randomQuote.year) {
      printHTML += `<span class="year"> ${randomQuote.year} </span>`;
    }
    printHTML += `</p>
                  <ul class="tags">`;

    for(let i=0; i< randomQuote.tags.length; i++) {
      printHTML += `<li>${randomQuote.tags[i]}</li>`
    }
    printHTML += `</ul>`;

    quoteBox.innerHTML = printHTML;
    background.style.backgroundColor = rgbColors();
    button.style.backgroundColor = rgbaColors();
}


// When button is clicked, the event listener below will be triggered, and it will call, or "invoke".
button.addEventListener("click", printQuote, false);


// Print Random quote after 15s
setInterval(printQuote, 15000);
