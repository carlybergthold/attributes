import React, { Component } from "react"
import { Link } from "react-router-dom"
import attArray from '../data/attributeArray'
import "../styles/components/attDropdown.css"
import helperMethods from "../methods/helperMethods";

class AttributeDropdown extends Component {

    render() {
        return (
        <span className="attribute-dropdown">
        {
            attArray.map(a =>
            <Link key={a.attributeName} className="attribute-dropdown-item" to={`/attributes/${a.attributeName}`}>
                <span>{helperMethods.capitalize(a.attributeName)}</span>
            </Link>
        )
        }
        </span>
        )
    }
}

export default AttributeDropdown;