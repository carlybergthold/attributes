import React, { Component } from "react"
import { Link } from "react-router-dom"
import attArray from '../data/attributeArray'
import "../styles/components/attDropdown.css"

class AttributeDropdown extends Component {

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render() {
        return (
        <span className="attribute-dropdown">
        {
            attArray.map(a =>
            <Link key={a.attributeName} className="attribute-dropdown-item" to={`/attributes/${a.attributeName}`}>
                <span>{this.capitalize(a.attributeName)}</span>
            </Link>
        )
        }
        </span>
        )
    }
}

export default AttributeDropdown;