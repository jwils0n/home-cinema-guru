import React from 'react';
import { Link, Switch, Route, useParams } from "react-router-dom";
import QuestionnaireReview from './QuestionnaireReview.jsx';
import QuestionnaireSteps from './QuestionnaireSteps.jsx';

export default function Questionnaire() {
    return (
        <div>
            <Switch>
                <Route exact path="/questionnaire">
                    <h3>I need to ask you a few questions</h3>
                    <h5>Some tips:</h5>
                    <ul>
                        <li>Nothing you select is absolute, your answers simply help me weigh options.</li>
                        <li>When in doubt, select "no".</li>
                        <li>When you've answered all of my questions, I'll process and give you my suggestions.</li>
                        <li>I have no allegiances, I simply want to help find something that suits your needs.</li>
                    </ul>
                    <Link to="/questionnaire/0" className="btn btn-primary">Let's get started</Link>
                </Route>
                <Route exact path="/questionnaire/review" component={QuestionnaireReview} />
                <Route path="/questionnaire/:stepId" component={QuestionnaireSteps} />
                
            </Switch>
        </div>
    );
}