import React from 'react';
import FormItem from './LoginFrom';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import NormalLoginForm from './LoginFrom';
import sinon from 'sinon';
import {Button} from 'antd';
import closeModal from './LoginFrom';
// import Button from './LoginFrom';
configure({ adapter: new Adapter() });


describe('My component',() => {
    test('LoginForm Page renders correctly', () => {
        const tree = renderer.create(<NormalLoginForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


it('renders children when passed in', () => {
    const wrapper = shallow((
      <FormItem>
        <div className="submit_button login-form-button" />
      </FormItem>
    ));
    expect(wrapper.contains(<div className="submit_button login-form-button" />)).toBe(true);
  });


  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toBeTruthy();
  });




