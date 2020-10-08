import React from 'react';
import Nav from './components/nav/nav';
import webDesign from './assets/webDesign.png';
import webResponsive from './assets/responsiveDesign.png';
import support from './assets/support.png';
import logo from './assets/Group 1@2x.png';
import linkedin from './assets/linkedin.png';
import gitHub from './assets/github.png';
import css from './assets/Css.png';
import bootstrap from './assets/bootstrap.png';
import html from './assets/Html.png';
import jquery from './assets/jQuery.png';
import reactIcon from './assets/react.png';
import javaScript from './assets/JavaScript.png';
import node from './assets/node.png';
import psql from './assets/psql.png';
import contact from './assets/undraw_Messaging_re_pgx8.png';
import emailjs from 'emailjs-com';
import $ from 'jquery';
import './App.css';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			emailSent: false
		};
	}
	scrollAnimation = (e) => {
		let hash = this.hash;
		//scrolls to the location of the sections
		$('html,body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			700
		);
		console.log('clicked');
	};
	handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('gmail', 'contactform', e.target, 'user_03mPtrgxknWJs8ftJTLxF').then(
			(result) => {
				if (result.text === 'OK') this.setState({ emailSent: true });
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};
	render() {
		return (
			<div className="App">
				<Nav />
				<div className="hero" id="home">
					<div className="heroText">I Design / Develop web apps and websites.</div>
					<div className="heroImg" />
				</div>
				<div className="Projects" id="projects">
					<h2> My Work </h2>
					<br />
					<center>
						<hr width="200" color="#EF512C" />
					</center>
					<div className="ProjectsContainer">
						<div className="project1 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>IB tracker</h3>
								<div className="projectLinkContainer">
									<a href="https://ib-tracker-client.kidusy.vercel.app/" target="_blank">
										<i className="material-icons ">ondemand_video</i> <span>Demo </span>
									</a>
									<a href="https://github.com/KidusY/IB-Tracker-Client.git" target="_blank">
										<i className="material-icons">code</i> <span>Repo</span>
									</a>
								</div>
								<p>
									This app allows a small bushiness to track their inventory, transactions and budgets.
									It also provides log history for mangers to control what their employees are doing.
									The app has the functionality to provide real time budget report.
								</p>
								<div className="iconContainer">
									<img src={html} alt="htmlIcon" />
									<img src={css} alt="cssIcon" />
									<img src={javaScript} alt="javaScriptIcon" />
									<img src={reactIcon} alt="reactIcon" />
									<img src={node} alt="nodeIcon" />
									<img src={psql} alt="psqlIcon" />
								</div>
							</div>
							<div className="projectImg" />
						</div>
						<div className="project2 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Official Movies</h3>
								<div className="projectLinkContainer">
									<a href="https://officalmovies.now.sh/" target="_blank">
										{' '}
										<i className="material-icons ">ondemand_video</i><span>Demo </span>
									</a>
									<a href="https://github.com/KidusY/offical_movies.git" target="_blank">
										{' '}
										<i className="material-icons">code</i> <span>Repo</span>
									</a>
								</div>
								<p>
									This app allows a user to search for movies and get Important information on that
									specific movie. The user also get the functionality of discovering current movies
									and upcoming movies. This app fetches data from an api and scraps the necessary info
									and renders it accordingly for the users.
								</p>
								<div className="iconContainer">
									<img src={html} alt="htmlIcon" />
									<img src={css} alt="cssIcon" />
									<img src={javaScript} alt="javaScriptIcon" />
									<img src={reactIcon} alt="reactIcon" />
									<img src={bootstrap} alt="bootstrapIcon" />
								</div>
							</div>
							<div className="projectImg" />
						</div>
						<div className="project6 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Cuisine Galore</h3>
								<div className="projectLinkContainer">
									<a
										href="https://kidusy.github.io/cuisinGalore/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="material-icons ">ondemand_video</i>
										<span>Demo</span>
									</a>
									<a
										href="https://github.com/KidusY/cuisinGalore.git"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="material-icons">code</i> <span>Repo</span>
									</a>
								</div>
								<p>
									This app allows a user to search restaurants of their liking in whatever area they
									would like to dine or discover a new restaurant from different categories of their
									choosing. This app is intended for all users that might be looking to either
									discover a restaurant in city or search for a specific restaurant within a city, The
									main purpose of this app is to utilize a restaurant api and create a user friendly
									experience by only using minimal building tools.
								</p>
								<div className="iconContainer">
									<img src={html} alt="htmlIcon" />
									<img src={css} alt="cssIcon" />
									<img src={javaScript} alt="javaScriptIcon" />
									<img src={jquery} alt="jqueryIcon" />
								</div>
							</div>
							<div className="projectImg" />
						</div>
						<div className="project7 project">
							<div className="description">
								<h3 style={{ textIndent: '10px', fontSize: '40px' }}>Quiz App</h3>
								<div className="projectLinkContainer">
									<a href="https://kidusy.github.io/Quiz-App/" target="_blank">
										<i className="material-icons ">ondemand_video</i> <span>Demo</span>
									</a>
									<a href="https://github.com/KidusY/Quiz-App.git" target="_blank">
										<i className="material-icons">code</i>
										<span>Repo</span>
									</a>
								</div>
								<p>
									This application challenges the users with sport trivia and mocks them as they lose.
									This app is suitable for all users; mainly seeking to gain a bit of knowledge while
									being entertained. <br />The purpose of this app is to show using only rudimentary
									building blocks and create a dynamic web app
								</p>
								<div className="iconContainer">
									<img src={html} alt="htmlIcon" />
									<img src={css} alt="cssIcon" />
									<img src={javaScript} alt="javaScriptIcon" />
									<img src={jquery} alt="jqueryIcon" />
								</div>
							</div>
							<div className="projectImg" />
						</div>
					</div>
				</div>
				<div className="Services" id="services">
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
							<h3>Responsive</h3>
							<h5 className="text-center">Experience both on desktop and mobile</h5>
						</div>
						<div className="service3 service">
							<img src={support} alt="support" />
							<h3>Support</h3>
							<h5 className="text-center">100% support after delivering product</h5>
						</div>
					</div>
				</div>
				<div className="aboutMe" id="aboutMe">
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
							Hello World, Kidus here!!!... and yes, I have used the "Hello World" phrase to signify that
							I know a lot about programming.
						</p>
						<br />
						<p>
							I am a motivated Web developer, I spend most of my day playing with HTML, CSS, and
							JavaScript. And if I am not playing with them, I tend to wander off day dreaming about how
							to create the perfect website.
						</p>
						<br />
						<p>
							{' '}
							I love to play around with different web designs and come up with eccentric ideas. I use
							Adobe XD to help make those ideas into an actual design. I also play well with others.I
							believe that to have a great product, developers need to come together and collaborate on
							projects. I look forward to working with great developer on different projects.
						</p>
					</div>
					<div className="aboutMeImg" />
				</div>
				<div className="contact" id="contact">
					<div className="contactContainer">
						<div className="contactDescription">
							<h2>Talk 2 Me </h2>
							<br />
							<center>
								<hr width="200" color="#EF512C" />
							</center>
							<p>
								{' '}
								It doesn't matter if its a small project or you want to hire me full time, don't be shy
								shoot me an email at <a href="mailto:kidusyilma@gmail.com">kidusyilma@gmail.com </a>
								or better yet, fill out the contact form.
							</p>

							<svg
								id="b24dc7aa-765f-45e8-b508-f667349465ff"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								width="730.37175"
								height="609.06"
								viewBox="0 0 730.37175 609.06"
							>
								<path
									d="M600.5537,276.255a69.19922,69.19922,0,0,1-16.47968,8.71058c-1.51885.56957-3.06032,1.09358-4.60958,1.56442h-68.6976c-.29628-.524-.59256-1.04041-.88847-1.56442-5.93894-10.56358-11.37618-21.54489-12.895-33.49064-1.78472-14.04937,3.21977-29.95935,15.59084-36.86255a25.19517,25.19517,0,0,1,5.11871-2.14914c.73644-.22026,1.48844-.40251,2.24787-.562A26.7438,26.7438,0,0,1,551.039,246.66776c10.48771-10.75349,8.52834-28.18987,4.91365-42.76325-3.62248-14.581-8.01179-30.79469-.6378-43.88723,4.093-7.28286,11.30016-11.80905,19.38018-13.62405.25067-.05316.50134-.10633.7446-.15949A39.07636,39.07636,0,0,1,603.485,151.1472c15.45439,9.74344,23.398,28.21268,25.9725,46.3098C633.61133,226.57335,624.42258,259.06159,600.5537,276.255Z"
									transform="translate(-234.81412 -145.47)"
									fill="#f2f2f2"
								/>
								<path
									d="M525.53782,221.17384a60.192,60.192,0,0,1,5.19435,37.43967,61.73613,61.73613,0,0,1-11.87752,26.35207c-.41012.524-.82766,1.048-1.26077,1.56442h-2.84006c.45573-.51641.90368-1.03281,1.33642-1.56442A58.737,58.737,0,0,0,528.735,237.78247a59.3302,59.3302,0,0,0-11.04208-25.31922c.73644-.22026,1.48844-.40251,2.24787-.562A61.01839,61.01839,0,0,1,525.53782,221.17384Z"
									transform="translate(-234.81412 -145.47)"
									fill="#fff"
								/>
								<path
									d="M593.77969,229.58829a66.41652,66.41652,0,0,1-4.57955,18.697,57.74447,57.74447,0,0,1-8.94587,14.61134,73.80788,73.80788,0,0,1-28.35683,20.44372c-1.3746.57717-2.77219,1.124-4.16942,1.62518q-2.32389.843-4.67818,1.56442h-8.45973c2.07321-.46324,4.12344-.97964,6.15884-1.56442a90.244,90.244,0,0,0,14.62635-5.55139,68.72323,68.72323,0,0,0,25.72962-21.112c7.20676-9.9409,10.3887-21.90186,10.92787-34.06027A143.506,143.506,0,0,0,587.955,185.329a163.12268,163.12268,0,0,0-13.72305-37.3865,1.17409,1.17409,0,0,1,.46314-1.54922.98642.98642,0,0,1,.7446-.15949.904.904,0,0,1,.577.4936c.752,1.46573,1.48845,2.93142,2.19484,4.4123a165.47356,165.47356,0,0,1,12.93286,38.79143C593.74928,202.87171,595.1465,216.40463,593.77969,229.58829Z"
									transform="translate(-234.81412 -145.47)"
									fill="#fff"
								/>
								<circle cx="529.35659" cy="247.0762" r="28" fill="#2f2e41" />
								<polygon
									points="522.715 596.582 510.456 596.581 504.623 549.293 522.718 549.294 522.715 596.582"
									fill="#a0616a"
								/>
								<path
									d="M760.65608,753.93567l-39.53052-.00146v-.5A15.38605,15.38605,0,0,1,736.512,738.048h.001l24.1438.001Z"
									transform="translate(-234.81412 -145.47)"
									fill="#2f2e41"
								/>
								<polygon
									points="605.288 586.134 593.602 589.84 573.747 546.527 590.995 541.058 605.288 586.134"
									fill="#a0616a"
								/>
								<path
									d="M846.67523,741.98707l-37.68146,11.9486-.15115-.4766A15.38605,15.38605,0,0,1,818.858,734.1414l.00094-.00029,23.01448-7.29769Z"
									transform="translate(-234.81412 -145.47)"
									fill="#2f2e41"
								/>
								<path
									d="M756.5064,729.5462H746.0191a4.49525,4.49525,0,0,1-4.42969-3.708L716.58917,555.0257l74.45556,2.5332,47.88184,156.85937a4.49873,4.49873,0,0,1-3.74829,5.65918l-13.51538,5.12012a4.47353,4.47353,0,0,1-4.64258-2.65137l-58.55542-132.665a1.5,1.5,0,0,0-2.87109.665l5.40893,134.31836a4.50059,4.50059,0,0,1-4.49634,4.68164Z"
									transform="translate(-234.81412 -145.47)"
									fill="#2f2e41"
								/>
								<circle cx="529.85265" cy="254.34392" r="24.56103" fill="#a0616a" />
								<path
									d="M761.37774,574.60968c-12.70483.001-27.97754-3.209-44.366-13.45605a4.51635,4.51635,0,0,1-1.92211-5.15625L731.17047,503.972,730.97,461.638a32.22248,32.22248,0,0,1,24.94751-28.47949c.2915-.06738.58545-.13184.88232-.19629a31.4257,31.4257,0,0,1,28.27246,7.76953,32.43994,32.43994,0,0,1,10.15283,28.10059l-4.05151,62.18652,5.49683,31.14941a4.46714,4.46714,0,0,1-2.3523,4.77344A73.36316,73.36316,0,0,1,761.37774,574.60968Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ef512c"
								/>
								<path
									d="M743.288,524.84232a10.5264,10.5264,0,0,0-1.55971-.5609l-15.73753-47.03,7.96861-9.03636-12.06564-13.80848-15.66149,14.62616a8,8,0,0,0-1.68093,9.45275l25.4316,50.36494a10.4971,10.4971,0,1,0,13.30509-4.00812Z"
									transform="translate(-234.81412 -145.47)"
									fill="#a0616a"
								/>
								<path
									d="M725.12632,475.61046l-14.87111-17.18694a4.5,4.5,0,0,1,.9888-6.742l19.1226-12.15494a12.49741,12.49741,0,0,1,16.29913,18.94927l-14.7253,17.12508a4.5,4.5,0,0,1-6.81412.00952Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ef512c"
								/>
								<path
									d="M735.15187,376.33915a16.203,16.203,0,0,0-5.00438,4.32068c-1.18875,1.82462-1.43077,4.36376.05421,5.98972,1.75535,1.922,4.92889,1.78913,7.62106,1.49242l27.35975-3.01538-10.77084,7.6,25.89465-2.58343c4.52467-.45141,9.73948-1.308,11.94456-5.01126,2.58718-4.345-.70561-9.73921-4.64109-13.096A40.34413,40.34413,0,0,0,759.1661,362.822a39.52545,39.52545,0,0,0-26.73088,12.91076Z"
									transform="translate(-234.81412 -145.47)"
									fill="#2f2e41"
								/>
								<path
									id="a7917ce3-4960-44d0-ba8e-200483b3d545"
									data-name="Path 22"
									d="M762.52494,507.62069h-.30229v-8.2813a4.7932,4.7932,0,0,0-4.79319-4.79319H739.88381a4.79319,4.79319,0,0,0-4.79318,4.79319V544.772a4.79319,4.79319,0,0,0,4.79318,4.79319h17.54565a4.79319,4.79319,0,0,0,4.79311-4.79319V513.51548h.30229Z"
									transform="translate(-234.81412 -145.47)"
									fill="#3f3d56"
								/>
								<circle cx="513.35659" cy="364.0762" r="4" fill="#fff" />
								<path
									d="M752.04146,520.68315a10.526,10.526,0,0,1,1.6294.30392l37.34154-32.63584-2.31159-11.82418,17.38881-5.82094,6.12646,20.53469a8,8,0,0,1-3.325,9.0069L761.49874,530.864a10.4971,10.4971,0,1,1-9.45728-10.18087Z"
									transform="translate(-234.81412 -145.47)"
									fill="#a0616a"
								/>
								<path
									d="M788.85921,486.99167a4.49518,4.49518,0,0,1-2.14746-3.07065l-4.05606-22.21826a12.49741,12.49741,0,0,1,23.63948-8.1186l10.36188,20.15063a4.5,4.5,0,0,1-2.55282,6.31786l-21.51675,7.31917A4.495,4.495,0,0,1,788.85921,486.99167Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ef512c"
								/>
								<path
									d="M607.91422,421.88H434.52409a16,16,0,0,0,0,32h155.54L602.7443,473.37a3.03183,3.03183,0,0,0,2.56006,1.42,3.17666,3.17666,0,0,0,.90967-.13,3.04312,3.04312,0,0,0,2.22021-2.97V453.87a15.99924,15.99924,0,0,0-.52-31.99006Zm0,29.94h-1.5498v19.87a1.02572,1.02572,0,0,1-1.89014.56L591.1945,451.82H434.52409a13.935,13.935,0,0,1,0-27.87H607.91422a13.935,13.935,0,1,1,0,27.87Z"
									transform="translate(-234.81412 -145.47)"
									fill="#3f3d56"
								/>
								<path
									d="M531.5441,353.77h-280.73a15.995,15.995,0,1,0,0,31.99h2.58008V404.6a3.03726,3.03726,0,0,0,2.21,2.97,3.29611,3.29611,0,0,0,.91993.13,3.022,3.022,0,0,0,2.56-1.41L272.424,385.76H531.5441a15.995,15.995,0,0,0,0-31.99Zm0,29.93H271.30436l-13.9502,21.46a1.03258,1.03258,0,0,1-1.8999-.56V383.7h-4.64014a13.935,13.935,0,1,1,0-27.87h280.73a13.935,13.935,0,0,1,0,27.87Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ccc"
								/>
								<path
									d="M424.20426,217.53H250.81412a15.995,15.995,0,1,0,0,31.99h2.58008v18.84a3.03726,3.03726,0,0,0,2.21,2.97,3.31555,3.31555,0,0,0,.91993.14,3.03182,3.03182,0,0,0,2.56-1.42L272.424,249.52H424.20426a15.995,15.995,0,1,0,0-31.99Zm0,29.93H271.30436l-13.9502,21.47a1.03642,1.03642,0,0,1-1.8999-.57v-20.9h-4.64014a13.935,13.935,0,1,1,0-27.87H424.20426a13.935,13.935,0,0,1,0,27.87Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ccc"
								/>
								<path
									d="M607.91422,285.65h-242.54a15.995,15.995,0,1,0,0,31.99H586.0441l16.7002,25.69a3.03169,3.03169,0,0,0,2.56006,1.42,3.192,3.192,0,0,0,.90967-.13995,3.03457,3.03457,0,0,0,2.22021-2.97v-24a15.99921,15.99921,0,0,0-.52-31.99Zm0,29.93h-1.5498v26.06a.99017.99017,0,0,1-.73.99,1.00734,1.00734,0,0,1-1.16016-.42l-17.31006-26.63h-221.79a13.935,13.935,0,0,1,0-27.87h242.54a13.935,13.935,0,1,1,0,27.87Z"
									transform="translate(-234.81412 -145.47)"
									fill="#3f3d56"
								/>
								<circle cx="204.3551" cy="292.92832" r="8.25676" fill="#ef512c" />
								<circle cx="229.12538" cy="292.92832" r="8.25676" fill="#ef512c" />
								<circle cx="253.89566" cy="292.92832" r="8.25676" fill="#ef512c" />
								<path
									d="M504.0441,365.68h-225.73a4.23155,4.23155,0,0,0-4.23,4.23v.74a4.23155,4.23155,0,0,0,4.23,4.23h225.73a4.23783,4.23783,0,0,0,4.23-4.23v-.74A4.23783,4.23783,0,0,0,504.0441,365.68Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ccc"
								/>
								<path
									d="M416.83414,228.41H258.18424a4.23786,4.23786,0,0,0-4.23,4.23v.74a4.23788,4.23788,0,0,0,4.23,4.23005h158.6499a4.23788,4.23788,0,0,0,4.23-4.23005v-.74A4.23786,4.23786,0,0,0,416.83414,228.41Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ccc"
								/>
								<path
									d="M565.97428,297.56H407.32438a4.23782,4.23782,0,0,0-4.23,4.23v.74a4.23782,4.23782,0,0,0,4.23,4.23h158.6499a4.22948,4.22948,0,0,0,4.22022-4.23v-.74A4.22948,4.22948,0,0,0,565.97428,297.56Z"
									transform="translate(-234.81412 -145.47)"
									fill="#ef512c"
								/>
								<path
									d="M964.18588,754.53h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
									transform="translate(-234.81412 -145.47)"
									fill="#3f3d56"
								/>
							</svg>
						</div>
						<form onSubmit={this.handleSubmit} className="contact_form_class">
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
					{this.state.emailSent ? (
						<div className="emailConfirmation">
							<h3> Thanks for reaching out, I will contact you in a moment </h3>
							<button onClick={() => this.setState({ emailSent: false })}> Done</button>
						</div>
					) : (
						<div />
					)}
				</div>
				<footer>
					<img src={logo} alt="logo" />
					<h2> Kidus Kinfe </h2>
					<h5>San Diego,CA </h5>
					<h5>(619) 745 0312</h5>
					<div className="links">
						<a href="linkedin.com/in/kidus-kinfe-5b7a37199" target="_blank" rel="noopener noreferrer">
							<img src={linkedin} alt="linkedin" />
						</a>
						<a href="https://github.com/KidusY" target="_blank" rel="noopener noreferrer">
							<img src={gitHub} alt="linkedin" />
						</a>
					</div>
				</footer>
			</div>
		);
	}
}
export default App;
