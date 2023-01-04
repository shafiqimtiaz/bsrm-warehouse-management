import React from "react";
import {
	Chart as ChartJS,
	BarElement,
	LinearScale,
	CategoryScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const apiEndPoint = process.env.REACT_APP_URL;

const BarChart = () => {
	const [chart, setChart] = useState({});

	useEffect(() => {
		axios
			.get(apiEndPoint + "/inv/")
			.then((response) => setChart(response.data))
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const dataArray = Object.values(chart);

	let data = {
		labels: dataArray.map((item) => item.description),
		datasets: [
			{
				label: "Quantity",
				data: dataArray.map((item) => item.quantity),
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],
				borderWidth: 1,
			},
		],
	};

	let options = {
		maintainAspectRation: false,
		type: "bar",
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		legend: {
			labels: { fontSize: 22 },
		},
	};

	return (
		<div>
			<Bar data={data} height={150} options={options} />
		</div>
	);
};

export default BarChart;
