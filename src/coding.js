import Header from "./header";
import "./coding.css"

function Coding() {
	return (
		<div>
			<Header value={["home", "cubing", "conlanging", "worldbuilding"]}/>
			<div class="row">
				<div class="col-12">
					<p class="github">
						<a class="github-button" href="https:/github.com/zimlit">github</a>
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-1"/>
				<div class="col-10">
					<section class="cat">
						<h1 class="label">
                Projects 
            </h1>
            <h2 class="cat-button">
                <a class="cat-button" href="https:/github.com/zimlit/zimlit.com-react">This website</a>
            </h2>
            <h2>
								<a class="cat-button" href="https:/github.com/zimlit/valley">the valley programing language</a>
            </h2>
            <h2>

            </h2>
					</section>
				</div>
				<div class="col-1"/>
			</div>
		</div>
	);
}
export default Coding;
