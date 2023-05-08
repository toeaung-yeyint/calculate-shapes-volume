import snackbar from "snackbar";

snackbar.duration = 5000;

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
let startMonthInNumber;
let endMonthInNumber;

const startMonthtoNumber = (month) => {
  switch (month) {
    case "jan":
      startMonthInNumber = 0;
      break;
    case "feb":
      startMonthInNumber = 1;
      break;
    case "march":
      startMonthInNumber = 2;
      break;
    case "april":
      startMonthInNumber = 3;
      break;
    case "may":
      startMonthInNumber = 4;
      break;
    case "june":
      startMonthInNumber = 5;
      break;
    case "july":
      startMonthInNumber = 6;
      break;
    case "aug":
      startMonthInNumber = 7;
      break;
    case "sept":
      startMonthInNumber = 8;
      break;
    case "oct":
      startMonthInNumber = 9;
      break;
    case "nov":
      startMonthInNumber = 10;
      break;
    case "dec":
      startMonthInNumber = 11;
      break;
    default:
      startMonthInNumber = "";
      break;
  }
};

const endMonthtoNumber = (month) => {
  switch (month) {
    case "jan":
      endMonthInNumber = 0;
      break;
    case "feb":
      endMonthInNumber = 1;
      break;
    case "march":
      endMonthInNumber = 2;
      break;
    case "april":
      endMonthInNumber = 3;
      break;
    case "may":
      endMonthInNumber = 4;
      break;
    case "june":
      endMonthInNumber = 5;
      break;
    case "july":
      endMonthInNumber = 6;
      break;
    case "aug":
      endMonthInNumber = 7;
      break;
    case "sept":
      endMonthInNumber = 8;
      break;
    case "oct":
      endMonthInNumber = 9;
      break;
    case "nov":
      endMonthInNumber = 10;
      break;
    case "dec":
      endMonthInNumber = 11;
      break;
    default:
      endMonthInNumber = "";
      break;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  startMonthtoNumber(startMonth.value);
  endMonthtoNumber(endMonth.value);
  if (endMonthInNumber < startMonthInNumber) {
    document.querySelector(".form").append(document.querySelector(".snackbar"));
    snackbar.show(
      "Peak selling period for the end month must not be earlier than the start month. Please try again!"
    );
  } else {
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
      if (
        typeof startMonthInNumber === "number" &&
        i >= startMonthInNumber &&
        i <= endMonthInNumber
      ) {
        prices[i] = prices[i] + prices[i] * (20 / 100);
      }
      if (financialCrisis.checked) {
        prices[i] = prices[i] + prices[i] * (10 / 100);
      }
      if (i >= 6 && i <= 11) {
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
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
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
  }
});

newCalculation.addEventListener("click", () => {
  formSection.classList.remove("hidden");
  lineChart.destroy();
  chartSection.classList.add("hidden");
});
