// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import reactRouterDom from 'react-router-dom';
import Home from './Home.js'
import Navbar from './Navbar.js';
import GetStudents from './GetStudents.js';
import AddStudent from './AddStudent.js';
import UpdateStudent from './UpdateStudent.js';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/GetStudents" component={GetStudents} />
          <Route path="/AddStudent" component={AddStudent} />
          <Route path="/UpdateStudent" component={UpdateStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
