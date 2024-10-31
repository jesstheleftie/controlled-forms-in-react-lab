// src/App.jsx

import Bookshelf from "./components/Bookshelf.jsx";
import { useState } from "react";

const App = () => {
  const [books, setBooks]= useState([])
  const addBook = (newBook) =>{
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };
  
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf books={books} addBook={addBook}/>
    </>
  );
};

export default App;
