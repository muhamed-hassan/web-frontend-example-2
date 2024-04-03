import React from 'react';
import { Link } from 'react-router-dom';

// act as a view
export default class Fragment_2 extends React.Component {

    render() {
        return (
            <div class="container">
                <p>Content of Fragment_2 goes here</p>
                <Link class="back-to-main" to="/">Back to main page</Link>
            </div>
        );
    }

}