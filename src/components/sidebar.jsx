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
        <ul>
        {
        attributeArray.map(att => <li className='attListItem' id={att.attributeName}
                                      onClick={this.props.setAttribute.bind(this)}>{att.attributeName}</li>)
        }
        </ul>
      </aside>
      )
    }
}

export default Sidebar;