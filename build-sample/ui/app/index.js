import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.scss';

class App extends Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

const CONTAINER = 'app';
let container = document.querySelector(CONTAINER);
ReactDOM.render(<App/>, container);