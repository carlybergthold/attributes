import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/attribute.css'
import Sidebar from '../components/sidebar'
import attArray from '../data/attributeArray'

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
              <Sidebar setAttribute={this.setAttribute}/>
              <body className="attPage">
              <section className="section" id="header">
                <h1 className="title attHeader">{this.state.attribute}</h1>
                <h2 className="subtitle">{this.state.attributeInfo ? this.state.attributeInfo.description : ''}</h2>
              </section>
              <section className="section">
                <div className="container">
                  <h1 className="title">How we are NOT God</h1>
                  <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                  </h2>
                  <p>God alone can create something from absolutely nothing.  He is the Creator of us and of all things.  We are His creation and He gives us our creative abilities. When we make more of our creations or ourselves than we do of God, The Creator, we take glory from Him that He deserves.
                  </p>
                  <p>"Through him all things were made, without him nothing was made that has been made." - John 1:3

                  "They exchanged the truth about God for a lie, and worshiped and served created things rather than the Creator--who is forever praised. Amen. - Rom 1:25
                  </p>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <h1 className="title">How we can accept and glorify God more</h1>
                  <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                  </h2>
                  <p>Consider how others have contributed to who you are and what you have. In humility, give credit to others where it is due. As the ultimate Creator, God alone deserves unique glory.

                  "So, whether you eat or drink, or whatever you do, do all to the glory of God." - 1 Cor 10:31</p>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <h1 className="title">What is Biblical Christianity?</h1>
                  <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                  </h2>
                  <p>Salvation provided by Jesus’ work on the cross creates within believers something completely new.  The Holy Spirit brings a new perspective to life, a new understanding of circumstances, and a new value for our Creator God.

                  "Therefore, if anyone is in Christ, he is a new creation…" - 2 Cor 5:17
                  </p>
                </div>
              </section>
            </body>
            </div>
          )
      }

}

export default withRouter(Attribute);