// src/App.jsx

import React,{useState} from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/addBook';
// import booksData from './booksData';
import './App.css'; // Import global styles

function App() {

  // const [books, setBooks] = useState(booksData);

  // const addBook = (newBook) => {
  //   setBooks([...books, newBook]);
  // };
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
