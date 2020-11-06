import React from 'react';
import { Link, useParams } from "react-router-dom";
import QuestionnaireForm from './QuestionnaireForm.jsx';

const CHOICES_BRANDS = 'choices_brands';

const cfg = [
    {
        question: 'What is your budget?',
        binding: 'budget',
        type: 'slider',
        sliderRange: ['250', '20000'],
        sliderFormat: 'currency'
    },
    {
        question: 'How much will this setup be for music listening vs movie watching vs video games?',
        binding: 'usage',
        type: 'custom',
        component: 'usage'
    },
    {
        question: 'How big is your watching/listening room?',
        binding: 'room_size',
        type: 'choice',
        choices: ['Huge', 'Large', 'Average', 'Small']
    },
    {
        question: 'Is your watching/listening room a dedicated theater room (no ambient light)?',
        binding: 'theater_room',
        type: 'bool'
    },
    {
        question: 'Are you looking to set up a specific speaker configuration?',
        type: 'bool',
        followUp: {
            condition: true,
            binding: 'speaker_configurations',
            type: 'compactchoice',
            choices: [
                '2.0', '2.1', '3.0', '3.1',
                '5.1', '5.2', '5.1.2', '5.2.2', '5.1.4', '5.2.4',
                '7.1', '7.2', '7.1.2', '7.1.4', '7.2.2', '7.2.4',
                '9.1', '9.2', '9.1.2', '9.1.4', '9.2.2', '9.2.4',
                '11.1', '11.2', '11.1.2', '11.1.4', '11.2.2', '11.2.4',
                '13.1', '13.2', '13.1.2', '13.1.4', '13.2.2', '13.2.4',
                'Something else'
            ]
        }
    },
    {
        question: 'How would you best describe your design taste?',
        binding: 'taste',
        type: 'choice',
        choices: ['Minimalistic', 'Rustic', 'Modern', 'Eccentric', 'I don\'t care']
    },
    {
        question: 'How important is visual appearance?',
        binding: 'waf',
        type: 'slider',
        sliderFormat: 'importance'
    },
    {
        question: 'How important is simplicity?',
        binding: 'simplicity',
        type: 'slider',
        sliderFormat: 'importance'
    },
    {
        question: 'Are you willing to install in-wall and/or in-ceiling speakers?',
        binding: 'hide',
        type: 'bool'
    },
    {
        question: 'Are wireless speakers a must-have?',
        binding: 'wireless',
        type: 'bool'
    },
    {
        question: 'Audio/video brands you love?',
        binding: 'brands_like',
        type: 'brandchoice',
        choices: CHOICES_BRANDS
    },
    {
        question: 'Audio/video brands you hate?',
        binding: 'brands_hate',
        type: 'brandchoice',
        choices: CHOICES_BRANDS
    },
    {
        question: 'Must have technology support?',
        binding: 'fanboy',
        type: 'choice',
        choices: ['4k', 'HDR', 'Dolby Atmos', 'Apple Airplay', 'HEOS', 'SONOS']
    },
];

class QuestionnaireSteps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            responses: cfg.map(({ binding }) => ({ binding, value: '' }))
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
        
        const step = cfg[stepId];
        const stepValue = responses[stepId].value;
        
        const disabledClass = stepValue.length ? '' : 'disabled';

        return (
            <section>
                <h3>{`${stepId + 1}. ${step.question}`}</h3>
                <QuestionnaireForm save={this.save} value={stepValue} {...step} />

                <div className="form-group">
                    { stepId < cfg.length - 1 &&
                        <Link to={`/questionnaire/${stepId + 1}`} className={`btn btn-primary ${disabledClass}`}>Next</Link>
                    }
                    { stepId !== 0 && 
                        <Link to={`/questionnaire/${stepId - 1}`} className="btn btn-secondary">Go back</Link>
                    }
                    { stepId === cfg.length - 1 &&
                        <Link to="/" className="btn btn-success">Done</Link>
                    }
                </div>
            </section>

        );
    }
}

const withStepId = BaseComponent => ({ props }) => (
    <BaseComponent stepId={parseInt(useParams().stepId, 10)} {...props} />
);

export default withStepId(QuestionnaireSteps);