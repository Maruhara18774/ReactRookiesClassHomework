import React, { Component } from 'react';
import Axios from 'axios';
import './index.css';

export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
        this.getData();
    }
    async getData() {
        await Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ data: response.data });
            })
    }
    render() {
        return (
            <div>
                <table id="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {this.state.data.map((val, key) => {
                            return <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contact
