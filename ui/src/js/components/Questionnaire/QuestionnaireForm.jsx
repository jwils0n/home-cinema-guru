import React from 'react';

export default class QuestionnaireForm extends React.Component {

    onChange = (e) => {
        const {
            target: { name, value }
        } = e;
        
        this.props.save(name, value);
    }

    render() {
        const { choices, type, binding, value } = this.props;
        let form;
    
        switch(type) {
            case 'bool':
                form = (
                    <div className="form-group">
                        <div className="form-check form-control-lg">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={binding}
                                id="bool-field-true"
                                value="1"
                                onChange={this.onChange}
                                checked={value === '1'}
                            />
                            <label className="form-check-label" htmlFor="bool-field-true">Yes</label>
                        </div>
                        <div className="form-check form-control-lg">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={binding}
                                id="bool-field-false"
                                value="0"
                                onChange={this.onChange}
                                checked={value === '0'}
                            />
                            <label className="form-check-label" htmlFor="bool-field-false">No</label>
                        </div>
                    </div>
                )
                break;
            case 'choice':
                form = (
                    <div className="form-group">
                        { choices.map(choice => (
                            <div className="form-check form-control-lg" key={choice}>
                                <input
                                    className="form-check-input"
                                    type="radio" 
                                    name={binding}
                                    id={`bool-field-${choice}`}
                                    value={choice}
                                    onChange={this.onChange}
                                    checked={value === choice}
                                />
                                <label className="form-check-label" htmlFor={`bool-field-${choice}`}>{choice}</label>
                            </div>
                        )) }
                    </div>
                )
                break;
            default:
                form = (
                    <div className="form-group">
                        <input className="form-control" type="text" name={binding} id="default-input" onChange={this.onChange} value={value} />
                    </div>
                )
        }
        return <div className="form mb-4">{form}</div>;
    }
}