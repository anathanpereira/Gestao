
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './Login.css'
import Connection from '../API/connect';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));

    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (

            <><div className="LoginPage">
                <div class="container_login">
                    <h3>LOGIN</h3>
                    <div class="Dados">
                        <label for="email">Usuário</label>
                        <input type="email"  />
                        <label for="password">Senha</label>
                        <input type="password"  />
                        <button id="entrar" type="submit">Entrar</button>
                    </div>
                </div>

            </div></>
        );
    }
}