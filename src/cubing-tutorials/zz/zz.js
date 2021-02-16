import Header from "../../header.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function ZZ() {
	return (
		<div>
			<Header value={["home", "coding", "cubing", "conlanging", "worldbuilding"]}/>
			<section class="cat">
      	<h1 class="label">
        	Overview
        </h1>
        <h2>
          In the zz method you first orient all edges while solving the fd and bd edges then solve f2l then solve ll
        </h2>
        </section>
        <section class="cat">
          <h1 class="label">
            zz tutorials beginer to advanced
          </h1>
          <a class="cat-button" href="zztut.html">beginer tutorial</a>
        </section> 
		</div>
	);
}

export default ZZ;
