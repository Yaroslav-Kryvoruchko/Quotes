let numberQuotes;
let times = document.getElementById("times");
let timerTime = 0.1 * 60; /* 0.1 = 6 seconds, 1 = minute, 1440 = 24 hour */

function timerMain() {
  timer = setInterval(() => {
    seconds = timerTime % 60;
    minutes = (timerTime / 60) % 60;
    hour = (timerTime / 60 / 60) % 60;

    if (timerTime <= 0) {
      timerTime = timerTime + 0.1 * 60;
      numberQuotes = Math.trunc(Math.random() * 3);/* number 3 answers for quantity randoms numbers */
      console.log(numberQuotes);
      changeQuotes(numberQuotes);
    } else {
      let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
      times.innerHTML = strTimer;
    }
    --timerTime;
  }, 1000);
}

const quoteItemTop = document.getElementById("quote_item_top");
const quoteItemBottom = document.getElementById("quote_item_bottom");

const arroyQuotes = [
  {
    mainText:
      "While we are postponing, life speeds",
    secondaryText: "by. Seneca",
  },
  {
    mainText:
      "The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity.",
    secondaryText: "by. Mark Twain",
  },
  {
    mainText: "If you do not think about the future, you cannot have one.",
    secondaryText: "by. Galsworthy",
  },
];

function changeQuotes(numberQuote) {
  quoteItemTop.textContent = arroyQuotes[numberQuote].mainText;
  quoteItemBottom.textContent = arroyQuotes[numberQuote].secondaryText;
}

timerMain();
