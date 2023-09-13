import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function AuthorForm() {
    const [author, setAuthor] = useState({ name: '' });
    const [error, setError] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        // Fetch author data by ID if 'id' is provided (for editing)
        // You should implement the API call here
    }, [id]);

    const handleChange = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (id) {
                // Update existing author
                // You should implement the API call here
            } else {
                // Create a new author
                // You should implement the API call here
            }
            history.push('/');
        } catch (err) {
            setError('Error: Unable to save author.');
        }
    };

    return (
        <div>
            <h2>{id ? 'Edit Author' : 'Add Author'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={author.name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AuthorForm;
