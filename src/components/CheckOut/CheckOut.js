import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakedb';
import Navbar from '../Navbar/Navbar';

const CheckOut = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getStoredData = getStoredCart();
        let savedCart = [];
        for (const id in getStoredData) {
            const addededProduct = products.find(product => product._id === id);
            if (addededProduct) {
                const quantity = getStoredData[id];
                addededProduct.quantity = quantity
                savedCart.push(addededProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    let total = 0;
    for (const product of cart) {
        const subTotal = product.quantity * product.price;
        total = total + subTotal;
        total = total + parseFloat(product.price);
    }

    return (
        <div className="container">
            <Navbar cart={cart}></Navbar>
            <h2>Checkout</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quentity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product =>
                        <tr>
                            <td>{product.productName}</td>
                            {/* <td>{pd.quantity}</td> */}
                            <td>{1}</td>
                            {/* <td>{pd.quantity * pd.price}</td> */}
                            <td>{cart[0].price}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">Total</td>
                        <td className="fw-bold">{ }</td>
                    </tr>
                </tfoot>
            </table>
            <Link className="btn btn-warning float-end px-5" to="/orderSubmit">Buy Now</Link>
        </div>
    );
};

export default CheckOut;