
import React, { useState, useEffect } from 'react';

const PokemonList = () => {
const [pokemonList, setPokemonList] = useState([]);

const fetchPokemon = async () => {
    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setPokemonList(data.results);
    } catch (error) {
    console.error('Error fetching Pokémon:', error);
    }
};

useEffect(() => {
    fetchPokemon();
}, []);

return (
    <div>
    <h1>All 807 Pokémon</h1>
    <button onClick={fetchPokemon}>Fetch Pokémon</button>
    <ul>
        {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
        ))}
    </ul>
    </div>
);
};

export default PokemonList;
