import React from 'react'
import BookComponent from './BookComponent'
const BookShelfComponent = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            // add book component
            <BookComponent />
          </li>
          <li>
            //add book component
            <BookComponent />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default BookShelfComponent
