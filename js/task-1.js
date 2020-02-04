"use strict";

const liList = document.querySelectorAll(".item");
console.log(`В списке ${Array.from(liList).length} категории.`);

liList.forEach(item => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    } || Количество элементов: ${item.querySelector("ul").children.length}`
  );
});
