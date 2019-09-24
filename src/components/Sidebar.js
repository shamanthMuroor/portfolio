import React, { Component } from 'react';
import { Email, Phone, Twitter, Instagram, LinkedIn } from '@material-ui/icons';

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
					<aside id="colorlib-aside" className="border js-fullheight">
						<div className="text-center">
							<div className="author-img" style={{ backgroundImage: 'url(images/dp.jpg)', backgroundPosition: 'top center' }} />
							<h1 id="colorlib-logo"><a href="index.html">Shamanth Muroor</a></h1>
							<span><Email /> shamanthmuroor@gmail.com</span><br />
							<span><Phone /> +91 9482498726</span>
						</div>
						<br />
						<br />
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="coyarn add @material-ui/corellapse">
								<ul>
									<li className="active"><a href="#home" data-nav-section="home">Home</a></li>
									<li><a href="#about" data-nav-section="about">About</a></li>
									<li><a href="#skills" data-nav-section="skills">Skills</a></li>
									<li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
									<li><a href="#contact" data-nav-section="contact">Contact</a></li>
								</ul>
							</div>
						</nav>
						<br />
						<nav id="colorlib-main-menu">
							<ul>
								<li><a href="https://twitter.com/shamanthmuroor" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
								<li><a href="https://www.instagram.com/shamanthmuroor/" target="_blank" rel="noopener noreferrer"><Instagram /></a></li>
								<li><a href="https://www.linkedin.com/in/shamanthmuroor/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a></li>
								<li><a href="https://github.com/shamanthMuroor" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
							</ul>
						</nav>
					</aside>
				</div>
			</div>
		)
	}
}