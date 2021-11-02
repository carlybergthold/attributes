import React, { Component } from "react";
import { Link } from "react-router-dom";
import attArray from '../data/attributeArray';
import "../styles/components/attDropdown.css";


class AttributeDropdown extends Component {

    render() {
        return (
        <span className={this.props.mobile ? 'mobile-array' : 'attribute-dropdown'}>
        {
            attArray.map(a =>
            <Link key={a.attributeName} className={this.props.mobile ? 'mobile-att-name' : 'attribute-dropdown-item'} to={`/attributes/${a.attributeName}`} onClick={this.props.exitMobileMenu}>
                <span className={this.props.mobile ? "has-text-grey is-capitalized" : 'is-capitalized'}>{a.attributeName}</span>
            </Link>
        )
        }
        </span>
        )
    }
}

export default AttributeDropdown;