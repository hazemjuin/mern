import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListAuthors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        // Fetch authors from the backend and set them to the 'authors' state
        // You should implement the API call here
    }, []);

    return (
        <div>
            <h2>All Authors</h2>
            <ul>
                {authors.map((author) => (
                    <li key={author._id}>
                        {author.name}
                        <Link to={`/edit/${author._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(author._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListAuthors;
