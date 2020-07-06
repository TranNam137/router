import React, { Component } from 'react';
import {  BrowserRouter as Router, Route,  NavLink, Link} from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<div>
					<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
					  <div className="container">
					    <a className="navbar-brand js-scroll-trigger" href = "/">Trang Chủ</a>
					    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					      Menu
					      <i className="fas fa-bars" />
					    </button>
					    <div className="collapse navbar-collapse" id="navbarResponsive">
					      <ul className="navbar-nav ml-auto">
					        <li>
				            <NavLink activeClassName="at_nav" to="/home">Home</NavLink>
				            </li>
				            <li>
				              <NavLink activeClassName="at_nav" to="/tin">Tin Tức</NavLink>
				            </li>
				            <li>
				              <NavLink activeClassName="at_nav" to="/lien-he">Liên Hệ</NavLink>
				            </li>
					      </ul>
					    </div>
					  </div>
					</nav>
			</div>
		);
	}
}

export default Nav;
