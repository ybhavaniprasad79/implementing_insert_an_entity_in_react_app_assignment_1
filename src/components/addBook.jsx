import React, { useState } from "react";
import "./addBook.css"; // Import the CSS file
import books from "../booksData";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const submitData = (e) => {
    e.preventDefault();
    const newBooks={
        id:books.length+1,
        ...formData,
     };
    console.log("New book added:", newBooks);
    setFormData({
      title: "",
      author: "",
      description: "",
      coverImage: "",
    });

    navigate('/');
  };

 

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={submitData}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter book title" />

        <label>Author</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Enter author's name" />

        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter book description" />

        <label>Cover Image URL</label>
        <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Enter image URL" />

        {formData.coverImage && (
          <img src={formData.coverImage} alt="Book Cover" />
        )}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
