    
    import React, { Component } from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { Container } from "react-bootstrap";
    import './Home.css'
    import DynamicSlides from "../Components/Slider";
    import Connection from '../API/connect';
    
    
    export default class HomePage extends Component {



      render() {return(
            <div className="Homepage">
            <br></br>
            <DynamicSlides title = {"Recentes"} param = {"new"}></DynamicSlides>
            <br></br>

            <DynamicSlides title = {"Ação"} param = {28} ></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Drama"} param = {18}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Comédia"} param = {35}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Romance"} param = {10749}></DynamicSlides>
            
            <br></br>
            <DynamicSlides title = {"Terror"} param = {27}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Animação"} param = {16}></DynamicSlides>

            <br></br>
            <DynamicSlides title = {"Documentário"} param = {99}></DynamicSlides>
            </div>
      );
      }
}