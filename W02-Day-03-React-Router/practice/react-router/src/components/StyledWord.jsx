import React from 'react';
import { useParams } from 'react-router-dom';
import './StyledWord.css';

function StyledWord() {
const { word, color1, color2 } = useParams();

const style = {
    color: color1,
    backgroundColor: color2,
};

return (
    <div className="styled-word" style={style}>
    <h1>{word}</h1>
    </div>
);
}

export default StyledWord;
