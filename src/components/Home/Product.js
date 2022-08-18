import React from 'react';

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const { productName, price, wight, imageURL, _id } = props.product;


    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">Stock: {wight} kg</p>
                    <p className="card-text">Price: {price} tk. per kg</p>
                    <button onClick={() => handleAddToCart(props.product, _id)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;