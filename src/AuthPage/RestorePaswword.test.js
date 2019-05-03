import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer'

test('LoginForm Page renders correctly', () => {
    const tree = renderer.create(<NormalLoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
});





import React from 'react';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer';

test('LoginForm Page renders correctly', () => {
    const tree = renderer.create(<NormalLoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
});


2.calisan ayni kod yukardakiyle 

import React from 'react';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer';

describe('My component',() => {
    it('LoginForm Page renders correctly', () => {
        const tree = renderer.create(<NormalLoginForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

----------------------------------------
Test yerine it de yazabilridk yukardaki gibi


import React from 'react';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer';

describe('My component',() => {
    test('LoginForm Page renders correctly', () => {
        const tree = renderer.create(<NormalLoginForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});





1.Odev Daha Guzel bunu ver 
------------------

import React from 'react';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer';

describe('My component',() => {
    test('LoginForm Page renders correctly', () => {
        const tree = renderer.create(<NormalLoginForm />).toJSON(true);
        expect(tree).toMatchSnapshot();
    });
});



2.Odev

import React from 'react';
import NormalLoginForm from './LoginFrom';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

it('renders children when passed in', () => {
    const wrapper = shallow((
      <FormItem>
        <div className="submit_button login-form-button" />
      </FormItem>
    ));
    expect(wrapper.contains(<div className="submit_button login-form-button" />)).toBe(true);
  });








Toplam calisan
===================



import React from 'react';
import FormItem from './LoginFrom';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import NormalLoginForm from './LoginFrom';

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


3.Odev calisiyor ama eksik duzelt biseyler

it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toBeTruthy();
  });


import React from 'react';
import Button from './LoginFrom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {handleSubmit } from './RestorePassword';

configure({ adapter: new Adapter() });


it('restorePassword Submitting ', () => {
    const wrapper = shallow((
        <Button>
            <div  className="submit_button login-form-button" />
        </Button>
    ));
    expect(wrapper.contains(<div className="submit_button login-form-button" />)).toBe(true);
});


