"use strict";
let counterValue = 0;
const numberValue = document.querySelector("#value");

function increment() {
  counterValue++;
  numberValue.textContent = counterValue;
}

function decrement() {
  counterValue--;
  numberValue.textContent = counterValue;
}

const buttonIncrement = document.querySelector("[data-action='increment']");
const buttonDecrement = document.querySelector("[data-action='decrement']");

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
