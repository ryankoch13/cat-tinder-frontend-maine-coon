import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatsHome from '../CatsHome.js';
import {shallow} from 'enzyme';


Enzyme.configure({adapter: new Adapter()})

it('renders the cat index', () => {
    const catsHome = shallow(<CatsHome />)
    expect(catsHome.find('p').text()).toEqual(' Hello ');
    // expect(catIndex.find('h3').text()).toEqual('This is cat #2');
})





