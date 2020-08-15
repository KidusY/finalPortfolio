import React from 'react';
import Nav from './components/nav/nav';
import webDesign from './assets/webDesign.png';
import webResponsive from './assets/responsiveDesign.png';
import support from './assets/support.png';
import logo from './assets/Group 1@2x.png';
import linkedin from './assets/linkedin.png';
import gitHub from './assets/github.png';
import emailjs from 'emailjs-com';

import './App.css';

class App extends React.Component {
	constructor(){
		super();
		this.state={

		}
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		emailjs.sendForm('gmail', 'contactform', e.target, 'user_03mPtrgxknWJs8ftJTLxF')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset();
	}

	render(){
		return (
			<div className="App">
				<Nav />
				<div className="hero" id="#home">
					<div className="heroText">I Design and Develop web apps and websites.</div>
					<div className="heroImg" />
				</div>
	
				<div className="Projects" id="#projects">
					<h2> My Work </h2>
					<br />
					<center>
						<hr width="200" color="#EF512C" />
					</center>
					<div className="ProjectsContainer">
						<div className="project1 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>IB tracker</h3>
								<i className="material-icons ">ondemand_video</i>Demo
								<i className="material-icons">code</i>Repo
								<p>
									This app allows a user to search restaurants of their liking in whatever area they would
									like to dine or discover a new restaurant from different categories of their choosing.
									This app is intended for all users that might be looking to either discover a restaurant
									in city or search for a specific restaurant within a city, The main purpose of this app
									is to utilize a restaurant api and create a user friendly experience by only using
									minimal building tools.
								</p>
							</div>
	
							<div className="projectImg" />
						</div>
						<div className="project2 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Official Movies</h3>
								<i className="material-icons ">ondemand_video</i>Demo
								<i className="material-icons">code</i>Repo
								<p>
									This app allows a user to search restaurants of their liking in whatever area they would
									like to dine or discover a new restaurant from different categories of their choosing.
									This app is intended for all users that might be looking to either discover a restaurant
									in city or search for a specific restaurant within a city, The main purpose of this app
									is to utilize a restaurant api and create a user friendly experience by only using
									minimal building tools.
								</p>
							</div>
	
							<div className="projectImg" />
						</div>
	
						<div className="project6 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Cuisine Galore</h3>
								<i className="material-icons ">ondemand_video</i>Demo
								<i className="material-icons">code</i>Repo
								<p>
									This app allows a user to search restaurants of their liking in whatever area they would
									like to dine or discover a new restaurant from different categories of their choosing.
									This app is intended for all users that might be looking to either discover a restaurant
									in city or search for a specific restaurant within a city, The main purpose of this app
									is to utilize a restaurant api and create a user friendly experience by only using
									minimal building tools.
								</p>
							</div>
	
							<div className="projectImg" />
						</div>
						<div className="project7 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Quiz App</h3>
								<i className="material-icons ">ondemand_video</i>Demo
								<i className="material-icons">code</i>Repo
								<p>
									This application challenges the users with sport trivia and mocks them as they lose.
									This app is suitable for all users; mainly seeking to gain a bit of knowledge while
									being entertained. <br />The purpose of this app is to show using only rudimentary
									building blocks and create a dynamic web app
								</p>
							</div>
	
							<div className="projectImg" />
						</div>
					</div>
				</div>
	
				<div className="Services" id="#services">
					<h2>My Services </h2>
					<br />
					<center>
						<hr width="200" color="#EF512C" />
					</center>
	
					<div className="servicesContainer">
						<div className="service1 service">
							<img src={webDesign} alt="webdesign" />
							<h3>Web Design </h3>
							<h5 className="text-center">Modern and attractive designs only </h5>
						</div>
						<div className="service2 service">
							<img src={webResponsive} alt="webResponsive" />
							<h3>Responsiveness</h3>
							<h5 className="text-center">Experience both on desktop and mobile</h5>
						</div>
						<div className="service3 service">
							<img src={support} alt="support" />
							<h3>Support</h3>
							<h5 className="text-center">100% support after delivering product</h5>
						</div>
					</div>
				</div>
	
				<div className="aboutMe" id="#aboutMe">
					<div className="aboutMeDescription">
						<h2>Get To Know Me </h2>
						<br />
						<center>
							<hr width="200" color="white" />
						</center>
						<br />
						<br />
						<p>
							{' '}
							Hello World, Kidus here!!!... and yes, I have used the "Hello World" phrase to signify that I
							know a lot about programming.
						</p>
						<br />
						<p>
							I am a motivated Web developer, I spend most of my day playing with HTML, CSS, and JavaScript.
							And if I am not playing with them, I tend to wander off day dreaming about how to create the
							perfect website.
						</p>
						<br />
						<p>
							{' '}
							I love to play around with different web designs and come up with eccentric ideas. I use Adobe
							XD to help make those ideas into an actual design. I also play well with others.I believe that
							to have a great product, developers need to come together and collaborate on projects. I look
							forward to working with great developer on different projects.
						</p>
					</div>
					<div className="aboutMeImg" />
				</div>
	
				<div className="contact" id="#contact">
					<h2>Talk 2 Me </h2>
					<br />
					<center>
						<hr width="200" color="#EF512C" />
					</center>
	
					<p>
						{' '}
						It doesn't matter if its a small project or you want to hire me full time, do be shy shoot me an
						email at <a href="mailto:kidusyilma@gmail.com">kidusyilma@gmail.com </a>
						or better yet, fill out the contact form{' '}
					</p>
	
					<form onSubmit={this.handleSubmit} className="contact_form_class" >
						<label htmlFor="name">Name</label>
						<input id="name" name="name" />
	
						<div className="container">
							<div className="email">
								<label htmlFor="email">Email</label>
								<input id="email" name="email" />
							</div>
							<div className="phone">
								<label htmlFor="phone">Phone</label>
								<input id="phone" name="phone" />
							</div>
						</div>
	
						<label htmlFor="message">Message</label>
						<textarea style={{ resize: 'none' }} id="message" name="message" />
	
						<button type="submit">Send</button>
					</form>
				</div>
	
				<footer>
					<img src={logo} alt="logo" />
	
					<h2> Kidus Kinfe </h2>
					<h5>San Diego,CA </h5>
					<h5>(619) 745 0312</h5>
					<div className="links">
						<img src={linkedin} alt="linkedin" />
						<img src={gitHub} alt="linkedin" />
					</div>
				</footer>
			</div>
		);
	}
	
}

export default App;
