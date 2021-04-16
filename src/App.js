import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import './App.css'
// Imported Routes
import { SearchPage, MyBookList, PageNotFound404 } from './routes/index'

// imported API's
import { getAll, update } from './utils/BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await getAll()
    console.log(books)
    this.setState({ books })
  }

  updateShelf = (book, shelf) => {
    update(book, shelf)
      .then(() => {
        const { books } = this.state

        book.shelf = shelf
        this.setState({
          books: [...books.filter(b => b.id !== book.id), book]
        })
      })
      .catch(console.error)
  }
  render() {
    const { books } = this.state
    return (
      <Router>
        <Switch>
          
          <Route
            path="/"
            exact
            render={() => (
              <MyBookList books={books} updateShelf={this.updateShelf} />
            )}
          />
          <Route
            path="/search"
            exact
            render={() => (
              <SearchPage books={books} updateShelf={this.updateShelf} />
            )}
          />
          <Route path="/404" exact component={PageNotFound404} />
          <Redirect to="/404" />

        </Switch>
      </Router>
    )
  }
}

export default BooksApp
