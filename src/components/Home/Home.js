import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Product from './Product';
const Home = () => {
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
            // console.log(addededProduct);
            if (addededProduct) {
                const quantity = getStoredData[id];
                addededProduct.quantity = quantity
                savedCart.push(addededProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }


    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="d-flex">
                <div className="row row-cols-1 row-cols-md-3 g-4 me-2">
                    {
                        products.length === 0 && <div class="spinner-border text-primary " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        products.map((product, _id) => <Product
                            product={product}
                            key={_id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;