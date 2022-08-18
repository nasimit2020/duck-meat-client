import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import Navbar from '../Navbar/Navbar';
import './OrderSubmit.css'

const OrderSubmit = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const savedCart = getStoredCart();
        const orderDetails = {...loggedInUser, products: savedCart, shipment: data}
        fetch('http://localhost:5000/orderSubmit', {
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
    };
    

    

    return (

        <div className="">
            <Navbar></Navbar>
            <div className="w-50 form-design">
                <h2 className="text-center">Type Delivery Address</h2>
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