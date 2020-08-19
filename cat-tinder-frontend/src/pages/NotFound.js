import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export class CatsHome extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>404 Page Not Found</h3>

                <Footer />
            </div>
        )
    }
}

export default CatsHome
