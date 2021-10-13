import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './Slider.css'

export default class DynamicSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['./Movies/871812.jpg','./Movies/870932.jpg', './Movies/866127.jpg', './Movies/866408.jpg', './Movies/869149.jpg', './Movies/869617.jpg', './Movies/869250.jpg']
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 9 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4 
    };
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
                      
                      <img src={slide} class="poster" />
                      
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
