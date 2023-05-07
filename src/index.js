const ctx = document.getElementById("myChart");

new Chart(ctx, {
	type: "line",
	data: {
		labels: [
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
		],
		datasets: [
			{
				label: "Price",
				data: [12, 19, 3, 5, 2, 3, 11, 4, 7, 9, 10, 5],
				borderWidth: 1,
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
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			// add chart title
			title: {
				display: true,
				text: "Price Chart for the year 2023",
				font: {
					size: 16,
					weight: "bold",
				},
			},
			// hide dataset label
			legend: {
				display: false,
			},
		},
	},
});
