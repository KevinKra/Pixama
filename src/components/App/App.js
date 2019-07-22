import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../containers/NavBar/NavBar";
import LoginCard from "../../containers/LoginCard/LoginCard";
import RegisterCard from "../../containers/RegisterCard/RegisterCard";
import MoviePage from "../MoviePage/MoviePage";
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/moviepage" component={MoviePage} />
      <Route exact path="/login" component={LoginCard} />
      <Route exact path="/register" component={RegisterCard} />
    </main>
  );
}
