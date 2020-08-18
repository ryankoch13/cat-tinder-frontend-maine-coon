import React from 'react';
import Enzyme from 'enzyme';
import Footer from '../Footer.js'
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()})

it ('renders the footer', () => {
    const footer = shallow(<Footer/>);
    expect(footer.find('h5').text()).toEqual('Developed by: Ryan Koch & Trip Moore');
})