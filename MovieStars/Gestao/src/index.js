import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profile'
import LoginPage from './Pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/profile/" component={ProfilePage} />
      <Route path="/login/" component={LoginPage} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
