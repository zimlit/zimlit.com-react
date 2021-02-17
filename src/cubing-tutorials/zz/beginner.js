import Header from "../../header.js";
import "./beginner.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function Beginner() {
	return (
		<div>
			<Header value={["home", "coding", "cubing", "conlanging", "worldbuilding"]}/>
			<section class="cat_zztut">
                <h1 class="label">
                    step 1: eoline
                </h1>
                <h2>
                    <h1 class="label">
                    part 1: eo
                    </h1>
                    <p>
                        In this step you orient all of the edges on the cube.
                    </p>
                    
                        <p>
                            <h1 class="label">
                                recogition:
                            </h1>
                            To recognize wich edges are oriented hold your scrambeled cube in any orientation and look at the edges.
                            Start by looking at the edges in the E slice if any edge doesn't have the front or back colors facing out is bad.
                            Now look at the top and bottom layers if any edge doesn't have the top or bottom colors facing out is bad.
                            <h1 class="label">
                                    orientation:
                            </h1>
                            <p>
                                <p>
                                    <h3 class="label">
                                        2 bad edges:
                                    </h3>
                                    Bring one to any where in the S slice and the other any where in the E slice.
                                    Now turn wichever layer the edge in the E slice is on toword the one in the S slice and then do a [D, U] move to brng the edge in the S slice to the position of the one in the E slice and then undo the turn you made to bring the E slice edge closer to the S slice edge.
                                </p>
                                <p>
                                    <h3 class="label">
                                        4 bad edges:
                                    </h3> 
                                    bring all of them to the front or back using only [R, U, D, L, F2, B2]  and then turn which ever layer you brought them to one quarter turn and your edges will be oriented.
                                </p>
                                <p>
                                    <h3 class="label">
                                        6 bad edges:
                                    </h3>
                                    There are two ways to solve this one way is to do the four edge method then the two edge case and the other is to do the four edge case but with only thre edges then the  normal four edge case.
                                </p>
                                <p>
                                    <h3 class="label">
                                        8 bad edges:
                                    </h3>
                                    To solve this case you just do the four edge twice.
                                </p>
                                <p>
                                    <h3 class="label">
                                        12 bad edges:
                                    </h3>
                                    To solve this case you do one quarter turn on both the front and back and then do the two edge case.
                                </p>
                            </p>
                        </p>
                </h2>
                <aside class="sidebar-zztut">
                    <p>
                        an edge is oriented when it can be solved with only [R, U, D, L, F2, B2] moves
                    </p>

                </aside>
                <h2>
                    <h1 class="label">
                    part 2: line
                    </h1>
                    <p>
                        In this step you place the front and back bottom layer edges.
                    </p>
                    <p>
                        This step is much simpler than the previous one as all you have to do is intuitively place the edges with only [R, U, D, L, F2, B2] moves.
                    </p>
                </h2>
                <h2>
                    <h1 class="label">
                        examples:
                    </h1>
                    <p>
                        <p>
                            <h3 class="label">Solve 1:</h3> 
                            Scramble: R2 B U2 B2 L2 D2 B R2 D2 F U2 L F2 D' U R' U2 R' B R2 B
                            <br />
														Solve: F' U2 F R' L2 D'
                        </p>
                    </p>
                </h2>
            </section>
						
            <section class = "cat">
                    <h1 class="label">
                            step 2: F2L
                    </h1>
                    <p>
                            In this step you solve the first two layers.
                    </p>
                    <h2>
                            <h1 class="label">
                                    part 1: left block
                            </h1>
                            <p>
                                    For this step you place all of the remaining pieces int left side of the first two layers.
                            </p>
                    </h2>
            </section>
		</div>
	);
}

export default Beginner;
