import React from 'react';
import TestService from '../../services/TestService';
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
            <div className={styles.wrapper}>
                <h1>Welcome to the Home Cinema Guru!</h1>
                <p>Here's some raw data:</p>
                <table>
                    <tbody>
                        {this.state.rows.map(row => <tr key={row.id}><td>{row.id}</td><td>{row.name}</td><td>{row.price}</td></tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}