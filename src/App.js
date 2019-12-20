import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'



export default function App() {
  return (
    <main>
      <Header />
    </main>
  );
}
