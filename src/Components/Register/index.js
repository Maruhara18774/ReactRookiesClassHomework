import React, { Component } from 'react';
import Axios from 'axios';
import './index.css'

export class Register extends Component {
    async addNewContact(e) {
        e.preventDefault();
        await Axios.post('https://jsonplaceholder.typicode.com/users',{
            name: e.target.name.value,
            email: e.target.email.value
        }).then(response =>{
            if(response.status == 200){
                alert("Success regist!");
            }
            else{
                alert("Failed regist!");
            }
        })
    }
    render() {
        return (
            <form className="form" onSubmit={e => this.addNewContact(e)}>
                <label for="name">Name: </label>
                <input type="text" id="name" />
                <br />
                <label for="email">Email: </label>
                <input type="text" id="email" />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Register
