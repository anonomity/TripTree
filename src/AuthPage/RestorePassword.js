import React, {Component} from 'react';
import {  Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

class NormalRestorePassword extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="restore-form">
                <FormItem>
                    <h3>Enter your email to recover password:</h3>
                    {getFieldDecorator('userEmail', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="E-mail" />
                    )}
                    <Button type="primary" htmlType="submit" className="submit_button login-form-button">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalRestorePassword = Form.create()(NormalRestorePassword);

export default WrappedNormalRestorePassword;