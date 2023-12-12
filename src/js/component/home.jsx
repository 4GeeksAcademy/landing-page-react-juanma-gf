import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<div className="container-fluid mt-4 ">
		<Jumbotron/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
