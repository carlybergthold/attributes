import React, { Component } from "react";

class Sidebar2 extends Component {

    constructor(props){
      super(props);
    }

    componentDidMount() {
      console.log(this.props)
    }

    render() {
      return(
      <aside className="sidebar2">
        <h2>Explore This Attribute</h2>
        <div className="sticky">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <a href="#definition">Definition</a>
          </li>
          <li className="sidebar-li">
            <a href="#symbol">Symbol</a>
          </li>
          <li className="sidebar-li">
            <a href="#seenInJesus">Seen in Jesus</a>
          </li>
          <li className="sidebar-li">
            <a href="#seenInGospel">Seen in Gospel</a>
          </li>
          <li className="sidebar-li">
            <a href="#whoSaintsAre">Who Saints Are</a>
          </li>
          <li className="sidebar-li">
            <a href="#whoUnsavedAre">Who Unsaved Are</a>
          </li>
          <li className="sidebar-li">
            <a href="#display">How Displayed</a>
          </li>
          <li className="sidebar-li">
            <a href="#distinctives">Christian Distinctives</a>
          </li>
          <li className="sidebar-li">
            <a href="#reflections">Reflections in the World</a>
          </li>
        </ul>
        </div>
      </aside>
      )
    }
}

export default Sidebar2;