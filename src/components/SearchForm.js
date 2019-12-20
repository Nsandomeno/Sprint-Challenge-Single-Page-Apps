import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
 
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(function(response){
      const data = response.data.results;
      const results = data.filter(character => 
        character.name.toLowerCase().includes(searchedTerm.toLowerCase())
        );
        setSearchResult(results);

    })
    .catch(function(error){
      console.log("This is an error from request:", error);
    })
  }, [searchedTerm])

  const handleChange = event => {
    setSearchedTerm(event.target.value);
  }

  return (
    <section className="search-form">
         <form className="search">
       <label>Search: </label>
       <input
       type="text"
       onChange={handleChange}
       value={searchedTerm}
       name="name"
       />
     </form>
     <span>Here are your search results: </span>
     <div>
     {searchResult.map(function(character, index){
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
    </div>
    </section>
  );
}
