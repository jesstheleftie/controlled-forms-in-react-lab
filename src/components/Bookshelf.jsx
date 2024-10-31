import { useState } from "react";

const Bookshelf = () => {
  //   const [newBook, setNewBook] = useState({});

  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [formData, setFormData] = useState({
    bookName: "",
    bookAuthor: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title: formData.bookName, author: formData.bookAuthor };
    setBooks((prevBooks) => [...prevBooks, newBook]);
    //clears form after submitting
    setFormData({ bookName: "", bookAuthor: "" });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setNewBook(event.target.value);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bookName">Title: </label>
          <input
            id="bookName"
            name="bookName"
            value={formData.bookName}
            onChange={handleChange}
          />
          <label htmlFor="bookAuthor">Author: </label>
          <input
            id="bookAuthor"
            name="bookAuthor"
            value={formData.bookAuthor}
            onChange={handleChange}
          />
         
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h3>{book.title}</h3>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
