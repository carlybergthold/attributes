import React, { useEffect } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";
import '../../styles/connectors.css';

export default function GroupingDetail(props) {
    useEffect(() => {
        scroll();
    });

    const cardClicked = (attribute) => {
        scroll();
        updateAttribute(attribute);
    }

    const updateAttribute = (attribute) => {
        props.changeGrouping(3);
        props.changeAttribute(attribute);
    }

    const scroll = () => {
        scrollIntoView(document.querySelector(".personality-quiz-section"), { behavior: "smooth", block: "start" } );
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
                        onClick={() => cardClicked(group)}
                    >
                        <div className="card-content">
                            <div className="content">
                                <p className="subtitle is-6">{group.name}</p>
                                <img className={`${props.image ? 'media-image' : 'hidden'}`} src={props.image} alt={group.name}></img>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
    )
}