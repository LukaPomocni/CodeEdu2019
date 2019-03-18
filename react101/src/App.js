import React, { Component } from "react";
import "./App.css";
import NasaKomponenta from "./components/nasaKomponenta";

class App extends Component {
  imena = ["Pera", "Mika", "Zika"];

  render() {
    return (
      <React.Fragment>
        {this.imena.map(ime => (
          <NasaKomponenta key={ime} ime={ime} />
        ))}
        {/* <NasaKomponenta ime={"Pera"} info={{ prezime: "Peric", broj: 1 }} />
        <NasaKomponenta ime={"Mika"} />
        <NasaKomponenta ime={"Zika"} /> */}
      </React.Fragment>
    );
  }
}

export default App;
