// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";

import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    
      

      <button type="button" onClick={() => navigate("/add-book")}>Add Books</button>
    

    </div>
  );
};

export default Home;
