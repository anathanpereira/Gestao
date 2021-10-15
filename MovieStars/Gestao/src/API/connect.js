import React from 'react';

export default class Connection extends React.Component {
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
    

}