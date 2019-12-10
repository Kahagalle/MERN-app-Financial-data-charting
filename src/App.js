import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import GetIndicatorList from './components/get-indicator-list.component';
import AddIndicator from './components/add-indicator.component';
import GetUser from './components/get-user.component';
import AddUser from './components/add-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/indicators" exact component={GetIndicatorList} />
        <Route path="/indicators/add" exact component={AddIndicator} />
        <Route path="/user" exact component={GetUser} />
        <Route path="/users/add" exact component={AddUser} />
      </div>
    </Router>
  );
}

export default App;
