import React, { Component } from "react";
import '../styles/sidebar.css'
import attArray from '../data/attributeArray'
import { withRouter, Link } from "react-router-dom"

class AttributeSidebar extends Component {

    render() {
      return(
        <div>
          <ul className="sidebar-ul">
            {
              attArray.map(att =>

                <div className="navbar-item has-dropdown is-hoverable sidebar-dropdown">
                <span className="navbar-link is-arrowless">
                  <Link to={`/attributes/${att.attributeName}`}>{att.attributeName}</Link>
                </span>

                <div className="navbar-dropdown">
                    <span className="navbar-item">
                      <a href="#definition">Definition</a>
                    </span>
                    <span className="navbar-item">
                      <a href="#history">History</a>
                    </span>
                    <span className="navbar-item">
                      <a href="#liturgy">Liturgy</a>
                    </span>
                    <span className="navbar-item">
                      <a href="#scienceAndHealth">Science and Health</a>
                    </span>
                </div>
                </div>
              )
            }
          </ul>
        </div>
      )
    }
}

export default AttributeSidebar;