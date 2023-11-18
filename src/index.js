import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AttributeApp';
import { BrowserRouter as Router } from "react-router-dom";
import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";

const Routing = () => {
    elementScrollIntoViewPolyfill();

    return(
        <Router>
            <App />
        </Router>
    )
  }

ReactDOM.render(<Routing />, document.getElementById("root"));
