import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            {/* <h1>MERN Product Manager</h1> */}
            <ProductForm />
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// ...

const handleDelete = async (productId) => {
    try {
        await axios.delete(`/api/products/${productId}`);
        setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

<ul>
    {products.map((product) => (
        <li key={product._id}>
            <Link to={`/product/${product._id}`}>{product.title}</Link> - ${product.price}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
        </li>
    ))}
</ul>

export default ProductManager;

