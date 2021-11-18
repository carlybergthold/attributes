import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import AttributeSidebar from "../../components/attSidebar";
import Hero from '../../components/hero'

class BaseAttributeDetail extends Component {

  componentDidMount() {
    document.querySelector(".navbar").scrollIntoView();
  }

    render() {
        return(
          <>
          <Hero title={this.props.title} subtitle={this.props.subtitle} />

          {/* mobile */}
          <div className="is-hidden-tablet">
              <AttributeSidebar attribute={this.props.title}/>
                <div className="attSection current" id="definitionMobile">
                  {this.props.definition}
                </div>
                <div className="attSection hidden" id="emotionMobile">
                  {this.props.emotion}
                </div>
                <div className="attSection hidden" id="fearMobile">
                  {this.props.fear}
                </div>
                <div className="attSection hidden" id="struggleMobile">
                  {this.props.struggle}
                </div>
                <div className="attSection hidden" id="whoAmIMobile">
                  {this.props.whoAmI}
                </div>
                <div className="attSection hidden" id="biblicalChristianityMobile">
                  {this.props.biblicalChristianity}
                </div>
                <div className="attSection hidden" id="soWhatMobile">
                  {this.props.soWhat}
                </div>
                <div className="attSection hidden" id="prayerMobile">
                  {this.props.prayer}
                </div>
                <div className="attSection hidden" id="scienceAndHealthMobile">
                  {this.props.scienceAndHealth}
                </div>
                <div className="attSection hidden" id="liturgyMobile">
                  {this.props.liturgy}
                </div>
          </div>

          {/* desktop */}
            <div className="is-hidden-mobile">

            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside className="has-background-grey-lighter">
                <section id="sidebar">
                  <AttributeSidebar attribute={this.props.title}/>
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
                <div className="attSection" id="liturgy">
                  {this.props.liturgy}
                </div>
              </main>
            </div>
          </div>
          </>
        )
    }

}

export default withRouter(BaseAttributeDetail);