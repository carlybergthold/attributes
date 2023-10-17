import React from "react";

export default function GroupingDetail(props) {
    const updateAttribute = (attribute) => {
        props.changeGrouping(3);
        props.changeAttribute(attribute);
    }

    return(
        <>
        <div className="connector-container grouping-detail">
            {
                props.cardArray
                .map(group =>
                    <div
                        key={group.name}
                        className="card connector-card is-hoverable"
                        onClick={() => updateAttribute(group)}
                    >
                        <div className="card-content">
                            <div className="content">
                                <p className="subtitle is-6">{group.name}</p>
                                <img className="media-image" src={props.image} alt={group.name}></img>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
    )
}