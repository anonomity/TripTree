import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

class HomePage extends Component {
    render() {
		return (
            <div className="content">
				    <h1>Discover places all around the world</h1>
                    <h3>With the best tour guide of the city</h3>
                    <div className="HomeBox">
                    <div class="ui input"><input type="text" placeholder="Search..." /></div>
                    </div>
            </div>
        );
    }
}

export default HomePage;