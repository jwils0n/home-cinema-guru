import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import 'bootstrap';
import './../scss/base.scss';

ReactDOM.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>,
    document.getElementById('react-root')
);
