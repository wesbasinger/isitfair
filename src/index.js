import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App';

ReactDOM.render(
    <Router basename="/life-isnt-fair">
        <App />
    </Router>
, document.getElementById('root'));
