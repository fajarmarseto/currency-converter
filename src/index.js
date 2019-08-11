import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/Calculator.css';

/*
    This is ReactDom render() controls the contents of the container
*/
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);