import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions";

const Products = (props) => {
  console.log(props
    );
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/Cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div key={book.id}  className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};


export default connect(mapStateToProps, {sepeteEkle})(Products);
