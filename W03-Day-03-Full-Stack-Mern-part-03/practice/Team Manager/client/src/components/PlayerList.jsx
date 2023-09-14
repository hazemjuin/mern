import React, { useEffect, useState } from 'react';

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Fetch players from the server
        fetch('/api/players') 
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPlayers(data); // Update the state with the fetched player data
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div>
            <h1>Team Roster</h1>
            <ul>
                {players.map((player) => (
                    <li key={player._id}>
                        {player.name} - {player.game1}, {player.game2}, {player.game3}
                        {/* Add edit and delete buttons as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;

