import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product details using the provided ID
        axios.get(`/api/products/${id}`).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

const handleDelete = async () => {
    try {
        await axios.delete(`/api/products/${id}`);
        history.push('/'); // Redirect to the main view after deleting
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

<button onClick={handleDelete}>Delete</button>

export default ProductDetail;
