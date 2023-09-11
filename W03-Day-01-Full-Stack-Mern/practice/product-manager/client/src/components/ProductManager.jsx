import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const ProductManager = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch and set the list of products from the server
        axios.get('/api/products').then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm />
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.title} - ${product.price}
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManager;
