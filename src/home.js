import Header from "./header.js"

function Home() {
	return (
		<div class="home">
			<Header value={["coding", "cubing", "conlanging", "worldbuilding"]}/>
			<h1 class="welcome">
        Zimlit.com 
        <p>
          <h2 class="welcome">coding, cubing, conlanging, worldbuilding</h2>
        </p>
    	</h1>
		</div>
	);
}

export default Home;
