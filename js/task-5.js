"use strict";

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", showName);
function showName(e) {
  if (!inputName.value) {
    outputName.textContent = "незнакомец";
  } else {
    outputName.textContent = inputName.value;
  }
}
