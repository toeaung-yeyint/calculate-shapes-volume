const year = document.querySelector("#startYear");
const startMonth = document.querySelector("#startMonth");
const endMonth = document.querySelector("#endMonth");
const retailPrice = document.querySelector("#retailPrice");
const financialCrisis = document.querySelector("#yes-btn");
const form = document.querySelector(".form");
const formSection = document.querySelector(".form-section");
const chartSection = document.querySelector(".chart-section");
const priceChart = document.querySelector("#priceChart");
const newCalculation = document.querySelector(".new-calculation");
let lineChart;
const labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Nov",
  "Dec",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let prices = [
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
    Number.parseInt(retailPrice.value),
  ];
  for (let i = 0; i < prices.length; i++) {
    if (financialCrisis.checked) {
      prices[i] = prices[i] + prices[i] * (10 / 100);
    }
    if (i >= 7 && i <= 11) {
      prices[i] = prices[i] + prices[i] * (5 / 100);
    }
  }
  console.log(prices);

  formSection.classList.add("hidden");
  chartSection.classList.remove("hidden");
  lineChart = new Chart(priceChart, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Unit price",
          data: prices,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: `Price Chart for the year ${year.value}`,
          font: {
            size: 16,
            weight: "bold",
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });

  year.value = "";
  startMonth.value = "";
  endMonth.value = "";
  retailPrice.value = "";
  financialCrisis.checked = false;
});

newCalculation.addEventListener("click", () => {
  formSection.classList.remove("hidden");
  lineChart.destroy();
  chartSection.classList.add("hidden");
});
