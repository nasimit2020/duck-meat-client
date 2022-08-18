import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + parseFloat(product.price) * product.quantity;
    }
    let tax = total * .10 ;
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h5>Shopping Cart</h5>
                <h6>Items Addeded: { quantity }</h6><hr />
            </div>
            <p>Total: ${total}</p>
            <p>Tax: ${tax }</p>
            <p>Grand Total: ${ total + tax }</p>
            <Link to="/checkOut" className="btn btn-warning">Place Order</Link>
        </div>
    );
};

export default Cart;