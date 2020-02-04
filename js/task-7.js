"use strict";

const fontElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

fontElement.addEventListener("input", fontSizeChange);

function fontSizeChange(e) {
  spanElement.style.fontSize = e.currentTarget.value + "px";
}
