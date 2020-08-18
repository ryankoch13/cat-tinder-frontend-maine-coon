import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockCats from '../mockCats.js';
import { NavLink } from 'react-router-dom';


export class CatsHome extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h4>Name: {this.props.cat.name} </h4>
                    <p>Age: {this.props.cat.age} </p>
                    <p>Enjoys: {this.props.cat.enjoys} </p>
                </div>
                <NavLink to ={ `/catindex` }>
                    <p>Back to Index!</p>
                </NavLink>
                <Footer />
            </div>
        )
    }
}

export default CatsHome
