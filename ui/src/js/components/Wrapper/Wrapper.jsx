import React from 'react';
import axios from 'axios';
import styles from './wrapper.scss'

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        axios.get('/api').then(({ data: rows }) => {
            this.setState({ rows });
        });

        this.state = { rows: [] };
    }
    render() {
        console.log(this.state);
        return (
            <div className={styles.wrapper}>
                <h1>Welcome to the Home Cinema Guru!</h1>
                <p>Here's some raw data:</p>
                <table>
                    {this.state.rows.map(row => <tr><td>{row.id}</td><td>{row.name}</td><td></td>{row.price}</tr>)}
                </table>
            </div>
        );
    }
}