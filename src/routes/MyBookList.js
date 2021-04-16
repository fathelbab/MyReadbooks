import React from 'react'
import { BookShelfComponent } from '../components/index'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

const MyBookList = ({ books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {books.length === 0 && <h3>Loading Your books . . . .</h3>}
        {books.length > 0 && (
          <div>
            <BookShelfComponent
              BookShelfTitle={'Currently Reading'}
              books={books.filter(book => book.shelf === 'currentlyReading')}
              updateShelf={updateShelf}
            />
            <BookShelfComponent
              BookShelfTitle={'Want to read'}
              books={books.filter(book => book.shelf === 'wantToRead')}
              updateShelf={updateShelf}
            />
            <BookShelfComponent
              BookShelfTitle={' Read'}
              books={books.filter(book => book.shelf === 'read')}
              updateShelf={updateShelf}
            />
          </div>
        )}
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyBookList
