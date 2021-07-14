import React, { Component } from 'react';
import './Navbar.css';
import {Link } from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: 'LINH MAC'
        }
    }
    
    render() {
        return (
            <nav id='navbar'>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <a href="#"><li>About</li></a>
                    </li>
                    
                </ul>

                <div className="nav-details">
                <p className="nav-username"> {this.state.username} </p>
                </div>
            </nav>
        )
    }
}

export default Navbar
