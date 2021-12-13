import React from 'react';
import {cardItems, contentHeaders} from "../../../utilities/home/section2"
import "./Home.css"

const Section2 = () => {
	return (
		<div className="section-2">
			<div className="section-2-container">
				{
					contentHeaders &&
					<div className="section-2-upper">
						<p className="section-2-h5">
							{contentHeaders.headerOne}
						</p>
						<p className="section-2-h3">
							{contentHeaders.headerTwo}
						</p>
						<p className="section-2-h4">
							{contentHeaders.headerThree}
						</p>
					</div>
				}
				<div className="section-2-lower">
					{
						cardItems && 
						cardItems.map((element, index) => (
							<div className="cards">
								<div className="card-icons">
									{element.icon}
								</div>
								<h4 className="card-header">
									{element.header}
								</h4>
								<p className="card-p">
									{element.text}
								</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Section2
