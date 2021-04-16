import React from 'react'
import BookComponent from './BookComponent'
const BookShelfComponent = ({ title, books, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <BookComponent
              book={book}
              key={book.id}
              updateShelf={updateShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelfComponent
