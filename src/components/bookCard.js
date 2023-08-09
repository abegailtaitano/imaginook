import React from 'react';


const BookCard = ({ title, authors, description, thumbnail}) => {
  return (
    <div className="book-card" onClick={(e) => e.stopPropagation()}>
        <div className="book-thumbnail"></div>
        <img src={thumbnail} alt={title} />
      <h2 className="book-title">{title}</h2>
      <p className="book-authors">Authors: {authors.join(', ')}</p>
      <p dangerouslySetInnerHTML={{__html:description}}
      className="book-description"></p>
    </div>
  );
};

export default BookCard;
