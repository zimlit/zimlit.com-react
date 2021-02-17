import Header from "./header";
import "./coding.css"

function Coding() {
	return (
		<div>
			<Header value={["home", "cubing", "conlanging", "worldbuilding"]}/>
			<div class="row">
				<div class="col-1"/>
				<div class="col-10">
					<p class="github">
						<a class="github-button" href="https:/github.com/zimlit">github</a>
					</p>
				</div>

				<div class="col-1"/>
			</div>
			<div class="row">
				<div class="col-1"/>
				<div class="col-10">
					<section class="cat">
						<h1 class="label">
                Projects 
            </h1>
						<div class="row">
							<div class="col-1"/>
								<ul class="col-10">
            			<li class="row">
               		 <a class="col-12" href="https:/github.com/zimlit/zimlit.com-react">This website</a>
            			</li>
									<li style={{background: "transparent"}} class="row">
										<div class="col-12"/>
									</li>
            			<li class="row">
										<a class="col-12" href="https:/github.com/zimlit/valley">the valley programing language</a>
            			</li>
								</ul>
							</div>
					</section>
				</div>
				<div class="col-1"/>
			</div>
		</div>
	);
}
export default Coding;
