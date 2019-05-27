import React, { Component } from 'react';
import { Label, Menu, Tab, Icon, Button, Loader } from 'semantic-ui-react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.png';

const { Content } = Layout;
console.log(logo);

class AboutPage extends Component {
    render() {
		return (
            <React.Fragment>
                   
				    <h1 style={{ color: 'black' }}>Traveling with ease</h1> 
                    
                    <h3 style={{ color: 'black' }}>TripTree is about granting users the best traveling experience they can imagagine.
                    Our application connects you with the best tour guides who know your destination like the back of their hand.
                    </h3>
                    <img src={logo} alt="Logo" />
            </React.Fragment>
        );
    }
}

export default AboutPage;