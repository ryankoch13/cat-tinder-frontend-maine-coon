import React, { Component } from 'react';
import './App.css';
import mockCats from './mockCats.js';
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
      cats: mockCats,
    }
  }
  
<<<<<<< HEAD
  render(props) {
=======
  render() {
    console.log(this.state.cats);
>>>>>>> b81ba12c2b1ecf9e679d545914f04e4de3a83550
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
                    <CatShow cat={cat}/>
                  )
                }}
              />
              <Route path = "/catnew" component ={ CatNew }/>
              <Route path = "/catedit/:id" component ={ CatEdit }/>
              <Route component ={ NotFound }/>
            </Switch>
          </Router>

          {/* -----PROPS----- */}
        
         


        </React.Fragment>
    )
  }
}


export default App;
