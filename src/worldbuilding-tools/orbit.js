import Header from "../header.js";
import React from "react";
import "./tools.css"

class Orbit extends React.Component {
constructor(props) {
		super(props);

		this.state = {v1: '', v2: '', v3: '', a: ""};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange1(event) {
		this.setState({v1: event.target.value});
	}
  handleChange2(event) {
		this.setState({v2: event.target.value});
	}

  handleChange3(event) {
		this.setState({v3: event.target.value});
	}

  handleSubmit(event) {
		this.setState({a: <ul class="res"> 
			<li>{`semi minor axis ${this.state.v1 * Math.sqrt(1 - this.state.v2**2)} au`}</li>
			<li>{`periapsis ${this.state.v1 * (1 - this.state.v2)} au`}</li>
			<li>{`apoapsis ${this.state.v1 * (1 + this.state.v2**2)} au`}</li>
			<li>{`year length ${Math.sqrt(this.state.v1**3/this.state.v3) * 365} days`}</li>
			<li>{`oribital velocity ${Math.sqrt(this.state.v3/this.state.v1) * 29.78} km/s`}</li>
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
									semi major axis in au	
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input class="text-input" type="text" value={this.state.v1} onChange={this.handleChange1} />
								</div>
							</div>
						</label>
						<label>
							<div class="row">
								<div class="col-12">
									eccentricity
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input class="text-input" type="text" value={this.state.v2} onChange={this.handleChange2} />
								</div>
							</div>
						</label>

						<label>
							<div class="row">
								<div class="col-12">
									mass of star( in solar masses)
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input class="text-input" type="text" value={this.state.v3} onChange={this.handleChange3} />
								</div>
							</div>
						</label>
						<div class="row">
							<div class="col-12">
								<input type="submit" class="submit" value="submit"/>
							</div>
						</div>
					</form>
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

export default Orbit;
