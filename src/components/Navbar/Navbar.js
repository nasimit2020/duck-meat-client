import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Navbar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        loggedInUser.email = '';
    }
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
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checkOut">Checkout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link first" to="/">
                                    {
                                        loggedInUser.email ? <button onClick={signOut} className="btn btn-warning">{loggedInUser.displayName}</button> : <Link style={{padding: '0px'}} className="nav-link" to="/signup">Login</Link>
                                    }
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