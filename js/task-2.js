"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const fragment = document.createDocumentFragment();
const list = document.querySelector("#ingredients");
ingredients.forEach(veggie => {
  const veggieLi = document.createElement("li");
  veggieLi.textContent = veggie;
  fragment.appendChild(veggieLi);
});
list.appendChild(fragment);
