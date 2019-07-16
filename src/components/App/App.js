import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../NavBar/NavBar";

export default function App() {
  return (
    <main className="App">
      <Route exact path="/" component={NavBar} />
      <Route exact path="/" component={MainPage} />
    </main>
  );
}
