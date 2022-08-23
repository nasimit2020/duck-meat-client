import React, { useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Navbar from '../Navbar/Navbar';
import './OrderSubmit.css'


const OrderSubmit = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://fast-garden-94911.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getStoredData = getStoredCart();
        let savedCart = [];
        for (const id in getStoredData) {
            const addededProduct = products.find(product => product._id === id);
            if(addededProduct){
                const quantity = getStoredData[id];
                addededProduct.quantity = quantity
                savedCart.push(addededProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    const onSubmit = (data) => {
        const orderDetails = {...loggedInUser, products: cart[0], shipment: data, date: new Date()};
        fetch('https://fast-garden-94911.herokuapp.com/orderSubmit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => {
            // clearTheCart();
            alert("Order Submitted");
        })
        reset();
        deleteShoppingCart();
    };
    

    

    return (

        <div className="">
            <Navbar></Navbar>
            <div className="w-50 form-design">
                <h2 className="text-center">Delivery Address</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name")} className="form-control" /> <br />
                    <input placeholder="Email" value={loggedInUser.email}  {...register("email")} className="form-control" /> <br />
                    <input placeholder="Phone Number" value={loggedInUser.phoneNumber} {...register("phone")} className="form-control" /> <br />
                    <input placeholder="Address" {...register("address")} className="form-control" /> <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" className='btn btn-warning' />
                </form>
            </div>
        </div>
    );
};

export default OrderSubmit;