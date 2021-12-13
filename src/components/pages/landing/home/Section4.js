import React from 'react';
import "./Home.css"
import { content } from "../../../utilities/home/section4";

const Section4 = () => {
	return (
		<div className="section-4">
			{
				content &&
					<div className="section-4-container">
						<p className="section-4-h5">
							{content.headerOne}
						</p>
						<p className="section-4-h4">
							{content.headerTwo}
						</p>
						<p className="section-4-p">
							{content.text}
						</p>
					</div>
			}
		</div>
	)
}

export default Section4
