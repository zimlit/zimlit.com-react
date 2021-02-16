import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import Home from "./home.js"

function App() {
	return (
		<div class="header">
				<Router>
				<nav>
            <ul>
                <li>
                    <Link to="/coding">coding</Link>
               </li>
               <li>
                    <a href="cubing/cubing.html">cubing</a>
               </li>
               <li>
                    conlanging
               </li>
               <li>
                    <a href="worldbuilding/worldbuilding.html">worldbuilding</a>
               </li>
               <li>
                    <a href="linux/linux.html">linux</a>
                </li>
            </ul>
        </nav>
				<Switch>
          <Route path="/coding">
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

