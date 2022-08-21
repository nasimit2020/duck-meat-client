import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { getStoredCart } from '../../utilities/fakedb';
import { useState } from 'react';

const Navbar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [quantity, setQuantity] = useState();
    useEffect(() => {
        const getStoredData = getStoredCart();
        console.log(getStoredData);
        let quantity = 0;
        for (const count in getStoredData) {
            quantity = quantity + getStoredData[count];
        }
        setQuantity(quantity)
    }, []);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="nav-link" to="/">Fency Duck</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checkOut">Orders</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ? <p className="btn btn-warning">{loggedInUser.displayName}</p> : <Link className="nav-link" to="/signup">Login</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checkOut">
                                    <FontAwesomeIcon icon={faCartShopping} /><span className="text-danger">{quantity}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;