import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'


class Header extends React.Component {
	constructor(props) {
		super()
		this.props = props
	}
	
	render() {
		
		return (
			<nav>
    		<ul>
					{
						this.props.value.map(function(val) {
							return <li><Link to={val == "home" ? "/" : "/" + val}>{val}</Link></li>
						})
					}
      	</ul>
  		</nav>
		);
	}
}

export default Header;
