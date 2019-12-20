import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(function(response){
        setCharacters(response.data.results);
      })
      .catch(function(error){
        console.log("This is a get request error:", error);
      })
  }, []);

  return (
    <section className="character-list">
              {characters.map(function(character, index){
          return(
            <div key={index}>
              <img alt={character.name} src={character.image} />
              <div>
                <h2> {character.name} </h2>
                <h4>  {character.species} </h4>
              </div>
            </div>
          )
        })}
    </section>
  );
}
