import "../scss/index.scss";
import "../assets/logo.svg";
import "./barChart";
import "./menu";

import { scores, myChart, genres } from "./barChart";

const checkBoxes = document.querySelectorAll(".checkbox");
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    e.target.parentNode.classList[e.target.checked ? "add" : "remove"]("selected");

    const genre = e.target.dataset.genre;
    const checked = e.target.checked;

    for (let i = 0; i < genres.length; i++) {
      if (genres[i] == genre && checked) {
        scores[i] += 10;
      } else if (genres[i] == genre && !checked) {
        scores[i] -= 10;
      }
    }

    myChart.update();
  });
});
