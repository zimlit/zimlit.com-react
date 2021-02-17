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
		<div>	
					<Switch>
						<Route path={`${match.path}/tutorials/zz`}>
							<ZZ />	
						</Route>
						<Route path={match.path}>
							<Header value={["home", "coding", "conlanging", "worldbuilding"]}/>
							<div class="row">
								<div class="col-1"/>
								<div class="col-10">
									<section class="cat">
            				<h1 class="label">
              				tutorials 
            				</h1>
										<div class="row">
											<div class="col-1"/>
            						<ul class="col-10">
                					<li class="row">
														<div class="col-12">
                  						<Link  to={`${match.url}/tutorials/zz`}>zz tutorial</Link>
              							</div>
													</li>
													<li style={{background: "transparent"}} class="row">
														<div class="col-12"/>
              						</li>
													<li class="row">
														<div class="col-12">
                  						<Link  to={`${match.url}/tutorials/zz`}>cfop tutorial</Link>
              							</div>
													</li>
													<li style={{background: "transparent"}} class="row">
														<div class="col-12"/>
              						</li>
              						<li class="row">
														<div class="col-12">
                  						<Link  to={`${match.url}/tutorials/zz`}>roux tutorial</Link>
              							</div>
													</li>
            						</ul>
											<div class="col-1"/>
										</div>
        					</section>
								</div>
							</div>
						</Route>
					</Switch>	
		</div>
	);
}

export default Cubing;
