import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import CatIndex from './pages_css/CatIndex.css';

// Reactstrap Imports
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

//------------------------------------//
export class CatsHome extends Component {
    render() {
        console.log( this.props.cats )
        return (
            <div>
                <Header />
                    <h3>All the Cats</h3>
                    <Container>
                        { this.props.cats.map((cat, index) => {
                            // if( index % 2 == 0) {
                                return(
                                    <div key={index}>
                                        <Card>
                                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                                <CardBody>
                                                    <NavLink to = {`/catshow/${cat.id}`}>
                                                        <CardTitle>
                                                            {cat.name}  
                                                        </CardTitle>
                                                    </NavLink>
                                                    <CardSubtitle>
                                                        About: {cat.enjoys}
                                                    </CardSubtitle>
                                                    <CardText>
                                                        Age: {cat.age}
                                                    </CardText>
                                                    <Button>Button</Button>
                                                </CardBody>
                                        </Card>
                                    </div> 
                                )
                            // } //end of first if
                            // if( index % 2 !== 0) {
                            //     return(
                            //         <div key={index} style={{float: 'right'}}>
                            //             <Card>
                            //                 <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            //                     <CardBody>
                            //                         <NavLink to = {`/catshow/${cat.id}`}>
                            //                             <CardTitle>
                            //                                 {cat.name}  
                            //                             </CardTitle>
                            //                         </NavLink>
                            //                         <CardSubtitle>
                            //                             About: {cat.enjoys}
                            //                         </CardSubtitle>
                            //                         <CardText>
                            //                             Age: {cat.age}
                            //                         </CardText>
                            //                         <Button>Button</Button>
                            //                     </CardBody>
                            //             </Card>
                            //         </div> 
                            //     )
                            // } //end of second if                
                        })}   
                    </Container>
                <Footer />
            </div>
        )
    }
}                               
                                
export default CatsHome

