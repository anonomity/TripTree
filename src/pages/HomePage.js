import React, { Component } from 'react';
import {Link, BrowserRouter} from "react-router-dom";
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import wroclaw from '../pages/page.css'

const { Content } = Layout;

class HomePage extends Component {


    constructor() {
        super();
        this.state = {
            search: 'Enter City'
        }
    }

    onNavigateProfiles(){
        this.props.history.push("/ProfileSearch");

    }

    onNavigateTours(){
        this.props.history.push("/TourSearch");

    }

    updateSearch(event) {
        this.setState({search: event.target.value.substring(0,20)});
    }


    render() {
		return (
            
            <div >
                <header>
				    <h1 style={{ color: 'black' }}>Discover places all around the world</h1>
                    <h3 style={{ color: 'black' }}>With the best tour guide of the city</h3>
                    </header>
                    <div className="HomeBox">

                    <div class="ui input"><input type="text" placeholder="Search..." /></div>
                    
                    </div>
                    <div>
                    <button onClick={this.onNavigateProfiles.bind(this)} classname = "btn btn-primary">Search by Profile</button>
                    <button onClick={this.onNavigateTours.bind(this)} classname = "btn btn-primary">Search by Tour</button>
                    
                    </div>
                    
            </div>
            
        );
    }
}

export default HomePage;