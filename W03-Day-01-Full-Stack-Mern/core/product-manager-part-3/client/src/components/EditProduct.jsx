import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        // Fetch the product details using the provided ID
        axios.get(`/api/products/${id}`).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/products/${id}`, product);
            history.push(`/product/${id}`);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={product.title}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={product.price}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleChange}
                />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
