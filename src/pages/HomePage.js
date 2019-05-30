import React, { Component } from 'react';
import {
    Router,
    Route,
    Link,BrowserRouter
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { Layout } from 'antd';
// import ProfileSeach from "./pages/ProfileSearch";
import 'antd/dist/antd.css';
import wroclaw from '../pages/page.css'
import Modal from './Modal';
import tour1 from '../images/tour1.PNG';
import tour2 from '../images/tour2.PNG';
import tour3 from '../images/tour3.PNG';
import pp1 from '../images/pp1.jpg';
import pp2 from '../images/pp2.jpg';
import { Label, Menu, Tab, Icon, Button, Loader } from 'semantic-ui-react';
import logo from '../images/logo.png';

const { Content } = Layout;

class HomePage extends Component {


    // constructor() {
    //     super();
    //     this.state = {
    //         search: 'Enter City'
    //     }
    // }

    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
        this.state = { isOpen2: false };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      toggleModal2 = () => {
        this.setState({
          isOpen2: !this.state.isOpen2
        });
      }

    updateSearch(event) {
        this.setState({search: event.target.value.substring(0,20)});
    }


    render() {
		return (
          
            <div className="HomeBox">
                <header>
                    <h1 style={{ color: 'black' }}>Discover places all around the world</h1>
                    <h3 style={{ color: 'black' }}>With the best tour guide of the city</h3>
                    </header>
            <div class="ui input"><input type="text" placeholder="Search..." /></div>
            <button onClick={this.toggleModal}>
              Search by Tour
            </button>
            <button onClick={this.toggleModal2}>
              Search by Profile
            </button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
                   <header>
                    <h1 style={{ color: 'black' }}>Tours</h1>
                   
                    </header>
                    <h3 style={{ color: 'black' }}>Rynek Tour</h3>
                  <img class ="resize" src={tour1} alt="tour1" />
                  <h3 style={{ color: 'black' }}>Island Tour</h3>
                  <img class ="resize" src={tour2} alt="tour2" />   
                  <h3 style={{ color: 'black' }}>Street art Tour</h3>
                  <img class ="resize" src={tour3} alt="tour3" />   
            
              
            </Modal>
            <Modal show={this.state.isOpen2}
              onClose={this.toggleModal2}>
                   <header>
                    <h1 style={{ color: 'black' }}>Profiles</h1>
                   
                    </header>
                    <img class ="resize2" src={pp1} alt="pp1" />
                    <img class ="resize2" src={pp2} alt="pp2" />
              </Modal>
                <br />
                <h1 class="lineDikey"
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS">
                    Contact With Us
                    <ul>
                        <li>EXETER, ON (Head Office)</li>
                        <li> 311 Main St., PO Box 1990, N0M 1S7 </li>
                        <li>519-235-2000</li>
                        <h1 style={{ color: '#696969'}} className = "spaceTop">
                            <img style={{fontSize:'2'}} src={logo} alt="Logo"/>
                            Traveling with ease
                        </h1> 
                    </ul>
                </h1>
                <br />
                <p 
                    style={{backgroundColor: 'black',fontSize:20 ,padding: 1}} 
                    className="footer"
                >
                <Menu.Item >
                  <Link to="/HomePage" ><Icon type="user" />Home Page | </Link>
                  <Link to="/UserPage" ><Icon type="user" /> User Page | </Link>
                  <Link to="/AboutPage" ><Icon type="user" /> About Page | </Link>
                  <Link to="/TourGuidePage" ><Icon type="user" /> Profile Page | </Link>
                </Menu.Item>
                </p>
          </div>
        );
    }
}

export default HomePage;