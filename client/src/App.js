import React from 'react';
import './App.css';
import { Router } from "@reach/router"
import { Home } from './Pages/Home';
import { NewForm } from './Pages/NewForm';
import { Details } from './Pages/Details';
import { Edit } from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Home path="/" />
        <NewForm path="/pets/new" />
        <Details path="/pets/:id" />
        <Edit path="pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
