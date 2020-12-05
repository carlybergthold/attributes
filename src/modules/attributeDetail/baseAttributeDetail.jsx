import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import AttributeSidebar from "../../components/attSidebar";
import Hero from '../../components/hero'

class BaseAttributeDetail extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <div>
            <Hero title={this.props.title} subtitle={this.props.subtitle} img="girl.png" />

            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside className="has-background-grey-lighter">
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
              <div className="attSection" id="definition">
                  {this.props.definition}
                </div>
                <div className="attSection" id="emotion">
                  {this.props.emotion}
                </div>
                <div className="attSection" id="fear">
                  {this.props.fear}
                </div>
                <div className="attSection" id="struggle">
                  {this.props.struggle}
                </div>
                <div className="attSection" id="whoAmI">
                  {this.props.whoAmI}
                </div>
                <div className="attSection" id="biblicalChristianity">
                  {this.props.biblicalChristianity}
                </div>
                <div className="attSection" id="soWhat">
                  {this.props.soWhat}
                </div>
                <div className="attSection" id="prayer">
                  {this.props.prayer}
                </div>
                <div className="attSection" id="scienceAndHealth">
                  {this.props.scienceAndHealth}
                </div>
                {/* <div className="attSection" id="history">
                  {this.props.history}
                </div> */}
                <div className="attSection" id="liturgy">
                  {this.props.liturgy}
                </div>
              </main>
            </div>
          </div>
        )
    }

}

export default withRouter(BaseAttributeDetail);