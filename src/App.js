import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import AddStartup from './pages/AddStartup';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Route path='/' exact >
        <Home />
      </Route>
      <Route path='/addstartup' exact >
        <AddStartup />
      </Route>
    </Router>
    </div>
  );
}

export default App;
