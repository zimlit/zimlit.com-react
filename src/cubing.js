import Header from "./header.js";
import "./cubing.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";


function Cubing() {
	let match = useRouteMatch();
	return (
		<div class="Cubing">
				<Router>
					<Switch>
						<Route path={`${match.path}/tutorials/zz`}>
						</Route>
						<Route path={match.path}>	
							<Header value={["home", "coding", "conlanging", "worldbuilding"]}/>
								<section class="cat">
            			<h1 class="label">
                		tutorials 
            			</h1>
            			<ul class="cat-list">
                		<li class="item">
                 			<Link  to={`${match.url}/tutorials/zz`}>zz tutorial</Link>
              			</li>
              			<li class="item">
                  		<Link>cfop tutorial</Link>
              			</li>
              			<li class="item">
                  		<Link>roux tutorial</Link>
              			</li>
								
           	 			</ul>
        				</section>
						</Route>
					</Switch>	
				</Router>
		</div>
	);
}

export default Cubing;
