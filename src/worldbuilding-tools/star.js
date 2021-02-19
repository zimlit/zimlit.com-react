import Header from "../header.js";
import React from "react";
import "./tools.css"

class Star extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: '', a: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
		this.setState({value: event.target.value});
	}

  handleSubmit(event) {
		let radius = this.state.value < 1 ? this.state.value**0.8 : this.state.value**0.5;
		let luminosity = this.state.value**3.5;

		this.setState({a: <ul class="res"> 
			<li class="res-elem">{`mass: ${this.state.value *  1.9891e30} kg`}</li>
			<li class="res-elem">{`radius: ${radius * 696340} km`}</li>
			<li class="res-elem">{`luminosity: ${luminosity * 3.827e26 } W`}</li>
			<li class="res-elem">{`habitable zone inner: ${Math.sqrt(luminosity/1.1)} au`}</li>
			<li class="res-elem">{`habitable zone outer: ${Math.sqrt(luminosity/0.53)} au`}</li>
			<li class="res-elem">{`lifetime: ${(this.state.value/luminosity) * 10000000000} y`}</li>
			<li class="res-elem">{`temprature: ${((luminosity/radius**2)**(1/4))*5778} K`}</li>
			<li >{`inner limit of star system: ${0.1*this.state.value} au`}</li>
			<li>{`outer limit of star system: ${40*this.state.value} au`}</li>
			<li>{`frost line ${4.85 * Math.sqrt(luminosity)} au`}</li>
		</ul>});
    event.preventDefault();
  }


	render() {
		return (
			<div>
				<Header value={["home", "coding", "cubing", "conlanging", "worldbuilding"]}/>
				<div class="row">
					<div class="col-1"/>
					<form onSubmit={this.handleSubmit} class="col-11">
						<label>
							<div class="row">
								<div class="col-12">
									Mass(in solor masses)
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<input class="text-input" type="text" value={this.state.value} onChange={this.handleChange} />
								</div>
							</div>
						</label>
						<div class="row">
							<div class="col-12">
								<input type="submit" value="submit" class="submit"/>
							</div>
						</div>
					</form>
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

export default Star;
