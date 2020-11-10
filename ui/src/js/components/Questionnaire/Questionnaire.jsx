import React from 'react';
import { Link, Switch, Route, useParams } from "react-router-dom";
import QuestionnaireReview from './QuestionnaireReview.jsx';
import QuestionnaireSteps from './QuestionnaireSteps.jsx';

export default function Questionnaire() {
    return (
        <div>
            <Switch>
                <Route exact path="/questionnaire">
                    <Link to="/questionnaire/0" className="btn btn-primary">Let's get started</Link>
                </Route>
                <Route exact path="/questionnaire/review" component={QuestionnaireReview} />
                <Route path="/questionnaire/:stepId" component={QuestionnaireSteps} />
                
            </Switch>
        </div>
    );
}