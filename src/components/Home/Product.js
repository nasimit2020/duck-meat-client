import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const { productName, price, wight, imageURL} = props.product;

    return (
        <div className="col ">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top h-50 img-thumbnail" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">Stock: {wight} kg</p>
                    <p className="card-text">Price: {price} tk. per kg</p>
                </div>
                <div className="card-footer">
                    <Link className="nav-link" to="/checkOut">
                        <button onClick={() => handleAddToCart(props.product)} className="btn btn-warning">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;