import React, { Component } from 'react'
import './App.css';
import mockCats from './mockCats.js'
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
  render(props) {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path = "/" component={ CatsHome }/>
              <Route path = "/catindex" component ={ CatIndex }/>
              <Route path = "/catshow/:id" component ={ CatShow }/>
              <Route path = "/catnew" component ={ CatNew }/>
              <Route path = "/catedit/:id" component ={ CatEdit }/>
              <Route component ={ NotFound }/>
            </Switch>
          </Router>
        </React.Fragment>
    )
  }
}


export default App;
