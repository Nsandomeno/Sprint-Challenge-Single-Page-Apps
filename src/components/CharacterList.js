import React, { useEffect, useState } from "react";
import axios from 'axios';
//import CharacterCard from './CharacterCard.js';
import {Card, CardImg, CardTitle, CardBody, CardSubtitle} from 'reactstrap';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(function(response){
        //console.log("Successful response:", response.data.results);
        setCharacters(response.data.results);
      })
      .catch(function(error){
        console.log("Request error:", error);
      })

  }, []);

  return (
      <section>
        {characters.map(function(character, index){
          return(
            <Card key={index}>
              <CardImg src={character.image} />
              <CardBody>
                <CardTitle> {character.name} </CardTitle>
                <CardSubtitle>  {character.species} </CardSubtitle>
              </CardBody>
            </Card>
          )
        })}
      </section>

        
  );
}


