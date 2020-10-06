import React from 'react';
import './nav-style.css';
import { Link } from 'react-scroll';
import logo from '../../assets/Group 1@2x.png';
const Nav = () => (
	<div className="navBar">
		<Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
			<div className="logo">
				<img src={logo} alt="logo" />
				<h1>Kidus Kinfe </h1>
			</div>
		</Link>

		<nav className="deskTopNav">
			<ul>
				<Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
					<li>My Work</li>
				</Link>

				<Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
					<li>My Services</li>
				</Link>

				<Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
					<li>About Me</li>
				</Link>

				<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
					<div> Talk 2 Me </div>
				</Link>
			</ul>
		</nav>

		<nav className="moblieNav">
			<ul>
				<Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
					<li>
						
						My Work <br /> <i className="material-icons">computer</i>{' '}
					</li>
				</Link>

				<Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
					<li>
				Services <br/><i className="material-icons">settings</i>
					</li>
				</Link>

				<Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
					<li>
					
						About Me <br />
						<i className="material-icons">info_outline</i>{' '}
					</li>
				</Link>
			</ul>
		</nav>
	</div>
);

export default Nav;
