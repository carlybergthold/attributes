import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/attribute.css'
import Sidebar2 from '../components/sidebar copy'
import attArray from '../data/attributeArray'
import AttributeDetail from '../modules/attributeDetail'
import girl from '../images/girl.png'

class Attribute extends Component {

    constructor(props){
        super(props);

        this.state = {
            attribute: this.props.location.state.attribute,
            attributeInfo: {}
        }
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    setAttribute = (e) => {
      this.setState({attribute: e.target.id});
      this.getAttributeInfo();
    }

    getAttributeInfo = () => {
      if (this.state.attribute)
      {
        let obj = attArray.find(a => a.attributeName == this.state.attribute);
        this.setState({attributeInfo: obj});
      }
    }

    render() {
        return(
            <div className='page'>
            <section className="section att-detail-header" id="header">
              <section>
                <h1 className="title attHeader">{this.state.attribute}</h1>
              </section>
              <img src={girl} className="att-image"></img>
            </section>
            <body className="attPage">
            <aside className="sidebar-aside sticky">
              <Sidebar2 />
            </aside>
            <main>
              <AttributeDetail attribute={this.state.attribute} attributeInfo={this.state.attributeInfo} />
            </main>
          </body>
          </div>
        )
    }

}

export default withRouter(Attribute);