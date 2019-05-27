import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react';
import firebase from '../config/firebase';
import {
    Link
} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('users');
        this.state = {
            email: '',
            password: '',
            loading: false,
            userEmail: null,
            error: null,
            tourGuide: false
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
        const newId = Math.random() * 100000000;
        if (this.state.email && this.state.password) {
            this.setState({
                loading: true
            });
            firebase.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            ).then((result) => {
                console.log(result)
                this.setState({
                    loading: false,
                    userEmail: result.user.email,
                    error: null
                });
                firebase.firestore().collection('users').doc(`${newId}`).set({
                    email: result.user.email,
                    type: this.state.tourGuide
                }).then((cevap) => {
                    console.log('Cevap', cevap);
                    localStorage.setItem('clientId', newId)
                }).catch((err) => {
                    console.error(err.message);
                })
                localStorage.setItem('user', this.state.email);
                localStorage.setItem('user-type', this.state.tourGuide);
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
            <h1>Trip Tree Register</h1>
                <Form>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={this.handleChange} name="email" placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input onChange={this.handleChange} name="password" type="password" placeholder='Password' />
                </Form.Field>
                <Button primary loading={this.state.loading} type='submit' onClick={this.login}>Register</Button>
                <Link to='/'>Login</Link>
                {
                    this.state.userEmail ? `Logged in as ${this.state.userEmail}` : null
                }
                {
                    this.state.error ? this.state.error : null
                }
                <Checkbox checked={this.state.tourGuide} onChange={() => this.setState({ tourGuide: !this.state.tourGuide })} label="Tour Guide" />
                {this.state.tourGuide ? 'Type: TourGuide' : 'Type: Tourist'}
            </Form>
            </React.Fragment>
        )
    }
}

export default Login