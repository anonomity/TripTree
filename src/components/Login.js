import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react';
import firebase from '../config/firebase';
import {
    Link
} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            userEmail: null,
            error: null
        }
    }
    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.props.history.push('/inbox');
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        if (this.state.email && this.state.password) {
            this.setState({
                loading: true
            });
            firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.password
            ).then((result) => {
                this.setState({
                    loading: false,
                    userEmail: result.user.email,
                    error: null
                });
                localStorage.setItem('user', this.state.email);
                this.props.history.push('/inbox');
                console.log(result)
            }).catch((err) => {
                this.setState({
                    error: err.message,
                    loading: false
                });
            })
        }
    }
    render() {
        return (

            <React.Fragment>
                <h1>Trip Tree Login</h1>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input onChange={this.handleChange} name="email" placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input onChange={this.handleChange} name="password" type="password" placeholder='Password' />
                    </Form.Field>
                    <Button loading={this.state.loading} type='submit' onClick={this.login}>Login</Button>
                    <Link to='/register'>Register</Link>
                    {
                        this.state.userEmail ? `Logged in as ${this.state.userEmail}` : null
                    }
                    {
                        this.state.error ? this.state.error : null
                    }
                </Form>
            </React.Fragment>
        )
    }
}

export default Login