import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../layout/Spinner';

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            books:[],
        };
    }

    componentDidMount(){
      axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=9fXXG1PxzkUIik2GozGDY1CniZTJV5Zy'
        )

      .then(res => { 
          this.setState({books: res.data.results.books});
      })
      .catch(err => console.log(err));
    }

    render() {
      if (this.state.books.length === 0) {
        return <Spinner/>
      }
      
      for (var i = 0; i < this.state.books.length; i++) {
          if (this.state.books[i].primary_isbn10 === this.props.match.params.isbn10){
            return (
              <React.Fragment>
              <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
              <div className="card">
              <h5 className="card-header">
                  {this.state.books[i].title} 
              </h5>
               
               <div className="card-body">
               <img src= {this.state.books[i].book_image} alt="" width="150px" height="250px"></img>
               </div>
              </div>
        
            <ul className="list-group mt-3">
                <li className="list-group-item">
                    <strong>Author</strong>: {this.state.books[i].author}
                </li>
                <li className="list-group-item">
                    <strong>Description</strong>: {this.state.books[i].description}
                </li>
                <li className="list-group-item">
                    <strong>Publisher</strong>: {this.state.books[i].publisher}
                </li>
                <li className="list-group-item">
                    <strong>ISBN 10</strong>: {this.state.books[i].primary_isbn10}
                </li>
                <li className="list-group-item">
                    <strong>ISBN 13</strong>: {this.state.books[i].primary_isbn13}
                </li>
                <li className="list-group-item">
                    <strong>Book URI</strong>: {this.state.books[i].book_uri}
                </li>
            </ul>
              <br/>
            <div>
                <a href = {this.state.books[i].amazon_product_url}
                className="btn btn-dark btn-block">
                <i className="fas fa-chevron-right"></i>  Buy Now On Amazon
                </a>
            </div>
           <br/>
           
           </React.Fragment>
            );
          }
      }
   
  }
}

export default Details;