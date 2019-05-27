import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            search: 'Enter City'
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substring(0,20)});
    }


    render() {
		return (
            <div className="content">
				    <h1 style={{ color: 'white' }}>Discover places all around the world</h1>
                    <h3 style={{ color: 'white' }}>With the best tour guide of the city</h3>
                    <div className="HomeBox">
                        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    </div>
            </div>
        );
    }
}

export default HomePage;