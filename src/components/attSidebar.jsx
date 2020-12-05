import React, { Component } from "react";
import '../styles/sidebar.css'

class AttributeSidebar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var elements = document.querySelectorAll('a');

    elements.forEach(el => {
      el.classList.remove("active");
    });

    e.target.classList.add("active");
  }

    render() {
      return(
        <div>
          <ul className="sidebar-ul">
              <span className="navbar-item active" onClick={this.handleClick}>
                <a href="#definition">Definition</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#emotion">My Emotion</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#fear">My Fear</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#struggle">My Struggle</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#whoAmI">Who is God??</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#biblicalChristianity">Who is Jesus?</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#soWhat">So What?</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#prayer">Prayer</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#scienceAndHealth">Science and Health</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#history">History</a>
              </span>
              <span className="navbar-item" onClick={this.handleClick}>
                <a href="#liturgy">Hymns and Rituals</a>
              </span>
          </ul>
        </div>
      )
    }
}

export default AttributeSidebar;