import React, { Component } from "react";
import "./App.css";
import NasaKomponenta from "./components/nasaKomponenta";
import Header from "./components/header";

class App extends Component {
  render() {
    let Slike = [
      ["John", 10],
      ["Laptop", 9],
      ["Flower", 8],
      ["Shop", 7],
      ["Tiger", 6],
      ["Pig", 5],
      ["Backpack", 4],
      ["Sport", 3]
    ];
    return (
      <div>
        <Header korisnik={{ ime: "Luka", kurs: "FE" }} />
        {Slike.map(slika => (
          <NasaKomponenta slika={slika[0]} sekunde={slika[1]} />
        ))}
      </div>
    );
  }
}

export default App;
