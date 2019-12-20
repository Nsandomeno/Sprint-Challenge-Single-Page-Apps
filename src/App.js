import React from "react";
import Header from "./components/Header.js";
import {Route, Switch, Link} from 'react-router-dom';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm.js';


export default function App() {
  return (
    <main>
      <Header />
      <div>
      <Link to="/character-list">Character List</Link>
      <Link to="/"> Home </Link>
      </div>
     <Switch>
      <Route path="/character-list">
        <CharacterList />
      </Route>
      <Route exact path="/">
        <WelcomePage />
        <SearchForm />
      </Route>
      </Switch>
    </main>
  );
}
