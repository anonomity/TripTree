import React, { Component } from 'react';
import { Tabs, Menu, Icon, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import './components/Trip_View.css'
import { Container } from 'semantic-ui-react';
import Mailbox from './components/Mailbox';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from "./pages/UserPage";
import GuideProfilePage from "./pages/TourGuidePage";
import TouristProfilePage from "./pages/TouristPage";
import AboutPage from "./pages/AboutPage";
import PrivateRoute from "./PrivateRoute";
import history from './history';
import firebase_app from "./base";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			current: history.location.pathname,
			authenticated: false,
			loading: true,
			currentUser: null,
			reserved: true,
			speed: 14,
		};
	}

	componentDidMount() {
		const roofRef = firebase_app.database().ref();
		const speedRef = roofRef.child('speed');
		speedRef.on('value', snap => {
			this.setState({
				speed: snap.val()
			});
		});
	}

	componentWillMount() {
		firebase_app.auth().onAuthStateChanged(user => {
		  if (user) {
			this.setState({
			  authenticated: true,
			  currentUser: user,
			  loading: false,
			  reserved: false
			});
		  } else {
			this.setState({
			  authenticated: false,
			  currentUser: null,
			  loading: false
			});
		  }
		});
	}

	logOut() {
		firebase_app.auth().signOut().then(function() {
				alert("Sign-out successful.");
				window.location.reload();
			}).catch(function(error) {
				alert(error);
			});	  
	} 

	handleClick = (e) => {
			this.setState({
				current: e.key,
			});
	}

	render() {
		if (this.state.loading) {
			return <p>Loading..</p>;
		}

		return (
		<>
		<Router history={history}>
			<Menu
				onClick={this.handleClick}
				selectedKeys={this.current}
				mode="horizontal"
				className='appMenu'
			>
				<Menu.Item key="/" className="menuItem">
					<Link to="/homepage"><Icon type="home" />Home page</Link>
				</Menu.Item>

				<Menu.Item key="/userPage" className={this.state.reserved?'menuItem reserved':'menuItem'}>
					<Link to="/UserPage"><Icon type="user" />User Page</Link>
				</Menu.Item>

				<Menu.Item key="/profilePage" className={this.state.reserved?'menuItem reserved':'menuItem'}>
					<Link to="/ProfilePage"><Icon type="user" />Profile Page</Link>
				</Menu.Item>
				
				<Menu.Item key="/AboutPage" className="menuItem">
					<Link to="/AboutPage" ><Icon type="user" />About Page </Link>
				</Menu.Item>
				
				<Menu.Item key="/" className="menuItem">
					<Link to="/"><Icon type="inbox" />Inbox</Link>
				</Menu.Item>

				<Menu.Item key="/logout" onClick={this.logOut} className={this.state.reserved?'menuItem reserved':'menuItem'}>
					<Icon type="logout" />Log Out
				</Menu.Item>
			</Menu>

			<Route exact path="/homepage" component={HomePage} />
			<Route exact path="/AboutPage" component={AboutPage} />
			<Route exact path="/" component={Login} />
			<Container style={{marginTop: '25px'}}>
				<Route exact path="/AboutPage" component={AboutPage} />
				<Route exact path="/inbox" component={Mailbox} />
				<Route exact path="/register" component={Register} />
			</Container>
			<PrivateRoute exact path="/UserPage" component={UserPage} authenticated={this.state.authenticated}/>
			<PrivateRoute exact path="/ProfilePage" component={GuideProfilePage} authenticated={this.state.authenticated}/>
		</Router>
		</>
		);
	}
}

export default App;