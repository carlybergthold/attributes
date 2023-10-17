import React from "react";
import '../../styles/connectors.css';
import GoToAttributeCard from './goToAttributeCard';

export default function MovieDetail(props) {

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