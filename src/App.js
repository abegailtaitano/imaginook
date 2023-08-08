import React, { useState } from 'react';
import './App.css';
import { searchBooks, retrieveBookDetails } from './api';
import BookCard from './components/bookCard';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async () => {
    if (query) {
      const items = await searchBooks(query);
      setBooks(items);
    }
  };

  const handleBookSelection = async (bookId) => {
    const bookDetails = await retrieveBookDetails(bookId);
    setSelectedBook(bookDetails.volumeInfo);
  };

  return (
    <div className="App">
      <h1>IMAGINOOK</h1>
      <div>
        <input
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <div
            key={book.id}
            className={`book-item ${selectedBook && selectedBook.title === book.volumeInfo.title ? 'selected' : ''}`}
            onClick={() => handleBookSelection(book.id)}
          >
            {book.volumeInfo.title}
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="selected-book">
          <BookCard
            title={selectedBook.title}
            authors={selectedBook.authors}
            description={selectedBook.description}
            thumbnail={selectedBook.imageLinks?.thumbnail || ''} />
        </div>
      )}
    </div>
  );
}

export default App;

