import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
  }

  handleLog() {
    // this.state.isLogged = !this.state.isLogged;
    this.setState({ isLogged: !this.state.isLogged });
  }

  render() {
    let isLogged = this.state.isLogged;
    let poruka = "";

    let korisnik = this.props.korisnik;

    if (isLogged) poruka = `Dobro dosao ${korisnik.ime}`;
    else poruka = "Molimo, ulogujte se";
    return (
      <div>
        {poruka}
        <button onClick={this.handleLog.bind(this)}>
          {isLogged ? "Log out" : "Log in"}
        </button>
      </div>
    );
  }
}

export default Header;
