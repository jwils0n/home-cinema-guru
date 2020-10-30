import React from 'react';
import axios from 'axios';
import styles from './wrapper.scss'

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        axios.get('/api').then(({ data }) => {
            this.setState({ rows: data });
        });

        this.state = { rows: [] };
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Welcome to the Home Cinema Guru!</h1>
                <p>Here's some raw data:</p>
                <p>{this.state.rows}</p>
            </div>
        );
    }
}