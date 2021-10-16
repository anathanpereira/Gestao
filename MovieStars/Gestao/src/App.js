import './App.css';
import React , { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import Homepage from'./Pages/Home.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse:""};
}
callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));

}

componentWillMount(){
    this.callAPI();
} 



  render() { return(

  
   <div className="App">
    <header>
    <Navbar className="color-nav" fixed="top">
    
      <Container >
     
      <img src="../logo.jpeg" style={{ height:'40px'}} ></img>
      <div class="vl"></div>
        <Navbar.Brand href="./">
         <b>MovieStars</b>
          </Navbar.Brand>
      
          <div align="right">

          </div>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        </Container>

        <div style={{ paddingRight: '5px' }}> <input type="search" class="form-control rounded warning" placeholder="Pesquisar" /></div>
        <div style={{ paddingRight: '2% '}}> <NavLink href="/profile"><img class= "profile"src={"." + this.state.apiResponse}/></NavLink></div>
      </Navbar >
      </header>
      </div>
      )

 
  }
}

