import React, { useState } from 'react';

function AddPlayer() {
    const [player, setPlayer] = useState({
        name: '',
        game1: '',
        game2: '',
        game3: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer({
            ...player,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to add the new player
        fetch('/api/players', {
            method: 'POST',
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
                console.log('Player added successfully:', data);
            })
            .catch((error) => {
                // Handle errors (e.g., display an error message)
                console.error('There was a problem with the POST request:', error);
            });

        // Clear the form inputs after submission
        setPlayer({
            name: '',
            game1: '',
            game2: '',
            game3: '',
        });
    };

    return (
        <div>
            <h1>Add New Player</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={player.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Game 1 Status:
                    <input
                        type="text"
                        name="game1"
                        value={player.game1}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Game 2 Status:
                    <input
                        type="text"
                        name="game2"
                        value={player.game2}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Game 3 Status:
                    <input
                        type="text"
                        name="game3"
                        value={player.game3}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayer;
