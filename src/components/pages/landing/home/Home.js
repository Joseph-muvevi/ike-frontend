import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Home = () => {
	return (
		<div className="home">
			<Banner/>
			<Section2/>
			<Section3/>
			<Section4/>
		</div>
	)
}

export default Home
