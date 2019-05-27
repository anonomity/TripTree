import React, {Component} from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
  } from 'antd';
import 'antd/dist/antd.css';
import firebase_app from "../base";
import TV from "../components/Trip_View";


  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  class UserPage extends Component {
    render() {
      return (
        <form class = "ui form">
          <div>
              <TV/>
          </div>
        </form>
        );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'UserPage' })(UserPage);
  
  export default UserPage;