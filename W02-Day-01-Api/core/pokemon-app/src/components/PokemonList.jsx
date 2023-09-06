import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
const [pokemonList, setPokemonList] = useState([]);

const fetchPokemon = async () => {
    try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
    setPokemonList(response.data.results);
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
