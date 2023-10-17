import React from "react";
import { Link } from "react-router-dom";
import styleMethods from "../../methods/styleMethods";

export default function GoToAttributeCard(props) {
    return(
        <section className="connector-container" id="groupConnector">
            <div className="card connector-card go-to-attribute-card">
                <div className="card-content">
                    <p className="title is-4 is-capitalized">{props.attribute}</p>
                </div>
                <footer className="card-footer">
                    <span className="card-footer-item">
                        <Link to={`/attributes/${props.attribute}`} className="personality-connector-link">
                        <div className="personality-connector-flex">
                            <span>
                            {
                                styleMethods.getIcon(props.attribute, styleMethods.getAttributeColor(props.attribute))
                            }
                            </span>
                            <span>Go to {props.attribute}</span>
                        </div>
                    </Link>
                    </span>
                </footer>
            </div>
        </section>
    )
}