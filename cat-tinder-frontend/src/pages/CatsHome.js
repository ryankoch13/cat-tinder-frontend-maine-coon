import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockCats from '../mockCats.js'

export class CatsHome extends Component {
    render() {
        return (
            <div>
                <Header />
                    <p>{this.props.catData.mockCats}</p>
                    <p> Hello </p>
                

                <Footer />
            </div>
        )
    }
}

export default CatsHome
