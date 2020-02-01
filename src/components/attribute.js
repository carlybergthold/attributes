import React, { Component } from "react";
import fire from '../config/fire'
import attributeArray from '../modules/attributeArray'
import './attributePage.css'
import userMethods from "../modules/userMethods";
import Sidebar from './sidebar'

class Attribute extends Component {

    constructor(props){
        super(props);

        this.state = {
            attribute: '',
            description: '',
            seenInJesus: '',
            symbol: '',
            whoSaintsAre: '',
            whoUnsavedAre: ''
        }
      }

      getAttData = (attribute) => {
        let ref = fire.database().ref(`/attributeList/${attribute}`);
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({attribute: attribute,
                         description: state.attDescription,
                         seenInJesus: state.seenInJesus,
                         symbol: state.symbol,
                         whoSaintsAre: state.whoSaintsAre,
                         whoUnsavedAre: state.whoUnsavedAre});
        });
    }

      render() {
          return(
              <>
              <body className="attPage">
              <div className="container">

              <button onClick={userMethods.addAtts}>add atts</button>
              <div className="attributeNav">
            {
            attributeArray
            .map(att => <span key={att.attributeName}
            onClick={() => this.getAttData(att.attributeName)}>{att.attributeName}</span> )
            }
            </div>
                <h1>attribute page</h1>
                <h2>{this.state.attribute}</h2>
                <p>{this.state.description}</p>
                <p>{this.state.seenInJesus}</p>
                <p>{this.state.symbol}</p>
                <p>{this.state.whoSaintsAre}</p>
                <p>{this.state.whoUnsavedAre}</p>
            </div>
            <section className="section">
              <div className="container">
                <h1 className="title">Attribute Definition & Evidence of Reflection</h1>
                <h2 className="subtitle">
                  A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
                <p>Creative means to make something new.  We love to watch new movies and eat in the newest restaurants. Our personal creativity may not require a patent or copyright - it could be a unique mix of music on our I-phone, a specific post on Facebook or Twitter, or a different twist to our Uncle Wayne’s chili recipe. We love that special act of creating.
                </p>
                <p>The US Patent office handles almost 600,000 application per year.  The US Copyright Office addressed another 600,000 applications to protect specific publications.  Globally there are about 14,000,000 trademark in force.  Much effort is expended to protect this creativity of ours!
                </p>
              </div>
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
          <Sidebar />
              </>
          )
      }

}

export default Attribute;