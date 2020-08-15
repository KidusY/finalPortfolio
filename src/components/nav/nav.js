import React from 'react';
import './nav-style.css';
import logo from '../../assets/Group 1@2x.png';
const Nav = () => (
	<div className="navBar">
    <div className="logo"> 
    <img src={logo} alt="logo" />
    <h1>Kidus Kinfe </h1>
    </div>

    <nav className="deskTopNav">
    <ul>
        <li>My Work</li>
        <li>My Services</li>
        <li>About Me</li>
        <div> Talk 2 Me </div>
    </ul>

    
    </nav>

    <nav className="moblieNav">
    <ul>
        <li>My Work <br/> <i className="material-icons">computer</i></li>
        <li>My Services <br/><i className="material-icons">settings</i></li>
        <li>About Me <br/><i className="material-icons">info_outline</i></li>
        
    </ul>
     </nav>
	

	</div>
);

export default Nav;
