import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

const Stars = props =>{
    let {stars} = props;

    if(stars){
        return <StarRatingComponent starCount={5} value={4} starColor={"black"} emptyStarColor={"gray"}/>;
    }  else return<p></p>;
}

export default Stars;




