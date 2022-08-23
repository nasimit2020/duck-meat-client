import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';


const AllProducts = (props) => {
    const { productName, price, wight, _id } = props.product;
    const deleteProduct = (_id) => {
        const url = `https://fast-garden-94911.herokuapp.com/delete/${_id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log('Delete Successfully');
            })
    }
    
    const updateProduct = (_id) => {
        console.log(_id);

    }
    return (
        <tr>
            <th scope="row">{ }</th>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{wight}</td>
            <td>
                <button onClick={() => updateProduct(_id)} type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"><EditIcon color="secondary"></EditIcon></button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="exampleModalLabel">{productName}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="" />
                                <input type="" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => deleteProduct(_id)} className="btn "><DeleteIcon sx={{ color: pink[500] }}></DeleteIcon></button></td>

        </tr >

    );
};

export default AllProducts;
