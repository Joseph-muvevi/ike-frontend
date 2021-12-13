import React from 'react'
import {upperContent, cardList} from "../../../utilities/home/section3"

const Section3 = () => {
	return (
		<div className="section-3">
			<div className="section-3-container">
				{
					upperContent &&
						<div className="section-3-upper">
								
								<div className="section-3-upper-left">
									<p className="section-5-upper-h5">
										{upperContent.headerOne}
									</p>
									<p className="section-5-upper-h4">
										{upperContent.headerTwo}
									</p>
									<p className="section-5-upper-p">
										{upperContent.paragraph}
									</p>
								</div>
							<div className="section-3-upper-right">
								<img 
									className="section-3-image"
									src={upperContent.image}
									alt="desktop"
									/>
							</div>
						</div>
				}
				<div className="section-3-lower">
					{
						cardList &&
						cardList.map((element, index) => (
							<div key={index} className="cards-medium">
								<p className="cards-small-font">
									{element.topic}
								</p>
								<p className="cards-small-number">
									{element.number}
								</p>
								<p className="cards-small-text">
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

export default Section3
