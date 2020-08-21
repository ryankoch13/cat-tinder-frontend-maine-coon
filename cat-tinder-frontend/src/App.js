import React, { Component } from 'react';
import './App.css';
// import mockCats from './mockCats.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import CatsHome from './pages/CatsHome.js';
import CatIndex from './pages/CatIndex.js';
import CatShow from './pages/CatShow.js';
import CatNew from './pages/CatNew.js';
import CatEdit from './pages/CatEdit.js';
import NotFound from './pages/NotFound.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // cats: mockCats,
      cats: []
    }
  }

  //Fetch for our Index and Show Methods
  componentDidMount() {
    fetch('http://localhost:3000/cats')
    .then(response => {
      if (response.status === 200) {
        console.log(response.json)
        return response.json();
      }
    })
    .then(catsArray => {
      this.setState({cats: catsArray})
    })
    .catch(errors => {
      console.log(errors);
    })
  }

    //Fetch for our Index and Show Methods
  createNewCat = (newCat) => {
    fetch('http://localhost:3000/cats', {
      body: JSON.stringify(newCat),
      headers: { "Content-Type": "application/json"},
      method: "POST"
    })
    .then(response => {
      if (response.status === 200) {
        this.componentDidMount();
      } else {
        alert ("Please retry filling out form with new inputs")
      }
      return response;
      })
    .catch (errors => {
      console.log(errors);
    })
  }


  editCat = (editcat, id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if (response.status === 200) {
        this.componentDidMount()
      } else {
        alert ("Update Unsuccessful")
      }
      return response
    })
    .catch(errors => {
      console.log("edit errors", errors)
    })
  }


  deleteCat = (id) => {
    return fetch (`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 200) {
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

    
  
  render() {
    console.log(this.state.cats);
    return (
        <React.Fragment>
          {/* -----ROUTERS----- */}
          <Router>
            <Switch>
              <Route exact path = "/" component={ CatsHome }/>
              <Route 
                path = "/catindex" 
                render= { (props) => <CatIndex cats={this.state.cats} /> } 
              />
              <Route 
                exact path = {"/catshow/:id"} 
                render = { (props) => {
                  let id = props.match.params.id
                  let cat = this.state.cats.find (cat => cat.id === parseInt(id))
                  console.log(cat);
                  return(
                    <CatShow cat={ cat } deleteCat = {this.deleteCat} />
                  )
                }}
              />
              <Route 
              path = "/catnew" 
              render = { (props) => <CatNew createNewCat= { this.createNewCat }/> }
              />
              <Route exact path={"/catedit/:id"}
                render= { (props) => {
                  let id = props.match.params.id
                  let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                  return(
                    <CatEdit
                      editCat={ this.editCat }
                      cat={ cat }
                    />
                    )
                }}
              />
              <Route path={"/catdelete/:id"}/>
              <Route component ={ NotFound }/>
            </Switch>
          </Router>
        </React.Fragment>
    )
  }
}


export default App;
