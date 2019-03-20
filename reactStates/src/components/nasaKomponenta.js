import React, { Component } from "react";

class NasaKomponenta extends Component {
  constructor() {
    super();
    this.state = { src: undefined };
  }

  generisiSliku = async search => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=OydT5OYqNx9rlguw3yHU3ZFEzGR5MSut&q=${search}&limit=25&offset=0&rating=G&lang=en`;

    let response = await fetch(url);
    let data = await response.json();
    return data.data[0].images.fixed_width.url;
  };

  componentDidMount() {
    (async () => {
      let url = await this.generisiSliku(this.props.slika);
      this.setState({ src: url });
    })();
  }

  render() {
    let slika = this.props.slika;
    let src = this.state.src;

    let iscrtaj = slika => {
      if (this.state.src !== undefined)
        return (
          <div>
            {slika}
            <br />
            <img src={src} alt={slika} />
          </div>
        );

      return <React.Fragment />;
    };

    return <div className="App">{iscrtaj(slika)}</div>;
  }
}

export default NasaKomponenta;
