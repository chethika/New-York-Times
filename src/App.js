import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';

import './App.css';
import Details from './components/books/Details';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <React.Fragment>
        <div className="App">
         <Navbar/>
         <div className="container">
           <Switch>
             <Route exact path="/" component={Index}/>
             <Route exact path="/books/:isbn10" component={Details}/>
           </Switch>
         </div>
        </div>
        </React.Fragment>
       </Router>
      </Provider>
      
     
    )
  }
}

export default App;