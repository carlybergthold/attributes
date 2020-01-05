import React, { Component } from "react";
import fire from '../config/fire'
import attributeArray from '../modules/attributeArray'
import './attributePage.css'
import userMethods from "../modules/userMethods";

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
              </>
          )
      }

}

export default Attribute;