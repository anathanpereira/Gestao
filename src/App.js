import './App.css';
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import Homepage from'./Pages/Home.js'


function App() {
  return (
   <div className="App">
    <header>
    <Navbar className="color-nav" fixed="top">
    
      <Container >
     
      <img src="./logo.jpeg" style={{ height:'40px'}} ></img>
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
        <div style={{ paddingRight: '2%' }}> <NavLink href="/profile"><img class= "profile"src="./Profile/1.jpg"/></NavLink></div>
      </Navbar >
      </header>

    </div>
  );
}

export default App;
