import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart");

let scores = [0, 0, 0, 0, 0, 0];
const genres = ["FPS", "RPG", "Driving", "Action", "Horror", "Sim"];

// Render chart
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: genres,
    datasets: [
      {
        data: scores,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Update chart data
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
