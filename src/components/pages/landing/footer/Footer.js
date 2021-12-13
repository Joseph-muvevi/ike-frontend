import React from 'react';
import {footer} from "../../../utilities/footer";
import "./Footer.css"

const Footer = () => {

	return (
		<div className="footer">
			{
				footer &&
					<div className="footer-container">
						<div className="footer-top">
							<div className="footer-left">
								<p className="footer-left-h4">
									{footer.footerTopLeft.header}
								</p>
								<p className="footer-left-p">
									{footer.footerTopLeft.text}
								</p>
							</div>
							<div className="footer-list-container">
								<div className="footer-list">
									<p className="footer-list-h5">
										{footer.footerListOne.footerHeaders}
									</p>
									{
										footer.footerListOne.footerItems.map((element, index) => (
											<div className="footer-links" key={index}>
												{element.element}
											</div>
										))
									}
								</div>
								<div className="footer-list">
									<p className="footer-list-h5">
										{footer.footerListTwo.footerHeaders}
									</p>
									{
										footer.footerListTwo.footerItems.map((element, index) => (
											<div className="footer-links" key={index}>
												{element.element}
											</div>
										))
									}
								</div>
								<div className="footer-list">
									<p className="footer-list-h5">
										{footer.footerListThree.footerHeaders}
									</p>
									{
										footer.footerListThree.footerItems.map((element, index) => (
											<div className="footer-links" key={index}>
												{element.element}
											</div>
										))
									}
								</div>
							</div>
						</div>
						<div className="footer-hr">

						</div>
						<div className="footer-middle">
							<div className="footer-middle-left">
								{
									footer.footerHorizontals.map((element, index) => (
										<p key={index} className="footer-middle-left-link">
											{element.element}
										</p>
									))
								}
							</div>
							<div className="footer-middle-right">
								{
									footer.footerSocial.map((element, index) => (
										<div key={index} className="footer-icon">
											{element.icon}
										</div>
									))
								}
							</div>
						</div>
						<div className="footer-bottom">
							<p className="footer-bottom-p">
								{footer.bottomContent}
							</p>
						</div>
					</div>
			}
		</div>
	)
}

export default Footer
