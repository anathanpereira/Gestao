
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './Profile.css'
import DynamicSlides from "../Components/Slider";
import Connection from '../API/connect';


export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: {} };
	}
	callAPI() {
		fetch("http://localhost:9000/telaPrincipal/Profile")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: JSON.parse(res) }));

	}

	componentWillMount() {
		this.callAPI();
		
	}

	render() {
		return (

			<><div className="Profilepage">
				<div className="user_profile">
					<div className="img-holder">
						<img src={"." + this.state.apiResponse.img} alt="" id="profile-img" className="img" />
					</div>
					<h1 className="Username">{this.state.apiResponse.name}</h1>
				</div>

				<br></br>
				<DynamicSlides title={"Filmes Favoritos"} param={"fav"} stars={true}></DynamicSlides>
				<br></br>

			</div></>
		);
	}
}