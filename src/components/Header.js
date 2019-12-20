import React from "react";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import {Route, Link, Switch} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <WelcomePage />
      <div>
      <Link to="/character-list">Character List</Link>
      <Link to="/"> Home </Link>
      </div>

    <Switch>
      <Route path="/character-list">
        <CharacterList />
      </Route>
      <Route path="/">
        <Header />
      </Route>
    </Switch>

    </header>
  );
}
