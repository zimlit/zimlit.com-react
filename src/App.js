import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./home.js";
import Coding from "./coding.js";
import Cubing from "./cubing.js";
import Conlanging from "./conlanging.js";

function App() {
	return (
		<div>
			<Router>
				<Switch>
          <Route path="/coding">
						<Coding />
          </Route>
          <Route path="/cubing">
						<Cubing />
						
          </Route>
					<Route path="/conlanging">
						<Conlanging />
          </Route>
					<Route path="/worldbuilding">
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    	</Router> 
		</div>
	);
}


export default App;

