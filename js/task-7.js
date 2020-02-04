"use strict";

const fontElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

fontElement.addEventListener("input", fontSizeChange);

function fontSizeChange(e) {
  spanElement.style.fontSize = e.currentTarget.value + "px";
}
