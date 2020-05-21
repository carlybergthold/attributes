import React, { Component } from "react";
import '../styles/sidebar.css'

class PopupSidebar extends Component {

    render() {

      var visibility = { visibility: this.props.showHide };

      return(
        <section>
        <div className='sidebarVisible' style={visibility}>
          <ul className="sidebar-ul">
            <li className="sidebar-li">
              <a href="#definition">Definition</a>
            </li>
            <li className="sidebar-li">
              <a href="#notGod">Not God</a>
            </li>
            <li className="sidebar-li">
              <a href="#prayer">Prayer/Confession</a>
            </li>
            <li className="sidebar-li">
              <a href="#accept">Acceptance</a>
            </li>
            <li className="sidebar-li">
              <a href="#biblicalChristianity">Biblical Christianity</a>
            </li>
            <li className="sidebar-li">
              <a href="#scienceAndMath">Science and Math</a>
            </li>
            <li className="sidebar-li">
              <a href="#history">History</a>
            </li>
            <li className="sidebar-li">
              <a href="#liturgy">Liturgy</a>
            </li>
          </ul>
        </div>
      </section>
      )
    }
}

export default PopupSidebar;