import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fast-garden-94911.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">SL No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Wight</th>
                    <th scope="col">update/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, _id) => <AllProducts product={product} key={_id}> </AllProducts>)
                }
            </tbody>
        </table>
    );
};

export default ManageProduct;