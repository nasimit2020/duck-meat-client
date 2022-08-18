
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL);
    const onSubmit = data => {
        const addProduct ={
            productName: data.productName,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL,
        }
        console.log(addProduct);
        fetch('http://localhost:5000/admin/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => console.log(res))
        reset();
        alert("Product added successfully");
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '6924bbefc944729136d86b25e460a4eb')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="p-5">
            <h5>Add Product</h5>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <div className="col-md-6">
                        <label>Product Name</label>
                        <input className="form-control" {...register("productName")} />
                    </div>
                    <div className="col-md-6">
                        <label>Wight</label>
                        <input className="form-control" {...register("wight")} />
                    </div>
                    <div className="col-md-6">
                        <label>Add Price</label>
                        <input className="form-control" {...register("price")} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <input type="file" className="form-control" onChange={handleImageUpload}/>
                    </div>
                    <div className="col-md-2 mt-4 ms-auto">
                        <input type="submit" className="form-control bg-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;