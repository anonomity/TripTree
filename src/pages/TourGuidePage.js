import React, {Component} from 'react';
import { Form, Input, Select, Checkbox, Button, AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import firebase_app from "../base";

import profilePicture from '../images/default_profile_picture.jpg';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const FormItem = Form.Item;
  
  class TourGuidePage extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      userEmail: "",
      userPhoneNumber: "",
      userType: "",
    };

    getUserData = () => {
      let ref = firebase_app.database().ref('users');
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
      const { autoCompleteResult } = this.state;
  
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
            <img src={profilePicture} alt="Profile picture" />
            <h1>{this.state.currentUser}</h1>
            <h3>Wroclaw, Poland</h3>

            <p>Ready to explore new city...</p>
          </div>

          <div id="user_info">
            <Form>
                <ul>
                    <li>Email : <input value={firebase_app.auth().currentUser.email} /></li>
                    <li>Phone number : <input value={firebase_app.auth().currentUser.phoneNumber} /></li>
                    <li>Country : <input value={firebase_app.database().ref().child('triptree-39cc6').child('users/').child('rrvRtgOgZIIC4Y6VIKKE/').email} /></li>
                    <li>City : <input value={this.state.userEmail} /></li>
                    <li>Age : <input value="" /></li>
                    <li>Sexe : <input value="" /></li>
                    <li>Language spoken : <input value="" /></li>
                    <li><input type="submit" value="Save informations" /></li>
                </ul>
            </Form>
          </div>

          <Form {...formItemLayout} onSubmit={this.handleSignUp}>
            <Form.Item
              label="email"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="password"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )}
            </Form.Item>
            <Form.Item
              label="Confirm Password"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </Form.Item>
            <Form.Item
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>
          </Form>
        </>
      );
    }
  }
  
  const WrappedUserPageForm = Form.create({ name: 'TourGuidePage' })(TourGuidePage);
  
  export default WrappedUserPageForm;