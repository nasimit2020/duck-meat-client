import React, { useContext } from 'react';
import './Admin.css'
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import { UserContext } from '../../App';


const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const signOut = () => {
    loggedInUser.email = '';
  }
  return (
    <div className="row admin-container">
      <div className="col-md-3 navbar-container">
        <div className="pt-5 text-center">
          <h5 className=" text-light d-inline">Dashboard | <Link className="nav-link d-inline" to="/">Home</Link> </h5>
          <Link className="nav-link" to="manageProduct">Manage Product</Link>
          <Link className="nav-link" to="addProduct">Add Product</Link>
          <Link className="nav-link" to="upDateProduct">Update Product</Link>
          <Link className="nav-link " to="*">{loggedInUser.email}</Link>
          <Link className="nav-link" to="/">
            <button onClick={signOut} className="btn btn-warning">Sign Out</button>
          </Link>
        </div>
      </div>
      <div className="col-md-9 addProduct-container">
        <div className="pt-5">
          <Routes>
            <Route path="/*" element={<ManageProduct />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="upDateProduct" element={<UpdateProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;