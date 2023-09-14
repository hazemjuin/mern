import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState({
        name: '',
        game1: '',
        game2: '',
        game3: '',
    });

    useEffect(() => {
        // Fetch player data based on the 'id' parameter
        fetch(`/api/players/${id}`) 
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPlayer(data); 
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer({
            ...player,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a PUT request to update the player data
        fetch(`/api/players/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Handle success (e.g., redirect to player list)
                console.log('Player updated successfully:', data);
            })
            .catch((error) => {
                // Handle errors (e.g., display an error message)
                console.error('There was a problem with the PUT request:', error);
            });
    };

    return (
        <div>
            <h1>Edit Player</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields for editing player information */}
                {/* ... (same as the AddPlayer component) */}
                <button type="submit">Update Player</button>
            </form>
        </div>
    );
}

export default EditPlayer;
