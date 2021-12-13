import React from 'react';
import {banner} from "../../../utilities/home/banner"
import "./Home.css"

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-container">
				<div className="banner-left">
					<h3 className="banner-h3">
						{
							banner &&
							banner.header
						}
					</h3>
					<p className="banner-p">
						{
							banner &&
							banner.content
						}
					</p>
					<button className="banner-button">
						More
					</button>
				</div>
				<div className="banner-right">
					<img 
						src={banner.image}
						className="banner-right-image"
						alt={banner.alt}
						/>
				</div>
			</div>
		</div>
	)
}

export default Banner
