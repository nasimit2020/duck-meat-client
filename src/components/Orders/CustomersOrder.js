import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const CustomersOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
    const [yourOrders, setYourOrders] = useState([]);
    console.log(yourOrders);
    useEffect(() => {
        const url = `https://fast-garden-94911.herokuapp.com/yourOrders/${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setYourOrders(data))
    }, [email])
    return (
        <div className="container">
            <Navbar></Navbar>
            <h2 className="text-center">Your All Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Quentity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {yourOrders.map(order =>
                        <tr>
                            <td>{order.shipment.name}</td>
                            <td>{order.date}</td>
                            <td>{order.products.quantity}</td>
                            <td>{order.products.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersOrder;