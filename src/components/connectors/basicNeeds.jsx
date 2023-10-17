import React from "react";
import ConnectorCard from './connectorCard';
import '../../styles/connectors.css';
import basicNeedsArray from "../../data/basicNeedsArray";

export default function BasicNeeds() {
    return(
        <ConnectorCard
            connector="basicNeed"
            array={basicNeedsArray}
            introSubtitle="Being a Christ follower immediately brings us all the Security we need to live confidently, the Significance we need to live purposefully, and the Acceptance we need to combat all rejection. What basic need are you struggling with today?"
        ></ConnectorCard>
    )
}