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
		<Jumbotron/>
		<div className="contenedor-fotos d-flex flex-wrap ">
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
