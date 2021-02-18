import Header from "./header.js"
import Star from "./worldbuilding-tools/star.js"
import Planet from "./worldbuilding-tools/planet.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function Worldbuilding() {
	let match = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route path={`${match.path}/star`}>
					<Star />
				</Route>
				<Route path={`${match.path}/planet`}>
					<Planet />
				</Route>
				<Route path={match.path}>
					<Header value={["home", "coding", "cubing", "conlanging"]}/>
					<div class="row">
						<div class="col-1"/>
						<div class="col-10">
							<h1 class="label">
									tools
							</h1>
							<div class="row">
								<div class="col-1"/>
								<ul class="col-10">
									<li class="row">
										<Link class="col-12" to={`${match.url}/star`}>star calculator</Link>
									</li>
									<li style={{background: "transparent"}} class="row">
										<div class="col-12"/>
									</li>
									<li class="row">
										<Link class="col-12" to={`${match.url}/planet`}>planet calculator</Link>
									</li>
								</ul>
								<div class="col-1"/>
							</div>
						</div>
						<div class="col-1"/>
					</div>
				</Route>
			</Switch>
		</div>
	);
}

export default Worldbuilding;
