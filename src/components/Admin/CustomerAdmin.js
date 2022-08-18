import React, { useContext } from 'react';
import { UserContext } from '../../App';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import CustomersOrder from '../Orders/CustomersOrder';
import DeliveryStatus from './DeliveryStatus';

const CustomerAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        loggedInUser.email = '';
    }

    return (
        <div className="row admin-container">
            <div className="col-md-3 navbar-container">
                <div className="pt-5 text-center">
                    <h5 className=" text-light d-inline">Dashboard | <Link className="nav-link d-inline" to="/">Home</Link> </h5>
                    <Link className="nav-link" to="yourOrder">Orders</Link>
                    <Link className="nav-link" to="deliveryStatus">Delivery Status</Link>
                    <Link className="nav-link" to="/">
                        <button onClick={signOut} className="btn btn-warning">Sign Out</button>
                    </Link>

                </div>
            </div>
            <div className="col-md-9 addProduct-container">
                <div className="pt-5">
                    <Routes>
                        <Route path="yourOrder" element={<CustomersOrder />} />
                        <Route path="deliveryStatus" element={<DeliveryStatus />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default CustomerAdmin;