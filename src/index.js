import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from './components/nav.jsx'

ReactDOM.render(
    <Router>
      <TopNav />
      <App />
    </Router>,

    document.getElementById("root")
);