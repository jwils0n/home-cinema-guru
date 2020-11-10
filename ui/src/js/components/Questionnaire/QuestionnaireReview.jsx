import React from 'react';
import { Link, Switch, Route } from "react-router-dom";

export default function QuestionnaireReview(props) {
    const {
        location: { responses }
    } = props;

    return (
        <div>
            <h1>Review your responses</h1>
            
            { responses && responses.map(response => (
                <p>{`${response.name}: ${response.value}`}</p>
            )) }

            { !responses && (
                <React.Fragment>
                    <h4>Whoops, looks a problem occurred</h4>
                    <Link to="/questionnaire/0" className="btn btn-primary">Please go back</Link>
                </React.Fragment>
            ) }
        </div>
    );
}