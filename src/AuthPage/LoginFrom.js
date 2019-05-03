import React, {Component} from 'react';
import {Form, Icon, Input, Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import NormalRestorePassword from "./RestorePassword";
import {login} from '../connect/connectService';


const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login(this.state.username, this.state.password).then(responseJson =>
                    console.log(responseJson)
                );
                console.log('Received values of form: ', values);
            }
        });
    };
    state = {
        ModalText: '',
        visible: false,
        footer: null,
        formVisible: true,
        username: '',
        password: ''
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    closeModal = () => {
        this.setState({
            visible: false,
        });
    };
    handleOk = (values) => {
        this.setState({
            ModalText:
                <div>
                    <h1>Done.</h1>
                    <p>The confirmation letter with recovery link was sent to {values.userEmail}.</p>
                    <p>Go and check your inbox.</p>
                </div>,
            formVisible: false,
            footer: <Button type="primary" onClick={this.closeModal}>Ok</Button>
        });
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    render() {
        const {visible, ModalText, footer, formVisible} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={e => this.setState({username: e.target.value})}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"
                                   value={this.state.password}
                                   onChange={e => this.setState({password: e.target.value})}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="submit_button login-form-button">
                            Enter
                        </Button>


                    </FormItem>
                </Form>
                        <a href="#" onClick={this.showModal} className="login-form-forgot">Recover password?</a>
                <Modal
                    title="Password recovering"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
                    {ModalText}
                    {formVisible === true &&
                    <NormalRestorePassword onSubmit={this.handleOk}/>
                    }
                </Modal>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;