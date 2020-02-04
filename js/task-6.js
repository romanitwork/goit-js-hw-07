"use strict";

const validInput = document.querySelector("#validation-input");
validInput.addEventListener("blur", inputFunc);

function inputFunc(e) {
  if (validInput.value.length == validInput.getAttribute("data-length")) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
