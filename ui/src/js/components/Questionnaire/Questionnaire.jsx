import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import QuestionnaireSteps from './QuestionnaireSteps.jsx';

export default function Questionnaire() {
    return (
        <div>
            <h1>First, a few questions...</h1>
            
            <Switch>
                <Route exact path="/questionnaire">
                    <Link to="/questionnaire/0" className="btn btn-primary">Let's get started</Link>
                </Route>
                <Route path="/questionnaire/:stepId">
                    <QuestionnaireSteps />
                </Route>
            </Switch>
        </div>
    );
}