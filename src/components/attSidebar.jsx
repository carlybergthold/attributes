import React, { Component } from "react";
import '../styles/sidebar.css'
import styleMethods from "../methods/styleMethods";

class AttributeSidebar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const activeEl = document.querySelector('.active');
    activeEl.style.color = styleMethods.getAttributeColor(this.props.attribute);
  }

  handleClick = (e) => {
    const elements = document.querySelectorAll('a');

    elements.forEach(el => {
      el.classList.remove("active");
      el.style.color = "black";
    });

    e.target.classList.add("active");
    e.target.style.color = styleMethods.getAttributeColor(this.props.attribute);
  }

  handleClickMobile = (e) => {
    this.handleClick(e);

    document.querySelector(".current").classList.add("hidden");
    document.querySelector(".current").classList.remove("current");

    const targetElId = e.target.href.split('#')[1];
    const targetEl = document.getElementById(targetElId);

    targetEl.classList.remove("hidden");
    targetEl.classList.add("current");
  }

  render() {
    return(
      <>
      {/* mobile */}
      <div className="is-hidden-tablet">
        <div className="tabs is-small">
          <ul>
            <li onClick={this.handleClickMobile}><a className="active" style={{color: styleMethods.getAttributeColor(this.props.attribute)}} href="#definitionMobile">Definition</a></li>
            <li onClick={this.handleClickMobile}><a href="#emotionMobile">My Emotion</a></li>
            <li onClick={this.handleClickMobile}><a href="#fearMobile">My Fear</a></li>
            <li onClick={this.handleClickMobile}><a href="#struggleMobile">My Struggle</a></li>
            <li onClick={this.handleClickMobile}><a href="#whoAmIMobile">Who is God?</a></li>
            <li onClick={this.handleClickMobile}><a href="#biblicalChristianityMobile">Who is Jesus?</a></li>
            <li onClick={this.handleClickMobile}><a href="#soWhatMobile">So What?</a></li>
            <li onClick={this.handleClickMobile}><a href="#prayerMobile">Prayer</a></li>
            <li onClick={this.handleClickMobile}><a href="#scienceAndHealthMobile">Science and Health</a></li>
            <li onClick={this.handleClickMobile}><a href="#liturgyMobile">Hymns and Rituals</a></li>
          </ul>
        </div>
      </div>

      {/* desktop */}
      <div className="is-hidden-mobile">
        <ul className="sidebar-ul">
            <span className="navbar-item" onClick={this.handleClick}>
              <a className="active" style={{color: styleMethods.getAttributeColor(this.props.attribute)}} href="#definition">Definition</a>
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
              <a href="#whoAmI">Who is God?</a>
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
              <a href="#liturgy">Hymns and Rituals</a>
            </span>
        </ul>
      </div>
      </>
    )
  }
}

export default AttributeSidebar;