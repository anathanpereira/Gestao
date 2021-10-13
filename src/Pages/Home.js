    
    import React, { Component } from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { Container } from "react-bootstrap";
    import './Home.css'
    import DynamicSlides from "../Componets/Slider";
    
    
    function HomePage() {
      return(
            <div className="Homepage">
            <br></br>
            <DynamicSlides title = {"Recentes"}></DynamicSlides>
            <br></br>

            <DynamicSlides title = {"Ação"}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Drama"}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Terror"}></DynamicSlides>
            </div>
      );
      } export default HomePage;