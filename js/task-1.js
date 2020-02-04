"use strict";

const liList = document.querySelectorAll(".item");
console.log(`В списке ${Array.from(liList).length} категории.`);

function globalList() {
  const liList = Array.from(document.querySelectorAll("ul#categories li.item"));
  return console.log(
    liList.map(key => {
      const arrayofLi = key.querySelectorAll("li").length;
      return `Категория: ${
        key.querySelector("h2").innerText
      }, Количество элементов: ${arrayofLi}`;
    })
  );
}
globalList();
