"use strict";

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", showName);
function showName(e) {
  if (!inputName.value) {
    outputName.textContent = "незнакомец";
  } else {
    outputName.textContent = inputName.value;
  }
}
