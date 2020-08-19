import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Redirect} from 'react-router-dom';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';


export class CatsHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                enjoys: "",
            },
            success: false
        }      
    }
    
    handleChange = (e) => {
        let {form} = this.state;
        form[e.target.name] = e.target.value;
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.createNewCat(this.state.form)
        this.setState({ success: true })
    }

    render() {
        return (
            <div>
                <Header />
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input 
                            type = "text"
                            name = "name"
                            value = {this.state.form.name} 
                            onChange = {this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input
                            type = "number"
                            name = "age"
                            value = {this.state.form.age}
                            onChange = {this.handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Enjoys</Label>
                        <Input
                            type = "text"
                            name = "enjoys"
                            value = {this.state.form.enjoys} 
                            onChange = {this.handleChange}
                        />
                    </FormGroup>
                    <Button name="submit" color="secondary"
                    onClick = { this.handleSubmit }>
                        Submit
                    </Button>
                </Form>
                <Footer />
            { this.state.success && <Redirect to = "/catindex" />}
            </div>
        )
    }
}

export default CatsHome
