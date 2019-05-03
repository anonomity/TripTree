import {Tabs, Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';

import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './index.css';

import './LoginFrom';
import NormalLoginForm from "./LoginFrom";
import NormalRegisterForm from "./RegisterForm"

const TabPane = Tabs.TabPane;
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class AuthPage extends Component{
	render(){
		return(
			<div>
				<Layout>
					<Sider className="sider">
						<Menu
						  mode="inline"
						  defaultSelectedKeys={['1']}
						  defaultOpenKeys={['sub1']}
						  style={{ height: '100%', borderRight: 0 }}
						>
						  <SubMenu key="sub1" title={<span><Icon type="user" />Read Articles</span>}>
							<Menu.Item key="1">Article 1</Menu.Item>
							<Menu.Item key="2">Article 2</Menu.Item>
							<Menu.Item key="3">Article 3</Menu.Item>
							<Menu.Item key="4">Article 4</Menu.Item>
						  </SubMenu>
						  <SubMenu key="sub2" title={<span><Icon type="laptop" />Your Events</span>}>
							<Menu.Item key="5">Event 1</Menu.Item>
							<Menu.Item key="6">Event 2</Menu.Item>
							<Menu.Item key="7">Event 3</Menu.Item>
							<Menu.Item key="8">Event 4</Menu.Item>
						  </SubMenu>
						  <SubMenu key="sub3" title={<span><Icon type="notification" />Information</span>}>
							<Menu.Item key="9">Information 1</Menu.Item>
							<Menu.Item key="10">Information 2</Menu.Item>
							<Menu.Item key="11">Information 3</Menu.Item>
							<Menu.Item key="12">Information 4</Menu.Item>
						  </SubMenu>
						  <Menu.Item>
							<Icon type="unlock" />
							<span>Ask for permission</span>
						  </Menu.Item>
						  <Menu.Item>
							<Icon type="edit" />
							<span>Edit Profile</span>
						  </Menu.Item>
						</Menu>
					</Sider>
					<Content className="content">
						<div className="login_form">
							<h1 className="login_form_title">Login</h1>
							<Tabs defaultActiveKey={!this.props.register ? '1' : '2'} onChange={(activeKey) => this.props.history.push(activeKey === '1' ? '/login' : '/register')}>
								<TabPane tab="Sign in" key="1"><NormalLoginForm/></TabPane>
								<TabPane tab="Register" key="2"><NormalRegisterForm/></TabPane>
							</Tabs>
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default withRouter(AuthPage);