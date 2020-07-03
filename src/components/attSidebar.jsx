import React, { Component } from "react";
import '../styles/sidebar.css'
import { withRouter, Link } from "react-router-dom"
import sidebarPopout from '../components/sidebarPopout'

class AttributeSidebar extends Component {

    render() {
      return(
            <>
            <section className="section1">
              <sidebarPopout beginning={0} end={8} />
            </section>
            {/* <section className="section2">
            {
              this.getList(8, 16)
            }
            </section>
            <section className="section3">
            {
              this.getList(16, 24)
            }
            </section>
            <section className="section4">
            {
              this.getList(24, 32)
            }
            </section> */}
        </>
      )
    }
}

export default AttributeSidebar;