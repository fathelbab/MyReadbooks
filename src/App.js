import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import { SearchPage, MyBookList , PageNotFound404} from './pages/index'
import {getAll} from './utils/BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await getAll()
    console.log(books)
    this.setState({books})
  }

  render() {
    const {books} = this.state
    return (
        <Router>
          <Switch>
          <Route path="/" exact render={() => <MyBookList books={books}/>} />
          <Route path="/search" exact render={() => <SearchPage books={books}/>} />
        <Route path="/404" exact  component={PageNotFound404}/>
        <Redirect to="/404"/>
        </Switch>
        </Router>
      
    )
  }
}

export default BooksApp
