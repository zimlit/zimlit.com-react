import Header from "../header.js";
import React from "react";
import "./tools.css"
import graph from "./graph.png"

class Planet extends React.Component {
constructor(props) {
		super(props);

		this.state = {v1: '', v2: '', a: ""};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange1(event) {
		this.setState({v1: event.target.value});
	}
  handleChange2(event) {
		this.setState({v2: event.target.value});
	}

  handleSubmit(event) {
		let gravity = this.state.v1/this.state.v2**2;
		this.setState({a: <ul class="res"> 
			<li>{`gravity: ${gravity * 9.8} m/s`}<sup>2</sup></li>
			<li>{`density: ${(gravity/this.state.v2) * 5.51} g/cm`}<sup>3</sup></li>
		</ul>});
    event.preventDefault();
  }

	render() {
		return (
			<div>
				<Header value={["home", "coding", "cubing", "conlanging", "worldbuilding"]}/>
				<div class="row">
					<div class="col-1"/>
					<form onSubmit={this.handleSubmit} class="col-4">
						<label>
							<div class="row">
								<div class="col-12">
									Mass(in earth masses)
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input type="text" value={this.state.v1} onChange={this.handleChange1} />
								</div>
							</div>
						</label>
						<label>
							<div class="row">
								<div class="col-12">
									radius(in earth radii)
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input type="text" value={this.state.v2} onChange={this.handleChange2} />
								</div>
							</div>
						</label>
						<div class="row">
							<div class="col-12">
								<input type="submit" value="submit"/>
							</div>
						</div>
					</form>
					<img src={graph} alt="graph showing the relationship between planet composition and its mass and radius" class="col-6"/>
					<div class="col-1"/>
				</div>
				<div class="row">
					<div class="col-1"/>
					<div class="col-5">
						{this.state.a}
					</div>
					<div class="col-6"/>
				</div>
			</div>
		);
	}
}

export default Planet;
