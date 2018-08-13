import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import  './scss/application.scss';
import  './scss/bootswatch.min.css';

render(
    <App />,
    document.getElementById('root')
);