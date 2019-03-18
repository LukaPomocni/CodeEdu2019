import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class NasaKomponenta extends Component {
  render() {
    // console.log(this.props);
    return (
      // Alert je bootstrap komponenta
      <Alert className="nasEl" variant="dark">
        Zdravo {this.props.ime}{" "}
        {this.props.info
          ? `${this.props.info.prezime}#${this.props.info.broj}`
          : ``}
      </Alert>
    );
  }
}

export default NasaKomponenta;
