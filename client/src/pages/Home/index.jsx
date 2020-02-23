import React, { Component } from 'react';
import { Header } from '../../components';
import "./home.css";
<<<<<<< HEAD
import HomeNavs from '../../components/HomeNavs/index';
import LoginForm from '../LoginForm';
import { Navigations } from '../../components/Navigations'
import { GiMushroom } from "react-icons/gi"
=======

>>>>>>> c06b41f3b39b2202b11c9772903e26f5f9358d01
export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	render() {
<<<<<<< HEAD
		return (
			<div>
				<div className="homepagenav">
					<Navigations />
=======
		if (this.props.user) {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
				</div>
			)
		} else {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
>>>>>>> c06b41f3b39b2202b11c9772903e26f5f9358d01
				</div>
				<h1 className="homepagetitle"><GiMushroom size="100px"/>Mushroom</h1>
				<div className="tagline">
				<h3>A New Parent's Realiable Resource</h3>
				</div>
				<div className="footer">
					<div className="footer-copyright-home">
						<h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
						<br></br>
						<h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
					</div>
				</div>
			</div>
		)
	}
<<<<<<< HEAD
}
=======

}
>>>>>>> c06b41f3b39b2202b11c9772903e26f5f9358d01
