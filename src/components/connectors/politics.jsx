import React from "react";
import '../../styles/connectors.css';
import politicsArray from '../../data/politicsArray';
import '../../styles/connectors.css';
import ConnectorCard from './connectorCard';

export default function Politics() {
    return (
        <ConnectorCard
            connector="politics"
            array={politicsArray}
            introText="Politics is becoming one of the fastest-growing religions in America. Political angst grows as more people see their party as substituting for God (and the opposition taking the role of Satan!)."
            introSubtitle="In reality, both Democratic and Republican platforms reflect God's image on major issues, often finding rare agreement, while sometimes both understandably missing the mark. Click on an issue and see how each party's official platform pursues the One True God:"
            isPolitics={true}
        ></ConnectorCard>
    );
}