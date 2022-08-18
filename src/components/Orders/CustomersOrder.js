import React, { useEffect, useState } from 'react';

const CustomersOrder = () => {
    const [yourOrders, setYourOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/yourOrders`
        fetch(url)
        .then(res => res.json())
        .then(data => setYourOrders(data))
    }, [])
    return (
        <div>
            <h2>Your All Orders Below</h2>
        </div>
    );
};

export default CustomersOrder;