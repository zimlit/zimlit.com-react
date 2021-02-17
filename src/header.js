import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'


class Header extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	
	render() {
		
		return (
			<div class="row">
				<div class="col-1"/>
					<div class="col-10">	
						<nav>
    					<ul>
								{
									this.props.value.map(function(val) {
										return <li key={val}><Link to={val === "home" ? "/" : "/" + val}>{val}</Link></li>
									})
								}
							</ul>
  					</nav>
					</div>

					<div class="col-1"/>
			</div>
		);
	}
}

export default Header;
