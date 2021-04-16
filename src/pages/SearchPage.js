import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BookComponent } from '../components/index'
import { search } from '../utils/BooksAPI'


const searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]
class SearchPage extends Component {
  state = {
    books: []
  }


  searchHandling = event => {
    const query = event.target.value.trim()
    search(query).then(response => {

      if (response && 'error' in response) {
        console.log('No books with thi name')
      } else {
        this.setState(prevState => ({
          books: response.map(book => {
            if (!('shelf' in book)) {
              book.shelf = 'none'
            }
            if (this.props.books.some(b => b.id === book.id)) {
              const currentBookArr = this.props.books.filter(
                b => b.id === book.id
              )
              book.shelf = currentBookArr[0].shelf
            }
            return book
          })
        }))
      }
    })
  }

  render() {
    const { updateShelf } = this.props

    const { books } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchHandling}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books &&
              books.length > 0 &&
              books.map(book => (
                <BookComponent
                  key={book.id}
                  book={book}
                  updateShelf={updateShelf}
                />
              ))}
          </ol>

          {books && books.length === 0 &&  <div>
            <h3>Try the following key words</h3>
            <p>{searchTerms && searchTerms.join(', ')}</p>
            </div>}
        </div>
      </div>
    )
  }
}

export default SearchPage
