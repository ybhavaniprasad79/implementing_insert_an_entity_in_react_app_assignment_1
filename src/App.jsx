// src/App.jsx

import React,{useState} from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/addBook';
import './App.css'; // Import global styles

function App() {

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
