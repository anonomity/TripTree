import React, { Component } from 'react';
import { Tabs, Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import NormalLoginForm from "../AuthPage/LoginFrom";
import RegistrationForm from "../AuthPage/register";

const TabPane = Tabs.TabPane;
const { Content } = Layout;

class LoginPage extends Component {
    render() {
		return (
        <Content className="content">
			<div className="login_form">
				<h1 className="login_form_title">Login</h1>
				<Tabs>
					<TabPane tab="Sign in" key="1"><NormalLoginForm/></TabPane>
					<TabPane tab="Register" key="2"><RegistrationForm/></TabPane>
				</Tabs>
			</div>
		</Content>
        );
    }
}

export default LoginPage;