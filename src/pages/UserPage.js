import React, {Component} from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
  } from 'antd';
import 'antd/dist/antd.css';
import firebase_app from "../base";
import TourGuidePage from './TourGuidePage';
import TouristPage from './TouristPage';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  class UserPage extends Component {

    render() {
      return (
        localStorage.getItem('user-type') === true || localStorage.getItem('user-type') === 'tour-guide' ?
        <TourGuidePage />
        : 
        <TouristPage />
      )
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'UserPage' })(UserPage);
  
  export default UserPage;