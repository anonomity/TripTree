import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import {
    Router,
    Route,
    Link
} from "react-router-dom";

import history from '../history';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from "../pages/UserPage";
import PrivateRoute from "../PrivateRoute";

import firebase_app from "../base";

class menu extends Component {

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={this.current}
                    mode="horizontal"
                    className='appMenu'
                >
                    <Menu.Item key="/" className="menuItem">
                        <Link to="/"><Icon type="home" />Home page</Link>
                    </Menu.Item>
                    <Menu.Item key="/userPage" className={this.state.reserved ? 'menuItem reserved' : 'menuItem'}>
                        <Link to="/UserPage"><Icon type="user" />User Page</Link>
                    </Menu.Item>
                    <Menu.Item key="/about" className="menuItem">
                        <Icon type="snippets" />About
                </Menu.Item>
                    <Menu.Item key="/contact" className="menuItem">
                        <Icon type="solution" />Contact
                </Menu.Item>
                    <Menu.Item key="/login" className={this.state.reserved ? 'menuItem' : 'menuItem reserved'}>
                        <Link to="/LoginPage"><Icon type="login" />Login</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={HomePage} />
                <Route exact path="/LoginPage" component={LoginPage} />
                <PrivateRoute exact path="/UserPage" component={UserPage} authenticated={this.state.authenticated} />
            </>
        );
    }
}

export default menu;