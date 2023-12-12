import React from "react";
import Navbar from "./navbar";
import Jumbroton from "./jumbotron";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<div className="container">
		<Jumbroton/>
		</div>
		</div>
	);
};

export default Home;
