import React from 'react';
import "./Contact.css";

const ContactForm = () => {
	return (
		<div className="contact-form">
			<div className="contact-form-content">
				<iframe 
					title="afrex map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5427.802135294854!2d36.74545263261241!3d-1.3480397486587685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05251c56c1d1%3A0xf42cab72e07bbed9!2sstanjo%20karen%20suites!5e0!3m2!1sen!2ske!4v1636392256603!5m2!1sen!2ske" 
					className="contact-iframe"
					allowfullscreen="" 
					loading="lazy">

				</iframe>
				<div className="contact-form-right">
					<form>
						<div className="contact-form-group">
							<label htmlFor="names">
								Fullnames
							</label>
							<input
								className="contact-form-input"
								type="text"
								placeholder="enter your fullnames..."/>
						</div>
						<div className="contact-form-group">
							<label htmlFor="email">
								Email
							</label>
							<input
								className="contact-form-input"
								type="email"
								placeholder="enter your email..."/>
						</div>
						<div className="contact-form-group">
							<label htmlFor="names">
								Company
							</label>
							<input
								className="contact-form-input"
								type="text"
								placeholder="enter fullnames"/>
						</div>
						<div className="contact-form-group">
							<label htmlFor="names">
								Telephone
							</label>
							<input
								className="contact-form-input"
								type="tel"
								placeholder="enter fullnames"/>
						</div>
						<div className="contact-form-group">
							<label htmlFor="message">
								Message
							</label>
							<textarea
								className="contact-form-input"
								type="text"
								placeholder="your message here..."/>
						</div>
						<button className="contact-button" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
