import React, {Component} from 'react'
import {BookShelfComponent} from '../components/index'
import {Link} from 'react-router-dom'


class MyBookList extends Component {


    render(){
        return(

              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <BookShelfComponent/>
                <BookShelfComponent/>
                <BookShelfComponent/>
    
                </div>
                <div className="open-search">
                    <Link to="/search">
                  <button >
                  Add a book
                  </button>
                  </Link>
                </div>
              </div>
            
        )
    }
}

export default MyBookList