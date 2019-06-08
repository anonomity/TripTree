import React, {Component} from 'react';
import {
    Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, AutoComplete,
  } from 'antd';
import 'antd/dist/antd.css';
import firebase_app from "../base";
import TV from "../components/Trip_View";
import TourGuidePage from './TourGuidePage';
import TouristPage from './TouristPage';
import {
  Link
} from "react-router-dom";
import logo from '../images/logo.png';
import { Label, Menu, Tab, Icon, Button, Loader } from 'semantic-ui-react';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
  
class UserPage extends Component {
    render() {
      return (
        localStorage.getItem('user-type') === true || localStorage.getItem('user-type') === 'tour-guide' ?
        <TourGuidePage />
        :
        <TV />

      );
    }
  }
    
  export default UserPage;