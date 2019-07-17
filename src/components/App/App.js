import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../containers/NavBar/NavBar";
import LoginCard from '../../containers/LoginCard/LoginCard';
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      <Route exact path="/" component={NavBar} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginCard} />
    </main>
  );
}
