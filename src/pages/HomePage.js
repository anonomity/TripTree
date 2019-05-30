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
            <div>
            <button onClick={this.toggleModal}>
              Search by Tour
            </button>
            <button onClick={this.toggleModal2}>
              Search by Profile
            </button>
            </div>
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
                    <h1 style={{ color: 'black' }}>Tour Guide Profiles</h1> 
                   
                    </header>
                    <div class="five">
                    <img class ="resize2" src={pp1} alt="pp1" />
                    <div>
                      
                      <table>
                        <caption>like this guide?</caption>
                        <tr>
                          <th>Name</th>
                          <th>Szymon Marianski </th>
                        </tr>
                        <tr>
                          <td>Languages   </td>
                          <td>Polish, English, and German</td>
                        </tr>
                        <tr>
                          <td>From    </td>
                          <td>Poland</td>
                        </tr>
                      </table>
                      <input type="submit" value="View Profile" />
                    </div>
                    </div>
                    <div class = "five">
                    <img class ="resize2" src={pp2} alt="pp2" />
                    <div>
                    <table>
                        <caption>like this guide?</caption>
                        <tr>
                          <th>Name</th>
                          <th>Mateusz Kryja </th>
                        </tr>
                        <tr>
                          <td>Languages   </td>
                          <td>Polish, English</td>
                        </tr>
                        <tr>
                          <td>From    </td>
                          <td>Poland</td>
                        </tr>
                      </table>
                      <input type="submit" value="View Profile" />
                    </div>
                    </div>

              
            </Modal>
          </div>
                
                   

                   
                        
                        
      
           
        );
    }
}

export default HomePage;