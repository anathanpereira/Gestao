import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './Slider.css'
import axios from 'axios';
import Stars from './Star'
export default class DynamicSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
    };
    this.click = this.click.bind(this);
  }
  callAPI() {
		axios.put("http://localhost:9000/telaPrincipal", {op : this.props.param}).then(res => {
      const movies = res.data;
      this.setState({slides: movies});
    })

	}

	componentWillMount() {
		this.callAPI();
	}


  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 18 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    let op = this.props.stars;
   

    return (
      <div>
         
        <h2 align="left" >{this.props.title}</h2>
        <hr class="divisor"></hr>
        <Slider {...settings}>
          {this.state.slides.map(function(slide) {
            return (
              <div class="container">
                <div key={slide} align="center" >
                  <div class="img">
                      
                      <img src={slide.img} class="poster" />
                      <b>{slide.title}</b><br />
                      <Stars stars={op}></Stars>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
