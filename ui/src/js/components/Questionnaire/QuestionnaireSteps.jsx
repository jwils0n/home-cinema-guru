import React from 'react';
import { Link, useParams } from "react-router-dom";
import ComponentsService from '../../services/ComponentsService';
import QuestionnaireForm from './QuestionnaireForm.jsx';
import QUESTIONNAIRE from '../../constants/questionnaire';

class QuestionnaireSteps extends React.Component {
    constructor(props) {
        super(props);

        const componentsService = new ComponentsService();
        componentsService.getBrands()
            .then(({ data: rows }) => rows)
            .then(brands => brands.map(brand => ({ key: brand.id, value: brand.name })))
            .then(brands => this.setState({ brands }));
        
        this.state = {
            brands: [],
            responses: QUESTIONNAIRE.QUESTIONS.map(({ binding }) => ({ binding, value: '' }))
        }
    }

    save = (name, value) => {
        const responses = this.state.responses;
        responses[this.props.stepId] = { name, value };

        this.setState({ responses });
    }

    render() {
        const { stepId } = this.props;
        const { responses } = this.state;
        
        const stepValue = responses[stepId].value;

        const step = QUESTIONNAIRE.QUESTIONS[stepId].choices === QUESTIONNAIRE.CHOICES_BRANDS
            ? { ...QUESTIONNAIRE.QUESTIONS[stepId], choices: this.state.brands }
            : { ...QUESTIONNAIRE.QUESTIONS[stepId] };
        
        const disabledClass = stepValue.toString().length ? '' : 'disabled';

        return (
            <section>
                <QuestionnaireForm save={this.save} value={stepValue} questionNumber={stepId + 1} {...step} />

                <div className="form-group mb-4 mt-5">
                    { stepId < QUESTIONNAIRE.QUESTIONS.length - 1 &&
                        <Link to={`/questionnaire/${stepId + 1}`} className={`btn btn-primary ${disabledClass}`}>Next</Link>
                    }
                    { stepId !== 0 && 
                        <Link to={`/questionnaire/${stepId - 1}`} className="btn btn-secondary">Go back</Link>
                    }
                    { stepId === QUESTIONNAIRE.QUESTIONS.length - 1 &&
                        <Link to={{ pathname: '/questionnaire/review', responses: this.state.responses }} className="btn btn-success">Done</Link>
                    }
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: stepId / QUESTIONNAIRE.QUESTIONS.length * 100 + '%' }}></div>
                </div>
            </section>

        );
    }
}

const withStepId = BaseComponent => ({ props }) => (
    <BaseComponent stepId={parseInt(useParams().stepId, 10)} {...props} />
);

export default withStepId(QuestionnaireSteps);