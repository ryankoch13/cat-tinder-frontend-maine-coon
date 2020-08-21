import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import mockCats from '../mockCats.js';
import { NavLink, Redirect } from 'react-router-dom';
import {Button} from 'reactstrap';
import './pages_css/CatShow.css';

class CatShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            isDeleted: false
        }
    }

    handleClick = () => {
        this.props.deleteCat(this.props.cat.id);
        this.setState( {isDeleted: true} );
        console.log("Handle Click!")
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <img src = {`${this.props.cat.image}`} alt="Profile pic"/>
                    <h4>Name: {this.props.cat.name} </h4>
                    <p>Age: {this.props.cat.age} </p>
                    <p>Enjoys: {this.props.cat.enjoys} </p>
                </div>
                <NavLink to ={ `/catindex` }>
                    <p>Back to Index!</p>
                </NavLink>
                <Footer />
                <Button onClick = {this.handleClick}>
                    Delete Cat
                </Button>
                <NavLink to = {`/catedit/${this.props.cat.id}`}>
                    <Button>Edit Cat</Button>
                </NavLink>
                {this.state.isDeleted && <Redirect to = "/catindex" />}

            </div>
        )
    }
}

export default CatShow
