import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList.js";
import Axios from "axios";


export default function SearchForm() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    Axios.get('https://rick-api.herokuapp.com/api/')
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
    </section>
  )

        }
