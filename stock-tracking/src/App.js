import React from 'react';
import {  BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TopNav from './components/TopNav';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <TopNav />
      <h1>stock trading app</h1>
    </div>
    <Route path="/login">
      <Login />
    </Route>
  </Router>
  );
}

export default App;
