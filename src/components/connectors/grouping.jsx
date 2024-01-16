import React from "react";
import '../../styles/connectors.css';

export default function Group(props) {
    const updateConnector = (connectorId) => {
        props.changeConnector(connectorId);
    }

    const getImage = (image) => {
        return image != null
            ? <img src={image} alt={image} className={`media-image ${props.connector}`}></img>
            : null;
    }

    return(
        <div className="connector-container">
        {
            props.cardArray.map((x) =>
                <div
                    key={x.name}
                    className={`card connector-card is-hoverable`}
                    onClick={() => updateConnector(x.id)}
                >
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{x.name}</p>
                            </div>
                        </div>
                        {getImage(x.image)}
                    </div>
                </div>
            )
        }
        </div>
    )
}