import React from 'react';
import { Link } from "react-router-dom";
import TestService from '../../services/TestService';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        const testService = new TestService();
        testService.get().then(({ data: rows }) => {
            console.log(rows);
            this.setState({ rows });
        });

        this.state = { rows: [] };
    }

    render() {
        return (
            <div className="container wrapper">
                <div className="jumbotron">
                    <h1 className="display-3">The home cinema guru</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, tortor ac ultrices ornare, erat nibh faucibus leo.</p>
                    <hr className="my-4" />
                    <p>Aenean venenatis a orci at ultrices. Nullam ultrices dignissim nisl. Praesent rutrum, turpis ut ornare gravida, neque nibh auctor nulla, ut semper ligula purus non tortor. Integer venenatis tellus urna, nec feugiat risus pellentesque quis. Mauris dapibus tincidunt dignissim. Aenean pharetra blandit nunc quis vehicula..</p>
                    <p>
                        <Link to="/questionnaire" className="btn btn-primary btn-lg mr-1">Start building</Link>
                    </p>
                </div>
            </div>
        );
    }
}