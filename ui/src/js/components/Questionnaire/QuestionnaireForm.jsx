import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import styles from './QuestionnaireForm.scss';

const USAGE_FORM_DEFAULTS = ['50', '50', '0'];

export default class QuestionnaireForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            followUpActive: false
        }
    }

    onChangeUsageProxy = (value, name, index) => {
        const values = this.state.values[name] ? [...this.state.values[name]] : USAGE_FORM_DEFAULTS;
        const diff = value - parseInt(values[index], 10);

        const indexA = index === 0 ? 1 : 0;
        const indexB = index === 2 ? 1 : 2;

        const valueA = parseInt(values[indexA], 10);
        const valueB = parseInt(values[indexB], 10);

        const deltaA = Math.ceil(diff / 2);
        const deltaB = Math.floor(diff / 2);

        let newValueA = valueA - deltaA;
        let newValueB = valueB - deltaB;
    
        if (newValueA <= 0) {
            newValueA = 0;
            newValueB = newValueB - deltaA;
            newValueB = newValueB < 0 ? 0 : newValueB;
        }

        if (newValueB <= 0) {
            newValueB = 0;
            newValueA = newValueA - deltaB;
            newValueA = newValueA < 0 ? 0 : newValueA;
        }

        values[indexA] = newValueA.toString();
        values[indexB] = newValueB.toString();

        values[index] = value.toString();

        this.onChange({ target: { name, value: values } });
    }

    onChange = (e, isArray = false) => {
        let {
            target: { name, value }
        } = e;

        if (isArray) {
            let valueArr = this.state.values[name] || [];
            const index = valueArr.indexOf(value);

            if (index !== -1) {
                valueArr.splice(index, 1);
            } else {
                valueArr.push(value);
            }
            value = valueArr;
        }

        if (this.props.followUp && value == true) {
            this.setState({ followUpActive: true })
        } else {
            this.setState({ followUpActive: false })
        }

        const values = { ...this.state.values, [name]: value };
        this.setState({ values });

        this.props.save(name, value);
    }

    FormControl = (props) => {
        const { choices, type, binding, value, followUp } = props;
        let form;

        console.log(binding, value, choices);
    
        switch(type) {
            case 'bool':
                form = (
                    <React.Fragment>
                        <div className="form-check form-control-lg">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={binding}
                                id="bool-field-true"
                                value="1"
                                onChange={this.onChange}
                                checked={value === '1' || followUp && value != 0}
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
                    </React.Fragment>
                )
                break;
            case 'slider':
                let {
                    sliderRange,
                    sliderFormat,
                    sliderStep,
                    sliderStart
                } = this.props;

                const [min, max] = sliderRange || ['1', '100'];

                form = (
                    <React.Fragment>
                        <ReactBootstrapSlider
                            id="range-field"
                            value={parseInt(value || sliderStart, 10)}
                            name={binding}
                            change={(e) => this.onChange({ target: { value: e.target.value, name: binding } })}
                            step={parseInt(sliderStep, 10) || 1}
                            max={parseInt(max, 10)}
                            min={parseInt(min, 10)}
                            tooltip="hide"
                        />

                        <p className="lead">{`${sliderFormat === 'currency' ? '$' : ''}${this.state.values[binding] || sliderStart}`}</p>
                        
                    </React.Fragment>
                )
                break;
            case 'custom_usage':
                const [value_movies, value_music, value_games] = value || [];
                form = (
                    <React.Fragment>
                        <div className="form-group">
                            <label htmlFor="range-field-movies">Movies & TV</label>
                            <ReactBootstrapSlider
                                id="range-field-movies"
                                value={parseInt(value_movies || USAGE_FORM_DEFAULTS[0], 10)}
                                name={`${binding}[0]`}
                                max={100}
                                step={2}
                                change={(e) => this.onChangeUsageProxy(e.target.value, binding, 0)}
                                tooltip="hide"
                            />
                            <p>{value_movies || USAGE_FORM_DEFAULTS[0]}%</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="range-field-music">Music</label>
                            <ReactBootstrapSlider
                                id="range-field-music"
                                value={parseInt(value_music || USAGE_FORM_DEFAULTS[1], 10)}
                                name={binding}
                                max={100}
                                step={2}
                                change={(e) => this.onChangeUsageProxy(e.target.value, binding, 1)}
                                tooltip="hide"
                            />
                            <p>{value_music || USAGE_FORM_DEFAULTS[1]}%</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="range-field-games">Video Games</label>
                            <ReactBootstrapSlider
                                id="range-field-games"
                                value={parseInt(value_games || USAGE_FORM_DEFAULTS[2], 10)}
                                name={binding}
                                max={100}
                                step={2}
                                change={(e) => this.onChangeUsageProxy(e.target.value, binding, 2)}
                                tooltip="hide"
                            />
                            <p>{value_games || USAGE_FORM_DEFAULTS[2]}%</p>
                        </div>
                    </React.Fragment>
                )
                break;
            case 'choice':
                form = (
                    <React.Fragment>
                        { choices.map(choice => {
                            choice = typeof choice === 'object' ? choice : { key: choice, value: choice };

                            return (
                                <div className="form-check form-control-lg" key={choice.key}>
                                    <input
                                        className="form-check-input"
                                        type="radio" 
                                        name={binding}
                                        id={`bool-field-${choice.key}`}
                                        value={choice.value}
                                        onChange={this.onChange}
                                        checked={value === choice.value}
                                    />
                                    <label className="form-check-label" htmlFor={`bool-field-${choice.key}`}>{choice.value}</label>
                                </div>
                            )
                            }) }
                    </React.Fragment>
                )
                break;
            case 'multichoice':
                form = (
                    <React.Fragment>
                        { choices.map(choice => (
                            <div className="form-check" key={choice.key}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name={binding}
                                    value={choice.key}
                                    id={`checkbox-field-${choice.key}`}
                                    onChange={(e) => this.onChange(e, true)}
                                    checked={value.indexOf(choice.key) !== -1}
                                />
                                <label className="form-check-label" htmlFor={`checkbox-field-${choice.key}`}>{choice.value}</label>
                            </div>
                        ))}
                    </React.Fragment>
                )
                break;
            case 'compactchoice':
                form = (
                    <React.Fragment>
                        <label htmlFor="">Please elaborate</label>
                        <select className="form-control" name={binding} defaultValue={value} onChange={this.onChange}>
                            <option></option>
                            { choices.map(choice => <option key={choice}>{choice}</option>) }
                        </select>
                    </React.Fragment>
                )
                break;
            default:
                form = (
                    <div className="form-group">
                        <input className="form-control" type="text" name={binding} id="default-input" onChange={this.onChange} value={value} />
                    </div>
                )
        }

        return form;
    }

    render() {
        const { question, explanation, questionNumber, followUp, value } = this.props;
        
        return (
            <div className="form">
                <div className={styles.questionnaireFormHeader}>
                    <h2>
                        <span className={styles.questionnaireNumber}>{`${questionNumber}.`}</span>
                        <span className={styles.questionnaireQuestion}>{question}</span>
                    </h2>
                    <h5 className="text-muted">{explanation}</h5>
                </div>
                <div className="form-group">
                    <this.FormControl {...this.props} />

                    { (this.state.followUpActive || (followUp && value != 0)) && (
                        <div className="mt-3">
                            <this.FormControl {...followUp} binding={this.props.binding} />
                        </div>
                    ) }
                </div>
            </div>
        );
    }
}