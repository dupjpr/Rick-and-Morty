import React, {useState, useEffect} from 'react';

import './style/characters.css';



const Characters = () => {


    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));

    }, [])

    return(

    <div className="Characters">
        {characters.map( character => (
            <div className="container">
                <div className="info">
                    <h2>{character.name}</h2>
                    <p> <strong> Specie: </strong> {character.species}</p>
                    <p> <strong> Gender:</strong>  {character.gender}</p>
                    <p> <strong> Origin: </strong> {character.origin.name}</p>
                </div>
                <img src={character.image} alt="character picture"/>
            </div>
        ))}
    </div>
    );

}

export default Characters;

