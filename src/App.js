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

function App() {
	return (
		<div>
			<Router>
				<Switch>
          <Route path="/coding">
						<Coding />
          </Route>
          <Route path="/cubing">
          </Route>
					<Route path="/conlanging">
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

