import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export class CatsHome extends Component {
    render() {
        return (
            <div>
                <Header />
                    <h3>All the Cats</h3>
                    { this.props.cats.map((cat, index) => {
                        return(
                            <h4 key={index}>{cat.name}</h4>
                        )
                    })}
                    {/* <h3>This is cat #1</h3>
                    <h3>This is cat #2</h3> */}
                <Footer />
            </div>
        )
    }
}

export default CatsHome
