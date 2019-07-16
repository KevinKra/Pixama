import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

export default function App() {
  return (
    <main className="App">
      <Route exact path="/" component={MainPage} />
    </main>
  );
}
