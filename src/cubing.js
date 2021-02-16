import Header from "./header.js";
import ZZ from "./cubing-tutorials/zz/zz.js";
import "./cubing.css";
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
					<Switch>
						<Route path={`${match.path}/tutorials/zz`}>
							<ZZ />	
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
                  	<a href="tutorials/cfop/cfop.html">cfop tutorial</a>
              		</li>
              		<li class="item">
                  	<a href="tutorials/roux/roux.html">roux tutorial</a>
              		</li>
									<li class="item">
                		<a href="tutorials/heise/heise.html">heise tutorial</a>
                	</li>
            		</ul>
        			</section>
						</Route>
					</Switch>	
		</div>
	);
}

export default Cubing;
