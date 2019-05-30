import React, {Component} from 'react';
import { Form, Input, Select, Checkbox, Button, AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import firebase_app from "../base";
import tour1 from '../images/tour1.PNG';
import tour2 from '../images/tour2.PNG';
import profilePicture from '../images/default_profile_picture.jpg';
import './page.css';
import { Label, Menu, Tab, Icon,  Loader } from 'semantic-ui-react';
import {
  Router,
  Route,
  Link,BrowserRouter
} from "react-router-dom";
import logo from '../images/logo.png';

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const FormItem = Form.Item;
  
  class TourGuidePage extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      userInfos: [],
    };

    getUserData = () => {
      let ref = firebase_app.database().ref('triptree-39cc6').child('users').child('rrvRtgOgZIIC4Y6VIKKE');
      ref.on('value', snapshot => {
        const state = snapshot.val();
        this.setState(state);
      });
      console.log('DATA RETRIEVED');
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state) {
        this.writeUserData();
      }
    }
  
    handleSignUp = async event => {
      event.preventDefault();
      const { register_email, register_password } = event.target.elements;
      try {
        const user = await firebase_app
          .auth()
          .createUserWithEmailAndPassword(register_email.value, register_password.value);
      } catch (error) {
        alert(error);
      }
    };
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { user } = this.state.userInfos;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );
  
      return (
        <>
          <div id="userPageHeader">
            <img src={profilePicture} alt="Profile picture" id="userProfilePicture" />
            <h1 id="userName">User Name</h1>
            <h3 id="userLocation">Wroclaw, Poland</h3>

            <p>Ready to explore new city...</p>
          </div>

          <div id="user_info">
            <Form>
                <ul>
                    <li>Email : <input value={firebase_app.auth().currentUser.email} /></li>
                    <li>Phone number : <input value={firebase_app.auth().currentUser.phoneNumber} /></li>
                    <li>Country : <input value={firebase_app.database().ref().child('triptree-39cc6').child('users/').child('rrvRtgOgZIIC4Y6VIKKE/').email} /></li>
                    <li>City : <input value={this.state.userInfos} /></li>
                    <li>Age : <input value="" /></li>
                    <li>Sexe : <input value="" /></li>
                    <li>Language spoken : <input value="" /></li>
                    <li>Trips </li>
                    <img class ="resize" src={tour1} alt="tour1" />
                    <img class ="resize" src={tour2} alt="tour2" />
                    <li><input type="submit" value="Add More Trips" /></li>
                    <li><input type="submit" value="Save informations" /></li>
                    
                </ul>
            </Form>
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
        </>
      );
    }
  }
  
  const WrappedUserPageForm = Form.create({ name: 'TourGuidePage' })(TourGuidePage);
  
  export default WrappedUserPageForm;