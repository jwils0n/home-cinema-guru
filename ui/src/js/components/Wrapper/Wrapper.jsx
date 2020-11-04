import React from 'react';
import TestService from '../../services/TestService';
import constants from '../../constants';
import styles from './wrapper.scss'

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        const testService = new TestService();
        testService.get().then(({ data: rows }) => {
            this.setState({ rows });
        });

        this.state = { rows: [] };
    }
    render() {
        return (
            <div className="container">
                <h1>Welcome to the Home Cinema Guru!</h1>
                <p>Here's some raw data:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Brand</td>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows.map(row => (
                            <tr key={row.id}>
                                <td><img height="100" width="100" src={`${constants.CDN_URL}/speakers/large/${row.slug}.jpg`} /></td>
                                <td>{row.brand.name}</td>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}