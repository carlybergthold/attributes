import React, { Component } from "react";
import attributeArray from '../data/attributeArray'

class Sidebar extends Component {

    constructor(props){
      super(props);
    }

    componentDidMount() {
      console.log(this.props)
    }

    render() {
      return(
      <aside>
        <ul className="attList">
        {
        attributeArray.map(att => <li key={att.attributeName} className='attListItem' id={att.attributeName}
                                      onClick={this.props.setAttribute.bind(this)}>{att.attributeName}</li>)
        }
        </ul>
      </aside>
      )
    }
}

export default Sidebar;