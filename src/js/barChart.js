import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart");

let scores = [0, 0, 0, 0, 0, 0];
const genres = ["FPS", "RPG", "Driving", "Action", "Horror", "Sim"];

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

export { scores, myChart, genres };
