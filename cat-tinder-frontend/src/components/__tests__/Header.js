import React from 'react';
import Enzyme from 'enzyme';
import Header from '../Header.js'
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()})

it ('renders the header', () => {
    const header = shallow(<Header/>);
    expect(header.find('h1').text()).toEqual('Cat Tinder.');
})