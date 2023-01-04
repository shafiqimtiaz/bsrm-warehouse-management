import React, { Component } from "react";
import BarChart from "./bar-chart";

export default class Information extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inventory: [],
			newItemDescription: "",
			newItemQuantity: "",
			currentPage: 1,
			paginationCount: 5,
		};
	}

	render() {
		return (
			<div className="container">
				<h3>Dashboard</h3>
				<br />
				<BarChart />
				<footer style={{ marginTop: "70px" }}></footer>
			</div>
		);
	}
}
