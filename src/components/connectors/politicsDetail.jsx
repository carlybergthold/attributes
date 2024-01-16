import React, { useEffect } from "react";
import '../../styles/connectors.css';
import GoToAttributeCard from './goToAttributeCard';
import { scrollIntoView } from "seamless-scroll-polyfill";

export default function PoliticsDetail(props) {

    useEffect(() => {
        scrollIntoView(document.querySelector(".progress-bar-container"), { behavior: "smooth", block: "start" } );
    });

    return (
        <div>
            <div>{props.commentary}</div>
            <br></br>
            <GoToAttributeCard attribute={props.attribute}></GoToAttributeCard>
        </div>
    );
}