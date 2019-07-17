import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../containers/NavBar/NavBar";
import LoginCard from '../../containers/LoginCard/LoginCard';
import RegisterCard from '../../containers/RegisterCard/RegisterCard';
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" component={MainPage} />
      <Route exact path="/login" component={LoginCard} />
      <Route exact path="/register" component={RegisterCard} />
    </main>
  );
}
