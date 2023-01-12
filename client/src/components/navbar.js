import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.png";

export default class Navbar extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-sm navbar-dark bg-dark"
				style={{ marginBottom: "20px" }}
			>
				<a className="navbar-brand" href="https://shafiqimtiaz.github.io/">
					<img
						src={logo}
						width="30"
						height="30"
						alt="https://shafiqimtiaz.github.io/"
					/>
				</a>
				<Link to="/" className="navbar-brand">
					BSRM Warehouse
				</Link>

				<div className="navbar-collapse">
					<ul className="navbar-nav">
						<li className="navbar-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/list" className="nav-link">
								Inventory
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/update" className="nav-link">
								Restock/Use
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">
								Create Items
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/remove" className="nav-link">
								Remove Items
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
