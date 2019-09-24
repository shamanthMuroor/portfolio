import React, { Component } from 'react';

export default class Introduction extends Component {
    render() {
        return (
        <section className="colorlib-contact" data-section="contact">
            <div class="row contact-form pb-30">
                <div class="col-sm-12 col-md-5 col-lg-5 left-background">
                    <img src="" alt="" />
                </div>
                <div class="col-sm-12 col-md-7 col-lg-7">
                    <div class="form-contact-me">
                        <div id="show_contact_msg" class="row">
                        </div>
                        <form method="post" id="contact-form" action="#">
                            <input name="name" type="text" placeholder="Name:" required autocomplete="off" />
                            <input name="email" type="email" placeholder="Email:" required autocomplete="off" />
                            <textarea name="message" placeholder="Message:" required rows="6"></textarea>
                            <input class="bt-submit" type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
                <div class="pt-50 pb-30">
					<div class="section-head">
						<h4>
							<span>Contact Information</span>
							Find me here                     
                        </h4>
					</div>
					<div class="sidebar-textbox row pb-50">
						<div class="contact-info d-flex col-md-4">
							<div class="w-25">
								<div class="contact-icon">
									<i class="fas fa-phone"></i>
								</div>
							</div>
							<div class="contact-text w-75">
								<h2>Phone</h2>
								<p>+91 9482498726</p>
							</div>
						</div>
						<div class="contact-info d-flex col-md-4">
							<div class="w-25">
								<div class="contact-icon">
									<i class="far fa-envelope-open"></i>
								</div>
							</div>
							<div class="contact-text w-75">
								<h2>Email</h2>
								<p>shamanthmuroor@gmail.com</p>
								<p>shamanthm3@gmail.com</p>
							</div>
						</div>
						<div class="contact-info d-flex col-md-4">
							<div class="w-25">
								<div class="contact-icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
							</div>
							<div class="contact-text w-75">
								<h2>Address</h2>
								<p>
									Vamanjoor, <br />
									Pilikula Road, <br />
									Mangaluru , Karnataka<br />
								</p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
        )
    }
}