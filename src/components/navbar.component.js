import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">FXBuilder</Link>
                <div className="collaps navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/indicators/add" className="nav-link">Indicators</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}