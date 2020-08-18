import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatIndex from '../CatIndex.js';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()})

it('renders the cat index', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h3').text()).toEqual('This is cat #1');
    // expect(catIndex.find('h3').text()).toEqual('This is cat #2');
})
