import Header from "../../header.js";
import Beginner from "./beginner.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function ZZ() {
	let match = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route path={`${match.path}/beginner`}>
					<Beginner />
				</Route>
	
				<Route path={match.path}>
					<Header value={["home", "coding", "cubing", "conlanging", "worldbuilding"]}/>
					<div class="row">
						<div class="col-1"/>
						<div class="col-10">
							<section class="cat">
      					<h1 class="label">
        					Overview
        				</h1>
        				<h2>
          				In the zz method you first orient all edges while solving the fd and bd edges then solve f2l then solve ll
        				</h2>
        			</section>
						</div>
						<div class="col-1"/>
					</div>
					<div class="row"/>
        		<div class="col-1"/>
						<div class="col-10">
							<section class="cat">
          			<h1 class="label">
            			zz tutorials beginer to advanced
          			</h1>
        				<Link class="cat-button" to={`${match.url}/beginner`}>beginner tutorial</Link>
        			</section>
						</div>
						<div class="col-1"/>
				</Route>
			</Switch>
		</div>
	);
}

export default ZZ;
