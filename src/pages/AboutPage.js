import React, { Component } from 'react';
import { Label, Menu, Tab, Icon, Button, Loader } from 'semantic-ui-react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo.png';
import backgroundImage from '../images/wroclaw.jpg';
import './AboutPage.css';
import guys from '../images/guys.jpg';
import {
    Link
  } from "react-router-dom";


const { Content } = Layout;
console.log(logo);

class AboutPage extends Component {
    render() {
		return (
            <React.Fragment>
                <h1 style={{ color: '#696969'}} className = "spaceTop">
                    <img style={{fontSize:'2'}} src={logo} alt="Logo"/>
                    Traveling with ease
                    <img className= "spaceTop"
                        src={backgroundImage} 
                        alt="Profile picture" 
                        style={{width:'100%',marginTop:'5'}}
                    />
                </h1> 
				<h1 style={{ color: 'green', marginTop:50 }} className = "inlineS">  Our beginnings…</h1>     
                <p 
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                TripTree is about granting users the best traveling experience they can imagagine.
                Our application connects you with the best tour guides who know your destination 
                like the back of their hand.Ellison Travel is committed to sustainable travel, business and community.  As a travel company we are aware that our business has a powerful impact on the lives and outlook of not only our clients, but also the areas of the world that they visit and we are dedicated to ensuring that while our clients’ travel needs are met, we are also giving back to the global community.  We are dedicated to the fight against global warming and minimizing our overall footprint on the environment. We understand that people are meant to explore and enjoy the freedom to discover and experience a new place and by working together, we can continue to satisfy our natural curiosity for a foreign land and visit our favourite corners of the world.
                </p>
                <p 
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                In 2019,Travel & Tours, opened his travel company in a small basement office in the Exeter Town Hall with 2 employees. Today, we employ over 90 people in 6 locations, Exeter, London, North Vancouver, Ottawa, Halifax and Toronto. Prior to opening Ellison Travel & Tours, Doug spent 14 years in education at the high school level, 13 of those years at South Huron DHS in Exeter. As a teacher, he organized school trips for students which sparked his interest in travel and he has never looked back. Ellison Travel & Tours is one of the largest Canadian owned travel agencies in Canada yet has all the advantages of a small-town business: friendly, personal attention, long-serving employees and a superior level of expertise and service.
                Ellison Travel is committed to sustainable travel, business and community.  As a travel company we are aware that our business has a powerful impact on the lives and outlook of not only our clients, but also the areas of the world that they visit and we are dedicated to ensuring that while our clients’ travel needs are met, we are also giving back to the global community.  We are dedicated to the fight against global warming and minimizing our overall footprint on the environment. We understand that people are meant to explore and enjoy the freedom to discover and experience a new place and by working together, we can continue to satisfy our natural curiosity for a foreign land and visit our favourite corners of the world.
                </p>  
                <h1 style={{ color: '#696969',justifyContent: 'center'}} className = "spaceTop" className="marginDown">Traveling with ease</h1>
                <h1 style={{ color: '#696969'}} className = "spaceTop">
                    <img 
                        className = "spaceTop"
                        // className = "heightS"
                        src={guys} 
                        alt="Guys" 
                        style={{width:'100%',marginTop:'5'}}
                    />
                </h1>
                <h1 style={{ color: 'green' }} className = "inlineS">  Our Team.. </h1>     
                <p 
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                The success of this global company is due in part to Doug’s investment in his team. Ellison Travel employees are provided with quality training and support and as a result are a team of dedicated and talented individuals who listening carefully to their clients and develop solutions that meet or exceed customer expectations. Travel to destinations where we plan tours to is an essential element of our training.  Our travel consultants and group planners visit parts of the world unknown by many. As technology is constantly evolving, so is the team at Ellison, updating our skills and knowledge to keep up with the ever-changing travel industry and to better our service to you, our valued clients. To a large extent it is Doug’s dedication, energy and commitment to the business he loves that inspires the Ellison Travel team to achieve in a fast-paced and challenging market.
                Ellison Travel is committed to sustainable travel, business and community.  As a travel company we are aware that our business has a powerful impact on the lives and outlook of not only our clients, but also the areas of the world that they visit and we are dedicated to ensuring that while our clients’ travel needs are met, we are also giving back to the global community.  We are dedicated to the fight against global warming and minimizing our overall footprint on the environment. We understand that people are meant to explore and enjoy the freedom to discover and experience a new place and by working together, we can continue to satisfy our natural curiosity for a foreign land and visit our favourite corners of the world.
                </p>
                <br />
                
                <h1 style={{ color: 'green' }} className = "inlineS">  Flight  </h1>     
                <p 
                    class="lineDikey"
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                    Ellison Travel’s 3 divisions, Group, Vacation & Cruises and Corporate Travel, work together, sharing knowledge and experience, a cross-over that works to your advantage. 
                    Customized tour planning for adult special interest groups and student groups is our specialty! Our tour planners are experienced and well-travelled, having personally visited many of the locations we plan tours to worldwide.  We have flown with the airlines, stayed in the hotels, eaten at the restaurants and visited the attractions in order to better assist you with your travel planning.  Wherever you want to go, whatever your interest is, we work with you to design your tour… your way. 
                    The Vacation & Cruises department, operating out of all three locations, has experienced counsellors who are constantly upgrading their travel knowledge.  We personally inspect the airlines, hotels, resorts and attractions so we can better assist you and recommend the cruise, sun holiday, flight, hotel, car rental or tourist attraction to fit your perfect holiday.
                    Our Corporate Travel department assists business travellers with flights, accommodation and car rentals to destinations around the world plus handle arrangements for incentive travel and meeting planning for corporate groups. Your time is valuable!  We know travel – let us take the stress out of it – it’s what we do!
                </p>
                <br/>
                {/* <h1 style={{ color: '#696969'}} className = "spaceTop">
                    <img style={{width:'100%',marginTop:'15'}} src={plane} alt="plane"/>
                </h1> */}
                <br />
                <h1 style={{ color: 'green' }} className = "inlineS">What do we do </h1>
                <ul
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                    <li>24-hour cancellation policy</li>
                    <li>The lowest price guarantee</li>
                    <li>Millions of customer reviews</li>
                    <li>24/7 multilingual customer care</li>
                </ul>
                <p 
                    class="lineDikey"
                    style={{ fontSize:'18px',color: '#696969'}} 
                    className="inlineS"
                >
                    Our travel consultants and group planners visit parts of the world unknown by many. As technology is constantly evolving, so is the team at Ellison, updating our skills and knowledge to keep up with the ever-changing travel industry and to better our service to you, our valued clients. To a large extent it is Doug’s dedication, energy and commitment to the business he loves that inspires the Ellison Travel team to achieve in a fast-paced and challenging market. Ellison Travel is committed to sustainable travel, business and community. As a travel company we are aware that our business has a powerful impact on the lives and outlook of not only our clients, but also the areas of the world that they visit and we are dedicated to ensuring that while our clients’ travel needs are met, we are also giving back to the global community. We are dedicated to the fight against global warming and minimizing our overall footprint on the environment.                     
                </p>
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
            </React.Fragment>
        );
    }
}

export default AboutPage;