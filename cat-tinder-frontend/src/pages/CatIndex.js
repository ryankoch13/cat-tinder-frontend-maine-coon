import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';


export class CatsHome extends Component {
    render() {
        console.log( this.props.cats )
        return (
            <div>
                <Header />
                    <h3>All the Cats</h3>
                    { this.props.cats.map((cat, index) => {
                        return(
                            <div key={index}>
                                <NavLink to = {`/catshow/${cat.id}`}>
                                <h4> {cat.name} </h4>
                                </NavLink>
                                <p> {cat.age} </p>
                                <p> {cat.enjoys} </p>
                            </div>
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
