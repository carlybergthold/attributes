import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/attribute.css'
import Sidebar from '../components/sidebar'
import attArray from '../data/attributeArray'
import AttributeDetail from '../modules/attributeDetail'
import girl from '../images/girl.png'

class Attribute extends Component {

    constructor(props){
        super(props);

        this.state = {
            attribute: 'Creative',
            attributeInfo: {}
        }
      }

    setAttribute = (e) => {
      this.setState({attribute: e.target.id});
      this.getAttributeInfo();
      // this.props.history.push(`/attributes/${this.state.attribute}`);
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
              <div className='page attributeFlexbox'>
              <Sidebar setAttribute={this.setAttribute} />
              <body className="attPage">
              <section className="section att-detail-header" id="header">
                <section><h1 className="title attHeader">{this.state.attribute}</h1></section>
                <img src={girl} className="att-image"></img>
              </section>
              <AttributeDetail attribute={this.state.attribute} attributeInfo={this.state.attributeInfo} />
            </body>
            </div>
          )
      }

}

export default withRouter(Attribute);