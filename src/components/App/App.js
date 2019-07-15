import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import Carousel from "../Carousel/Carousel";

export default function App() {
  return (
    <main>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={MainPage} />
    </main>
  );
}
