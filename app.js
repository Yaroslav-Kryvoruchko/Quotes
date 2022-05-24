import { arroyQuotes } from './arrayQuotes.js';

const times = document.getElementById('times');
const quoteItemTop = document.getElementById('quote_item_top');
const quoteItemBottom = document.getElementById('quote_item_bottom');

let numberQuotes;
let timer;
let userInputTime = parseInt(
  prompt('What you want set time on your timer?', '10')
);
let timerTime = userInputTime * 60;
let numberOfQuotes = 21;
let checkNumber = [];

if (isNaN(userInputTime) || userInputTime <= 0) {
  timerTime = 1 * 60;
}

function addAndCheckNumbers() {
  for (let i = 0; i < numberOfQuotes; i++) {
    checkNumber.push(Math.trunc(Math.random() * numberOfQuotes));
  }

  let set = new Set(checkNumber);
  checkNumber = [...set];

  console.log(checkNumber);

  checkArrayLength();
}

addAndCheckNumbers();

function checkArrayLength() {
  if (checkNumber.length < numberOfQuotes) {
    addAndCheckNumbers();
  }
}

let i = 0;

function randomNumbers() {
  numberQuotes = checkNumber[i];
  i++;

  if (i === numberOfQuotes) {
    checkNumber = [];
    addAndCheckNumbers();
    i = 0;
  }
}

function timerMain() {
  timer = setInterval(() => {
    let seconds = Math.trunc(timerTime % 60);
    let minutes = Math.trunc((timerTime / 60) % 60);
    let hour = Math.trunc((timerTime / 60 / 60) % 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }

    if (timerTime == 0) {
      randomNumbers();
      timerTime = timerTime + userInputTime * 60;
      changeQuotes(numberQuotes);
    } else {
      let strTimer = `${hour}:${minutes}:${seconds}`;
      times.textContent = strTimer;
    }
    --timerTime;
  }, 1000);
}

timerMain();

function firstQuotes() {
  const startQuotes = Math.trunc(Math.random() * numberOfQuotes);
  changeQuotes(startQuotes);

  if (startQuotes === checkNumber[0]) {
    checkNumber = [];
    addAndCheckNumbers();
  }
}
firstQuotes();

function changeQuotes(numberQuote) {
  quoteItemTop.innerHTML = arroyQuotes[numberQuote].mainText;
  quoteItemBottom.innerHTML = arroyQuotes[numberQuote].secondaryText;
}
