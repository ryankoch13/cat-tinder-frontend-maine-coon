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
    console.log(newCat)
  }

  editCat = (editCat, id) => {
    console.log("editCat:", editCat)
    console.log("id:", id)
  }

  deleteCat = (id) => {
    console.log("deledCatId:", id)
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
                render={ (props) => <CatIndex cats={this.state.cats} /> } 
              />
              <Route 
                path = "/catshow/:id" 
                render = { (props) => {
                  let id = props.match.params.id
                  let cat = this.state.cats.find (cat => cat.id === parseInt(id))
                  return(
                    <CatShow cat={cat} deleteCat = {this.deleteCat}/>
                  )
                }}
              />
              <Route 
              path = "/catnew" 
              render = { (props) => <CatNew createNewCat= { this.createNewCat }/> }
              />
              <Route exact path={"/catedit/:id"}
                render={ (props) => {
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
