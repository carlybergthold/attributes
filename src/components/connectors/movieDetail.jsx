import React, { useEffect } from "react";
import '../../styles/connectors.css';
import GoToAttributeCard from './goToAttributeCard';
import { scrollIntoView } from "seamless-scroll-polyfill";

export default function MovieDetail(props) {
    useEffect(() => {
        scrollIntoView(document.querySelector(".progress-bar-container"), { behavior: "smooth", block: "start" } );
    });

    const Quote = () => {
        if (props.quote !== null) {
            return <div className="title is-5">"{props.quote}"</div>;
        }

        return null;
    }

    return (
        <div>
            <div>{props.commentary}</div>
            <br></br>
            <Quote />
            <GoToAttributeCard attribute={props.attribute}></GoToAttributeCard>
        </div>
    );
}