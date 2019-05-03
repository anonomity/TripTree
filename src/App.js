import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import 'antd/dist/antd.css';

import {
  Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import history from './history';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

import AuthPage from './AuthPage/index';

const firebaseConfig = {
	apiKey: "AIzaSyBS9BUgNyS4jGKZEpeKArAnFPSOs5cpTCw",
	authDomain: "triptree-39cc6.firebaseapp.com",
	databaseURL: "https://triptree-39cc6.firebaseio.com",
	projectId: "triptree-39cc6",
	storageBucket: "triptree-39cc6.appspot.com",
	messagingSenderId: "839167947552",
	appId: "1:839167947552:web:d8c717db38af1c3f"
  };
firebase.initializeApp(firebaseConfig);

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Sider } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			current: history.location.pathname,
			speed: 120,
		};
	}

	componentDidMount() {
		const roofRef = firebase.database().ref();
		const speedRef = roofRef.child('speed');
		speedRef.on('value', snap => {
			this.setState({
				speed: snap.val()
			});
		});
	}
	
	handleClick = (e) => {
		this.setState({
		  current: e.key,
		});
	}

	render() {
		return (
		<Router history={history}>
			<div className="page">
				<Menu
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal"
					className='appMenu'
				>
					<Menu.Item key="/" className="menuItem">
						<Link to="/"><Icon type="home" />Home page</Link>
					</Menu.Item>
					<Menu.Item key="/authors" className="menuItem">
						<Icon type="team" />Authors
					</Menu.Item>
					<Menu.Item key="/articles" className="menuItem">
						<Icon type="snippets" />Articles
					</Menu.Item>
					<Menu.Item key="/reviewers" className="menuItem">
						<Icon type="solution" />Reviewers
					</Menu.Item>
					<Menu.Item key="/login" className="menuItem">
						<Link to="/login"><Icon type="login" />Login</Link>
					</Menu.Item>
					<Menu.Item key="/user" className="menuItem">
						<Icon type="user" />Username
					</Menu.Item>
				</Menu>
				<Route exact path="/" />
				<Route path="/login" component={AuthPage} />
				
				<h1>{this.state.speed}</h1>
			</div>
		</Router>
		);
	}
}


export default App;